export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Replace import { Collapse } with import Accordian
  root
    .find(j.ImportDeclaration)
    .filter((path) =>
      path.node.specifiers.some(
        (s) => s.type === "ImportSpecifier" && s.imported.name === "Collapse"
      )
    )
    .forEach((path) => {
      // Remove the named specifier for Collapse
      path.node.specifiers = path.node.specifiers.filter(
        (s) => !(s.type === "ImportSpecifier" && s.imported.name === "Collapse")
      );

      // Add a default import specifier for Accordion
      path.node.specifiers.unshift(
        j.importDefaultSpecifier(j.identifier("Accordian"))
      );

      // Update the import path
      path.node.source.value = "@/components/Accordian/Accordian";
    });

  // Update import paths
  root.find(j.ImportDeclaration).forEach((path) => {
    const importPath = path.node.source.value;

    if (typeof importPath === "string" && importPath.includes("antd")) {
      path.node.source.value = importPath.replace(
        "antd",
        "@/components/Accordian/Accordian"
      );
    }
  });

  // Replace JSX elements: <Collapse ...> --> <Accordion />

  root
    .find(j.JSXElement, { openingElement: { name: { name: "Collapse" } } })
    .forEach((path) => {
      path.node.openingElement.name.name = "Accordian";

      if (path.node.closingElement) {
        path.node.closingElement.name.name = "Accordian";
      }

      const newAttrs = path.node.openingElement.attributes.filter(
        (attr) => attr.type === "JSXAttribute" && attr.name.name === "items"
      );

      newAttrs.forEach((attr) => {
        if (attr.type === "JSXAttribute") {
          if (attr.name.name === "items") {
            attr.name.name = "optionsArr";
          }
        }
      });

      path.node.openingElement.attributes = newAttrs;
    });

  return root.toSource({ quote: "single" });
};
