const plugin = require("tailwindcss/plugin");

const components = require("./build");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ...components,
  });
});
