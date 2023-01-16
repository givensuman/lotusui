const plugin = require("tailwindcss/plugin");

const button = require("./jss/button");
const badge = require("./jss/badge");
const card = require("./jss/card");
const divider = require("./jss/divider");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ...button,
    ...badge,
    ...card,
    ...divider,
  });
});
