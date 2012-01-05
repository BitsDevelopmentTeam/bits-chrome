(function(exports) {

var ws = new WebSocket("ws://bits.poul.org:8080/");

var handler = new Handler(chromeHandler);

ws.onmessage = function(event) { handler.webSocket(handler); };

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "http://bits.poul.org"});
});

})(this)
