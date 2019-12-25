//想使用别的模块，需要先导入进来
import { flag, name, sum } from './aaa.js';

if (flag) {
    console.log(name);
    console.log(sum(1, 2));
}

import { age, sum1, Person } from "./aaa.js";

console.log(age);
sum1();
let p = new Person();
p.run();

//导入export default中的内容
import add from "./aaa.js";
console.log(add);

//统一全部导入
import * as object1 from "./aaa.js";
console.log(object1.name);