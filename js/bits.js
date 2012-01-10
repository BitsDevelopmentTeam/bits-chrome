(function(exports) {

var ws = new WebSocket("ws://bits.poul.org:3389");

var handler = new Handler(chromeHandler);

ws.onmessage = function(event) { handler.webSocket(event); };

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "http://bits.poul.org"});
});

})(this)
