export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // 1

  // Replace import { V2_Button } from '...';
  root
    .find(j.ImportSpecifier, { imported: { name: "v2_Button" } })
    .forEach((path) => {
      path.node.imported.name = "Button";
      path.node.local.name = "Button";
    });

  // Replace default import: import V2_Button from '...';
  root
    .find(j.ImportDefaultSpecifier, { local: { name: "V2_Button" } })
    .forEach((path) => {
      path.node.local.name = "Button";
    });

  // 2. Update import paths like './V2_Button/V2_Button' → './Button/Button'
  root.find(j.ImportDeclaration).forEach((path) => {
    const importPath = path.node.source.value;

    if (typeof importPath === "string" && importPath.includes("V2_Button")) {
      path.node.source.value = importPath.replace(/V2_Button/g, "Button");
    }
  });

  // 3. Replace JSX elements: <V2_Button ...> -> <Button ...>
  root
    .find(j.JSXElement, { openingElement: { name: { name: "V2_Button" } } })
    .forEach((path) => {
      path.node.openingElement.name.name = "Button";

      if (path.node.closingElement) {
        path.node.closingElement.name.name = "Button";
      }

      // 4. Rename props
      path.node.openingElement.attributes.forEach((attr) => {
        if (attr.type === "JSXAttribute") {
          if (attr.name.name === "buttonStyle") {
            attr.name.name = "variant";
          }
          if (attr.name.name === "customClassName") {
            attr.name.name = "className";
          }
          if (attr.name.name === "buttonType") {
            attr.name.name = "type";
          }
        }
      });
    });

  return root.toSource({ quote: "single" });
};

// jscodeshift -t ./codemods/rename-component.js ../src/components --extensions=js,jsx,ts,tsx --parser=tsx
