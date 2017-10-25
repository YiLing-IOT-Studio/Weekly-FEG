// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */

(function () {
    function detectObj(obj){
        var type = typeof obj;
        if(type === 'object' || type === 'function'){
            if(!obj){
                return 'This object is null';
            } else if (type === 'function'){
                return 'This object is Function';
            } else if (toString.call(obj) === '[object Array]') {
                return 'This object is Array';
            } else {
                return 'This is ordinary Object';
            }
        }
        return 'It\'s type is not Object'
    }

    function fn(){
        return 1;
    }

    // 测试
    console.log(detectObj(1));  // "It's type is not Object"
    console.log(detectObj('1'));  // "It's type is not Object"
    console.log(detectObj(true));   // "It's type is not Object"
    console.log(detectObj([1]));  // "This object is Array"
    console.log(detectObj(fn));  // "This object is Function"
    console.log(detectObj({'age': 19}));  // "This is ordinary Object"
    console.log(detectObj(null));  // "This object is null"
    console.log(detectObj(undefined));  // "It's type is not Object"
})();