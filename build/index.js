const plugin = require("tailwindcss/plugin");
const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const styles = {};

fs.readdirSync("./build/jss")
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .map((file) => {
    styles[file.slice(0, -3)] = require(path.join(__dirname, file));
  });

// module.exports = plugin(({ addComponents }) => {
//   addComponents({
//     ...styles,
//   });
// });
