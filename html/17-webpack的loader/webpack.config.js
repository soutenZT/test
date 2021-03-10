const path = require("path");

//css每个文件也可以作为模块和js一起打包到一个文件中
//只是webpack打包的话，需要依赖一个css-loder
//先通过命令install    npm install --save-dev css-loader
//然后配置
//然后因为css-loader只负责加载，不负责解析，所以还要依赖一个style-loader去解析
//npm install style-loader --save-dev
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "../dist/" //项目中有url的都会在前面自动加上dist/
    },
    module: {
        rules: [{
                test: /\.css$/,
                //先加载 再解析 所以有顺序
                //当有多个loader的时候，从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //图片也要当作模块处理
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //当引入的图片小于设置的字节,图片会被处理成base64编码的字符串
                        //当大于的时候，图片会被当成一个文件单独打包到dist文件中，需要file-loader加载
                        //图片被当成单独的文件打包到dist中，在index.html引入的时候，就会有路径问题
                        //1.将index.html也打包到dist中
                        //2.加配置publicPath

                        limit: 13000, //字节

                        //在dist中生成的图片有个hash30位的名字
                        //如果我们想生成新的文件夹，所有生成的图片都放到文件夹中，且名字中带有之前的名字
                        name: "img/[name].[hash:8].[ext]"

                    }
                }]
            }
        ]
    }
}