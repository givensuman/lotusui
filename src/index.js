const plugin = require("tailwindcss/plugin");

const app = require("./jss/app");
const button = require("./jss/button");
const badge = require("./jss/badge");
const card = require("./jss/card");
const divider = require("./jss/divider");
const tag = require("./jss/tag");
const spinner = require("./jss/spinner");
const kbd = require("./jss/kbd");
const table = require("./jss/table");
const input = require("./jss/input");
const _switch = require("./jss/switch");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ...app,
    ...button,
    ...badge,
    ...card,
    ...divider,
    ...tag,
    ...spinner,
    ...kbd,
    ...table,
    ...input,
    ..._switch,
  });
});
