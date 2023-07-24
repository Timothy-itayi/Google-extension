const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './js/index.js', // The main entry point of your extension
  output: {
    path: path.resolve(__dirname, 'build'), // Output folder for the bundled files
    filename: 'bundle.js', // Output file name
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Path to your HTML template (Use the newly created index.html)
      filename: 'index.html', // Output file name for the HTML
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' }, // Copy the manifest file to the build folder
        // Add any other static assets you need to copy to the build folder
      ],
    }),
  ],
}
