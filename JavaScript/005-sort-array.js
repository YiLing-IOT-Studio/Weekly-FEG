// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */

(function () {
    function mySort() {
        var tags = new Array();  // 使用数组作为参数存储容器
        // 请补充你的代码
        var len = arguments.length;
        for(var i=0; i<len; i++){
            tags.push(arguments[i]);
        }
        tags.sort(function (item1, item2) {
            return item1 - item2;
        });
        return tags;  // 返回已经排序的数组
    }

    var result = mySort(50,11,16,32,24,99,57,100);  // 传入参数个数不确定
    console.info(result);  // 显示结果
})();