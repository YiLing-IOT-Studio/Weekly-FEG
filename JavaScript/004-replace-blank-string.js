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