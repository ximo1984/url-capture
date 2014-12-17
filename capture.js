var casper = require('casper').create();

var url = casper.cli.get('url');
var filename = casper.cli.get('destination');

var width = casper.cli.get('width');
var height = casper.cli.get('height');

var selector = casper.cli.get('selector');

casper.start(url);

casper.waitForSelector(selector,
  function() {
    this.viewport(width, height);
    this.wait(3000, function() {
      this.capture(filename);
    });
  },
  function() {
    this.viewport(width, height);
    this.capture(filename);
  },
  10000
);

casper.run();
