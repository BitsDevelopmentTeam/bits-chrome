(function (exports) {
    "use strict";

    var ws = new exports.WebSocket("ws://bits.poul.org:3389"),
        handler = new exports.Handler(exports.chromeHandler),
        action = exports.chrome.browserAction,
        tab = exports.chrome.tabs;

    ws.onmessage = function (event) { handler.webSocket(event); };

    action.onClicked.addListener(function () {
        tab.create({url: "http://bits.poul.org"});
    });

}(this));
