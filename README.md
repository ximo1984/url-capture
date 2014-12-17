URL-CAPTURE
===========

Takes a screenshot of the given URL. Supports image resizing and can wait until a selector is loaded. If that’s not enough, a wait can be added.

## Examples

```javascript
var capture = require(‘url-capture’);

url = ‘http://google.com’;
file = ‘google.png’;
options = {
  width: 600,
  height: 400,
  wait: 3000,
  selector: ‘body.class’
}
try {
  capture(url, file, options, function() {
    // Do something with the file.
  });
}
catch(error) {
  // Handle the error.
}
```

## Install

    npm install url-capture

You will need to have CasperJs installed globally:

    npm install -g casperjs

## License

GPLv3

