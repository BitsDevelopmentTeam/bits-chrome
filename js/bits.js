WS("ws://bits.poul.org:8080", function (openClose) {
  if (openClose == "open") {
    chrome.browserAction.setIcon({path: "img/open.jpg"});
    chrome.browserAction.setTitle({title: "Poul Aperto"});
  } else {
    chrome.browserAction.setIcon({path: "img/close.jpg"});
    chrome.browserAction.setTitle({title: "POuL Chiuso"});
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "http://bits.poul.org"});
});
