const preprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  mode,
  target: 'electron-renderer',
  resolve: {
    extensions: ['.mjs', '.js', '.svelte']
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
            preprocess: preprocess({
              /* options */
            })
          }
        }
      }
    ]
  },
  devtool: prod ? false : 'source-map'
}
