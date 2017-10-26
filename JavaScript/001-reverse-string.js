// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1 - Best Practice
 *   By Leo
 * */

(function(){
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
})();