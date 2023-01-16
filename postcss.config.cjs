module.exports = {
  plugins: [
    require("postcss-apply"),
    // require("postcss-minify"),
    require("postcss-nested"),
    require("postcss-discard-comments"),
    require("postcss-each"),
    // require("postcss-rtl"),
    require("autoprefixer"),
  ],
};
