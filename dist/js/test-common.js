var Util;
(function (Util) {
    function printInfo(str) {
        console.info(str);
    }
    Util.printInfo = printInfo;
    function printError(str) {
        console.error(str);
    }
    Util.printError = printError;
})(Util || (Util = {}));
