const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);

// TIP BABEL OVERRIDE
/**
 * Modificar algumas configurações
 * padrões do babel para podermos utilziar inportação mais limpa
 */

// BABEL config override
