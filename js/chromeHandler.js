(function(exports) {

var openStatus = function() {
  with(chrome.browserAction) {
    setIcon({path: "img/open.jpg"});
    setTitle({title: "POuL Aperto"});
  }
}

var closeStatus = function() {
  with(chrome.browserAction) {
    setIcon({path: "img/close.jpg"});
    setTitle({title: "POuL Chiuso"});
  }
}

/* Handler functions definition */
function statusHandler(status) {
  return status.value == "open" ? openStatus() : closeStatus();
}

function msgHandler(msg) {
}

function tempIntHandler(tempInt) {
}


exports.chromeHandler = {
  status: statusHandler,
  msg: msgHandler,
  tempInt: tempIntHandler
}

})(this)

/* You have to read the code bottom-up */
