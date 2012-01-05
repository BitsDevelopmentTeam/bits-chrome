(function(global) {

var ws = new WebSocket("ws://bits.poul.org:8080/");

ws.onmessage = wsMessageHandler;

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "http://bits.poul.org"});
});

})(this)
