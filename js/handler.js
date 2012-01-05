(function(global) {

var first = true;

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


function jsonHandler(json) {
  if(json.status !== undefined) {
    statusHandler(json.status)
  } 

  if(json.msg !== undefined) {
    msgHandler(json.msg);
  } 
  
  if(json.tempint !== undefined) {
    tempIntHandler(json.tempint);
  }

  if(first) first = false;
}

function dataHandler(data) {
  jsonHandler(JSON.parse(data));
}

function wsMessageHandler(event) {
  dataHandler(event.data.escapeHTML());
}

global.wsMessageHandler = wsMessageHandler;

})(this)

/* You have to read the code bottom-up */
