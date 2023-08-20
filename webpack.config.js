const path = require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports={
   devServer:{
      static:{
         directory:path.resolve(__dirname,'dist')
      }
   },
   mode:'production',
   entry:{
      main:'./scripts/main.js',
   },
   module:{
      rules:[{
         test:/\.css$/,
         use:[MiniCssExtractPlugin.loader,'css-loader',]
      },
      {
         test:/\.js$/,
         use:['babel-loader']
      },
      ]
   },
   output:{
      path:path.resolve(__dirname,'dist'),
      filename:'[name].bundle.js',
   },
   plugins:[
      new MiniCssExtractPlugin()
   ]
}