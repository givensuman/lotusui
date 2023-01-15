const plugin = require("tailwindcss/plugin");

const button = require("./jss/button");
const checkbox = require("./jss/checkbox");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ...button,
    ...checkbox,
  });
});
