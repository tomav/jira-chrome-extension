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