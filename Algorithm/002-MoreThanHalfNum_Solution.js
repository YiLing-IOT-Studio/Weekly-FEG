// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */

/*
* @param: numbers Array
* @return: Int
*/
(function () {
    function MoreThanHalfNum_Solution(numbers)
    {
        if (numbers.length === 1){
            return numbers[0];
        }
        var sortedNumbers = numbers.sort(function(item1, item2){
            return item1 - item2;
        });
        var len = sortedNumbers.length;
        var halfLen = Math.floor(len/2);
        var count = 0;
        for (var i=0; i<len; i++){
            if (sortedNumbers[i] === sortedNumbers[halfLen]){
                count++;
            }
        }
        if (count>halfLen){
            return sortedNumbers[halfLen];
        } else {
            return 0;
        }
    }
    console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));  // 2
})();
