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
