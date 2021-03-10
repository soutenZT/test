//commonJs的模块规范导入
const { sum, mul } = require("./mainUtil.js")

console.log(sum(3, 4));
console.log(mul(5, 5));

//es6的模块化规范导入、
import { name } from "./info"
console.log(name);