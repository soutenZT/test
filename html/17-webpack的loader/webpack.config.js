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
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            //先加载 再解析 所以有顺序
            //当有多个loader的时候，从右向左
            use: ['style-loader', 'css-loader']
        }]
    }
}