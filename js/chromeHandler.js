(function (exports) {
    "use strict";
    var c = exports.chrome.browserAction;

    function openStatus() {
        c.setIcon({path: "img/open.jpg"});
        c.setTitle({title: "POuL Aperto"});
    }

    function closeStatus() {
        c.setIcon({path: "img/close.jpg"});
        c.setTitle({title: "POuL Chiuso"});
    }

    /* Handler functions definition */
    function statusHandler(status) {
        return status.value === "open" ? openStatus() : closeStatus();
    }

    function msgHandler(msg) {
    }

    function tempIntHandler(tempInt) {
    }


    exports.chromeHandler = {
        status: statusHandler,
        msg: msgHandler,
        tempInt: tempIntHandler
    };

}(this));

/* You have to read the code bottom-up */
