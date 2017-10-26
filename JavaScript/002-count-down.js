// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */

(function () {
    function countDown(h){
        var hour = h,
            min = 0,
            sec = 0,
            ms = hour * 3600000;

        setInterval(time, 1000);

        function time(id) {
            var oId = document.getElementById(id);
            ms -= 1000;
            hour = parseInt(ms/3600000)%60;
            min = parseInt(ms/60000)%60;
            sec = parseInt(ms/1000)%60;
            oId.innerHTML = '还剩余：' + hour + ' 小时' + min + ' 分钟' + sec + ' 秒';
        }
    }
})();