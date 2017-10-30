// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By 812913
 * */

(function () {
    function replaceSpace(str)
    {
        var str1='';
        for(var i=0;i<str.length;i++){
            if(str.charAt(i)===' '){
                str1+='%20';
            }else{
                str1+=str.charAt(i);
            }
        }
        return str1;
    }
    replaceSpace("Hello world");
})();


/***************************
 *   Method 2
 *   By Leo
 * */

// 77ms 7934K
(function () {
    function replaceSpace(str) {
        return str.split('').map(function (t) {
            if (t === ' '){
                t = '%20';
            }
            return t;
        }).join('');
    }
})();


/***************************
 *   Method 2
 *   By Leo
 * */

// <1ms <1K
(function () {
    function replaceSpace(str) {
        return str.replace(/\s/g, '%20');
    }
})();



/***************************
 *   Method 3
 *   By diadai
 * */

//66ms  7932k



(function () {
    function replaceSpace(str)
    {
        return str.split(" ").join("%20");
    }
})();
