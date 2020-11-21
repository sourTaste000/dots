exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: "rgba(208, 208, 208, 0.8)",
    cursorAccentColor: "#151515",

    foregroundColor: "#d0d0d0",
    backgroundColor: "#202020",
    selectionColor: "rgba(48, 48, 48, 0.3)",

    colors: {
      black: "#151515",
      red: "#ac4142",
      green: "#7e8d50",
      yellow: "#e5b567",
      blue: "#6c99ba",
      magenta: "#9e4e85",
      cyan: "#7dd5cf",
      white: "#d0d0d0",
      lightBlack: "#505050",
      lightRed: "#ac4142",
      lightGreen: "#7e8d50",
      lightYellow: "#e5b566",
      lightBlue: "#6c99bb",
      lightMagenta: "#9e4e85",
      lightCyan: "#7dd5cf",
      lightWhite: "#f5f5f5"
    }
  });
};
