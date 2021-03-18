const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
          },
        {
          // vamos instalar a seguinte dependencia 
          // npm install style-loader css-loader
          // depois que instalarmos vamos colocar o exclude e use
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' }, // vai pegar pegar o css que foi interpretado e vai injetar dentro do html
            { loader: 'css-loader' }, // le arq css e interpretar as importações
          ] 
        }
      ]
    },
};