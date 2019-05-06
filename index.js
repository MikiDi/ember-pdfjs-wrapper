'use strict';

module.exports = {
  name: require('./package').name,

  included: function (app) {
    app.import('vendor/style.css');
  },

  isDevelopingAddon() {
    return true;
  }
};
