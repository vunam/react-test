module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
	  loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]"},
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?presets[]=react,presets[]=es2015'] },
	  ]
	}
}