var express = require('express');
var app = express();

app.use(express.static('public'));

// Elipsis helpers
app.locals.elipsis = function shorten(text, maxLength) {
    var ret = text;
    var maxLength = maxLength || 140;
    if (ret.length > maxLength) {
        ret = ret.substr(0,maxLength-3) + "...";
    }
    return ret;
}

app.listen(5000, function () {
  console.log('listening on port 5000!');
});
