//commonJs的模块规范导入
const { sum, mul } = require("./js/mainUtil.js")

console.log(sum(3, 4));
console.log(mul(5, 5));

//es6的模块化规范导入、
import { name } from "./js/info"
console.log(name);

//将css文件也当作模块
require("./css/nomal.css");