// Use IIFE to prevent global namespace for pollution among Methods

/***************************
 *   Method 1
 *   By Leo
 * */
(function(){
    var SingletonTester = (function(){
        function Singleton(args){
            args = args || {};
            this.name = 'SingletonTester';
            this.pointX = args.pointX || 6;
            this.ponitY = args.ponitY || 10;
        }
        var instance;
        return {
            name: 'SingletonTester',
            getInstance: function (args) {
                if (instance === undefined){
                    instance = new Singleton(args);
                }
                return instance;
            }
        }
    });
    SingletonTester.getInstance({pointX: 5});
}());
