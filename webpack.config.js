var HtmlwebpackPlugin=require('html-webpack-plugin');
var path=require('path');
var webpack=require('webpack');

module.exports={
	entry:'./src/main.js',
	output:{
		path:'./dist',
		filename:'/bundle.js'
	},
    resolve:{
    	extensions:['','.js','.vue'],
    	alias:{
    	'vue$':'vue/dist.vue',
    	'src':path.resolve(__dirname,'src'),
    	'comp':path.resolve(__dirname,'src/components'),
        'img':path.resolve(__dirname,'statics/images'),
        'kits':path.resolve(__dirname,'src/kits') 
    	}  
    },
	module:{
        loaders:[
        {
           test:/\.vue$/,
           loaders:['vue-loader']
        },
        {
           test:/\.js$/,
           loader:'babel',
           exclude:/node_modules/
        },
        {
        	test:/\.\\vue.preview.src.*?js$/,
        	loader:'babel'
        },
        {
        	test:/\.css$/,
        	loader::['style-loader','css-loader','autoprefixer']
        },
        {
        	test:/\.less$/,
        	loader:['style-loader','css-loader','autoprefixer','less-loader']
        },
        {
            test:/\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
            loader:'file-loader?name=[hash].[ext]'
        },
        {
            test:/\.(png|jpg)$/,
            loader:'url>limit=261564' 
        }

        ]

	},
    devServer:{
    	
    }





}