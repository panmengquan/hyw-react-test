const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizaerPlugin = require('css-minimizer-webpack-plugin');
const glob = require('glob');


const entries = {};
const fileNames = glob.sync('./components/**/*.js?(x)');
// console.log('fileNames: ', fileNames);
fileNames.forEach(file => {
  const filePath = file.replace(/^\.\/components\/(.+)\.js?$/, '$1');
  entries[filePath] = file;
})


module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    // 打包到lib目录下
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    // 每次打包时，都自动清除原有的打包文件
    clean: true,
    // 发布到npm库的相关信息
    // name是发布到npm时的库名，别人安装就是安装它
    // type是暴露库的形式，umd就表示别人可以在所有模块定义下引入这个库
    // 比如CommonJs AMD 和全局变量的形式
    // export用来指定哪一个导出应该被暴露为一个库
    // 'default'就是我们默认导出的库
    library: {
      name: 'publish-react-hywtest',
      type: 'umd',
     
    },
    
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 因为我们在文件中引入就是publicTest.css
      // 所以在打包后，也用这个名字，以免引入失败
      filename: '[name].css'
    })
  ],
  resolve: {
    // 支持.js .jsx .json文件引入时隐藏后缀
    extensions: ['.js', '.jsx', '.json']
  },
  // 压缩和优化的相关配置都写在optimization里
  optimization: {
    //分包
    splitChunks: {
      chunks: 'all',
      name: 'chunk'
    },
    //压缩
    minimizer: [
      new CssMinimizaerPlugin()
    ]
  },
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
