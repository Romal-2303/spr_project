export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.ImportDeclaration)
    .filter((path) =>
      path.node.specifiers.some(
        (s) => s.type === "ImportSpecifier" && s.imported.name === "Select"
      )
    )
    .forEach((path) => {
      // Remove the named specifier for Select
      path.node.specifiers = path.node.specifiers.filter(
        (s) => !(s.type === "ImportSpecifier" && s.imported.name === "Select")
      );

      // Add a default import specifier for Select
      path.node.specifiers.unshift(
        j.importDefaultSpecifier(j.identifier("Select"))
      );

      // Update the import path
      path.node.source.value = "@/components/Select/Select";
    });

  // change `optionsArr`
  root.find(j.VariableDeclaration).forEach((path) => {
    const decl = path.node.declarations[0];

    if (decl.id.name === "optionsArr" && decl.init.type === "ArrayExpression") {
      decl.init.elements.forEach((obj) => {
        obj.properties.forEach((prop) => {
          if (prop.key.name === "value") {
            prop.key.name = "valueSelect";
          }
          if (prop.key.name === "label") {
            prop.key.name = "labelSelect";
          }
        });
      });
    }
  });

  // Add `useState` declaration

  const useStateDecl = j.variableDeclaration("const", [
    j.variableDeclarator(
      j.arrayPattern([j.identifier("value"), j.identifier("setValue")]),
      j.callExpression(
        j.memberExpression(j.identifier("React"), j.identifier("useState")),
        [j.literal("react")]
      )
    ),
  ]);

  root
    .find(j.VariableDeclarator, { id: { name: "CreatePrompt" } })
    .filter(
      (path) =>
        path.node.init &&
        (path.node.init.type === "ArrowFunctionExpression" ||
          path.node.init.type === "FunctionExpression")
    )
    .forEach((path) => {
      const func = path.node.init;

      if (func.body.type == "BlockStatement") {
        func.body.body.unshift(useStateDecl);
      }
    });

  root.findJSXElements("Select").forEach((path) => {
    const openingElement = path.node.openingElement;

    // Remove unwanted props

    openingElement.attributes = openingElement.attributes.filter((attr) => {
      if (!attr.name || !attr.name.name) return true;
      const name = attr.name.name;

      return name !== "className";
    });

    openingElement.attributes = [
      j.jsxAttribute(
        j.jsxIdentifier("value"),
        j.jsxExpressionContainer(j.identifier("value"))
      ),
      j.jsxAttribute(j.jsxIdentifier("defaultValue"), j.literal("lucy")),
      j.jsxAttribute(
        j.jsxIdentifier("options"),
        j.jsxExpressionContainer(j.identifier("optionsArr"))
      ),
      j.jsxAttribute(
        j.jsxIdentifier("onValueChange"),
        j.jsxExpressionContainer(j.identifier("setValue"))
      ),
      j.jsxAttribute(
        j.jsxIdentifier("placeholder"),
        j.literal("Choose a framework")
      ),
    ];
  });

  return root.toSource({ quote: "single" });
};
