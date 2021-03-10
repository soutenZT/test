var name = "aaa";
var flag = true

function sum(a, b) {
    return a + b;
}

//要想让它模块化，让别的模块使用，需要导出export

//1.导出方式
export {
    name,
    flag,
    sum
}

//2.直接导出变量，函数或类
export function sum1() {
    console.log("function sum1 from aaa.js");
}
export var age = 20;
export class Person {
    run() {
        console.log("run gun forst");
    }
}

//3.如果想让其他模块以自定义的名字导入  
//可以使用expor default  这里只能导出一个
let address = "武汉";

export default address;