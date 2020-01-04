var zip = require('./zip');

module.exports = function(gj, options, hasProcess=true) {
    var content = zip(gj, options, hasProcess);
    location.href = 'data:application/zip;base64,' + content;
};
