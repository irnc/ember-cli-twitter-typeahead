'use strict';

var path = require("path");
var fs = require("fs");

function unwatchedTree(dir) {
    return {
      read:    function() { return dir; },
      cleanup: function() { }
    };
}

module.exports = {
  name: 'Ember CLI Twitter Typeahead',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js');
  },

  treeFor: function treeFor(name) {
    var treePath = path.join('node_modules', 'ember-cli-twitter-typeahead', name + '-addon');

    if (fs.existsSync(treePath)) {
      return unwatchedTree(treePath);
    }
  }
};
