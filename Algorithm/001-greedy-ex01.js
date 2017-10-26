// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */

/*
* @param: num String
* @param: k Int
* @return: String
*/
(function () {
    function fn(num, k){
        var count = 0;
        return num.split('').filter(function(item, idx, arr){
            var len = arr.length;
            while(count<k){
                if(arr[idx+1]>=arr[idx] && idx+1<len-k){
                    arr.splice(idx+1, 1);
                    count++;
                }
            }
            return arr[idx];
        }).join(' ').replace(/\s/g, '');
    }

    console.log(fn('1432219', 3));  // "1219"
})();
