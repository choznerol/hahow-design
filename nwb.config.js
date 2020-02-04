const { babel } = require('./package.json');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  babel,
  webpack: {
    extra: {
      extensions: ['.js', '.jsx'],
    },
    config(config) {
      return {
        ...config,
        external: {
          'styled-components': {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
          },
        },
      };
    },
  },
};
