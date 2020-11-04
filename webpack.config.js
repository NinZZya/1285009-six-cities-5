const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        port: 1881,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
        "@components": path.resolve(__dirname, 'src/components'),
        "@pages": path.resolve(__dirname, 'src/components/pages'),
        "@routes": path.resolve(__dirname, 'src/components/routes'),
        "@reducer": path.resolve(__dirname, 'src/store/reducer'),
      },
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
