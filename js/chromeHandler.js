(function (exports) {
    "use strict";
    var c = exports.chrome.browserAction;

    function openStatus() {
        c.setIcon({path: "img/open.jpg"});
    }

    function closeStatus() {
        c.setIcon({path: "img/close.jpg"});
    }

    /* Handler functions definition */
    function statusHandler(status) {
        return status.value && status.value === "open" ? openStatus() : closeStatus();
    }

    function msgHandler(msg) {
    }

    function tempIntHandler(tempInt) {
        return tempInt.value && c.setTitle({title: "Temperatura:" + tempInt.value.toPrecision(2) + "°C"});
    }


    exports.chromeHandler = {
        status: statusHandler,
        msg: msgHandler,
        tempInt: tempIntHandler
    };

}(this));

/* You have to read the code bottom-up */
