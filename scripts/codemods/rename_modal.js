export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Replace import { Modal } with import Modal
  root
    .find(j.ImportDeclaration)
    .filter((path) =>
      path.node.specifiers.some(
        (s) => s.type === "ImportSpecifier" && s.imported.name === "Modal"
      )
    )
    .forEach((path) => {
      // Remove the named specifier for Modal
      path.node.specifiers = path.node.specifiers.filter(
        (s) => !(s.type === "ImportSpecifier" && s.imported.name === "Modal")
      );

      // Add a default import specifier for Accordion
      path.node.specifiers.unshift(
        j.importDefaultSpecifier(j.identifier("Modal"))
      );

      // Update the import path
      path.node.source.value = "@/components/Modal/Modal";
    });

  // Replace Modal JSX props
  root
    .find(j.JSXElement, { openingElement: { name: { name: "Modal" } } })
    .forEach((path) => {
      const openingElement = path.node.openingElement;

      // Remove unwanted props
      openingElement.attributes = openingElement.attributes.filter((attr) => {
        if (!attr.name || !attr.name.name) return true;
        const name = attr.name.name;
        return (
          name !== "title" &&
          name !== "closable" &&
          name !== "onOk" &&
          name !== "onCancel"
        );
      });

      // Add onOpenChange and className
      const existingAttrNames = openingElement.attributes.map(
        (attr) => attr.name && attr.name.name
      );

      if (!existingAttrNames.includes("onOpenChange")) {
        openingElement.attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier("onOpenChange"),
            j.jsxExpressionContainer(
              j.arrowFunctionExpression(
                [],
                j.callExpression(j.identifier("setIsModalOpen"), [
                  j.arrowFunctionExpression(
                    [j.identifier("prevState")],
                    j.unaryExpression("!", j.identifier("prevState"))
                  ),
                ])
              )
            )
          )
        );
      }

      if (!existingAttrNames.includes("className")) {
        openingElement.attributes.push(
          j.jsxAttribute(j.jsxIdentifier("className"), j.literal("px-2"))
        );
      }
    });

  root
    .find(j.VariableDeclaration)
    .filter((path) =>
      path.node.declarations.some(
        (decl) => decl.id.name === "handleOk" || decl.id.name === "handleCancel"
      )
    )
    .remove();

  return root.toSource({ quote: "single" });
};
