// preview.config.js

/** @type {import("@previewjs/config").PreviewConfig} */
module.exports = {
  /**
   * Set up a custom component to wrap around previewed components.
   *
   * Useful to set up context providers and global CSS.
   */
  wrapper: {
    path: "__previewjs__/Wrapper.tsx",
    componentName: "Wrapper",
  },
};
