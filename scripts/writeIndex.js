const fs = require("fs");

const components = fs.readdirSync("src/build/jss").map((fileName) => {
  let componentName = fileName.slice(0, fileName.length - 3);

  if (componentName === "switch") componentName = "_switch";

  return {
    name: componentName,
    path: fileName,
  };
});

fs.writeFileSync(
  "src/build/index.js",
  `
${components
  .map(
    (component) =>
      `const ${component.name} = require("./jss/${component.path}")`
  )
  .join(";\n")};
  module.exports = {
    ${components.map((component) => `...${component.name}`).join(",\n")}
  }
  `,
  (err) => {
    if (err) throw err;
  }
);
