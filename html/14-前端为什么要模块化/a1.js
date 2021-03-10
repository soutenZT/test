//在编译的时候该匿名就自动运行了
;
(function() {
    var name = "哈哈";
    var age = 18;
    var flag = true;

    function sum(num1, num2) {
        return num1 + num2;
    }
    if (flag) {
        console.log(sum(age, 20));
    }
})();