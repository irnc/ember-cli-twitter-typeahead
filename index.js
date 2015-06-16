'use strict';

module.exports = {
  name: 'Ember CLI Twitter Typeahead',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js');
  }
};
