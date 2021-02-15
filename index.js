const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const svgr = require('@svgr/core').default;

module.exports = function (_, options) {
  return {
    name: 'snowpack-svgr',
    resolve: {
      input: ['.svgr.svg'],
      output: ['.js'],
    },
    async load({ filePath }) {
      const contents = fs.readFileSync(filePath, 'utf-8');
      const code = svgr
        .sync(contents, {
          componentName: path.basename(filePath).split('.')[0],
        })
        .replace('import * as React', 'import React');
      const { code: result } = babel.transformSync(code, {
        presets: ['@babel/preset-react'],
      });
      return result;
    },
  };
};
