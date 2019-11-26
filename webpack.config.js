const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, './src/Main.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 8080,
	},
	resolve: {
		modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                        ],
                    }
                },
			},
			{
                test: [/\.css$/, /\.scss$/],
                exclude: /node_modules/,
				loader: ['style-loader' ,'css-loader?modules', 'sass-loader'],
      		},
		],
	},
}
