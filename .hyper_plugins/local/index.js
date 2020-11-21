
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(172, 138, 172, 0.5)',
        cursorAccentColor: '#262626',
        foregroundColor: '#cbcbcb',
        backgroundColor: '#262626',
        selectionColor: 'rgba(158, 195, 196, 0.09999999999999998)',
        borderColor: '#8aabac',
        colors: {
          black: '#262626',
          red: '#ac8a8c',
          green: '#9ec49f',
          yellow: '#c4c19e',
          blue: '#9ec3c4',
          magenta: '#c49ec4',
          cyan: '#8aabac',
          white: '#cbcbcb',
          lightBlack: '#424242',
          lightRed: '#c49ea0',
          lightGreen: '#9ec49f',
          lightYellow: '#c4c19e',
          lightBlue: '#9ec3c4',
          lightMagenta: '#c49ec4',
          lightCyan: '#8aabac',
          lightWhite: '#e7e7e7',
        },
      });
    };
  