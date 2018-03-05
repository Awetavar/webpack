
import webpack from 'webpack';

module.exports = {
  devtool:"eval-source-map",
  entry : __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output : {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer:{
    contenBase:"./src",
    port: "8081",
    inline:true
  }
}