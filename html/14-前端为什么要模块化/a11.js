//在编译的时候该匿名就自动运行了
;
var module = (function() {
    //创建一个对象
    var obj = {};

    var name = "哈哈";
    var age = 18;
    var flag = true;

    obj.sum = function(num1, num2) {
        return num1 + num2;
    };

    obj.flag = flag;

    return obj;
})();