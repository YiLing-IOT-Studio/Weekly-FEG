// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */

(function () {
    function timing(){
        var then = new Date(),
            hour = 0,
            min = 0,
            sec = 0;

        setInterval(time, 1000);

        function time(id) {
            var now = new Date();
            var ms = now - then;
            hour = parseInt(ms/3600000)%60;
            min = parseInt(ms/60000)%60;
            sec = parseInt(ms/1000)%60;
            var oId = document.getElementById(id);
            oId.innerHTML = '已开始：' + hour + '小时' + min + '分钟' + sec + '秒';
        }
    }
})();

/***************************
 *   Method 2
 *   By 812913
 * */

(function () {
    function timing(){
       var s=0,m,h;
        var mysetInterval=setInterval(timer, 1000);

        function timer(){
           s++;
            if(s>=60) {
                s=0;
                m++;
            }
            if(m>=60) {
                m=0;
                h++;
            }
            time.innerHTML=checkTime(h)+':'+checkTime(m)+':'+checkTime(s);
        }
        function checkTime(i){ //将0-9的数字前面加上0，例1变为01
            return  i<10 ? "0"+i:i;
        }
    }
})();