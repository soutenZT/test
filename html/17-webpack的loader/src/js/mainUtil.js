function sum(num1, num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

//commonJs的模块化规范导出
module.exports = {
    sum,
    mul
}