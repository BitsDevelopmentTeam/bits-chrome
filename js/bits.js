main(function (require) {
   "use strict";

    var WebSocket = require("WebSocket"),
	Handler = require("handler").Handler,
        chromeHandler = require("chrome_handler"),
        chrome = require("chrome"),
	browserAction = chrome.browserAction,
        tab = chrome.tabs,

	ws = new WebSocket("ws://bits.poul.org:3389"),
        handler = new Handler(chromeHandler),

    ws.onmessage = function (event) { handler.webSocket(event); };

    action.onClicked.addListener(function () {
        tab.create({url: "http://bits.poul.org"});
    });
});
