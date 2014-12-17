var exec = require('child_process').exec;

var defaultOptions = {
    width: 340,
    height: 195,
    selector: 'body'
};

var capture = function(url, destination, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = defaultOptions;
  }

  url = url.replace(/ /g, '%20');

  args = [
    '--destination=' + destination,
    '--url="' + url + '"',
  ];
  for (var option in options) {
    args.push('--' + option + '=' + options[option]);
  }
  command = 'casperjs ' + __dirname + '/capture.js ' + args.join(' ');
  exec(command, function(error) {
    if (error) {
      console.log(error);
    }
    else {
      callback();
    }
  });
}

module.exports = capture;
