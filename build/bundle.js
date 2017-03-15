(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
  var self = module.exports = {

  /*
   * Processes item to get the appropriate output number
   * @param "item" DOMElement
   */

  processItem: function(item) {
    var el = $(item);
    // Evaluates the string 
    var output = self.textToInteger(el.text());
    // Replaces item content
    el.text(output);
  },

  /*
   * Converts provided remaining time to integer
   * @param "remaining" string
   */

   textToInteger: function(remaining) {
    var output = [];
    // var remaining = el.text();      // => '1w 2d 3h 4m'
    var re = /(\d)([wdhm])/g;
    var arr = remaining.match(re);
    if (arr && arr.length>0) {
      arr.forEach(function(e) {
        var value = e.charAt(0);    // for '1w' => '1'
        var letter = e.charAt(1);   // for '1w' => 'w'
        output.push(value+"*"+self.getMultiplier(letter));
      });
    };
    return eval(output.join("+"));
  },

  /*
   * Returns mutiplier for provided letter (w/week, d/day, h/hour, m/minute)
   * @param "letter" string
   */

  getMultiplier: function(letter) {
    switch(letter) {
      case 'w':
        return 40
        break;
      case 'd':
        return 8
        break;
      case 'h':
        return 1
        break;
      case 'm':
        return 0
        break;
      default:
        return 0
    }
  }
 
};
},{}],2:[function(require,module,exports){
var _       = require("./functions.js");
window.addEventListener ("load", initJiraConverter, false);

/*
 * Initializes extension
 */

function initJiraConverter() {
  console.log("JIRA Extension Loaded..."); 
  // Listens to DOMNodeInserted events because page content is loaded asynchronously
  $(document).on('DOMNodeInserted', function(e) {
    // When event matches
    if (e.target.className.match(/ghx-backlog-container/) ) {
      // Get elements containing human readable duration (ex: 1w 2d 3h 4m) and process them
      $(".ghx-badge-group .aui-badge, .ghx-stats .aui-badge").each(function() {
        _.processItem(this);
      });
    };
  });
}

},{"./functions.js":1}]},{},[2]);
