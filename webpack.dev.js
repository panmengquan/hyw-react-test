const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './components/index.js',
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理js和jsx
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 开发模式下打包html的时候，以index.html为模板
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  // 配置开发模式的source-map，便于我们调试代码，定位bug
  devtool: 'cheap-module-source-map',
  // 配置开发服务器
  devServer: {
    port: 3001,
    open: true
  },
  resolve: {
    // 自动补充扩展名，引入的时候就可以省略文件后缀
    // 支持.js .jsx .json文件引入时隐藏后缀
    extensions: ['.js', '.jsx', '.json']
  },
  // externals用来定义哪些通过import引入的包不要被打包到boundle中
  // 也就是说，我们在写组件时引入的react和react-dom，不要打包
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    }
  }
}
