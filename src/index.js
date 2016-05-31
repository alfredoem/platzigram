require('babel-polyfill');
var page = require('page');

require('./homepage');
require('./signup');
require('./signin');
require('./footer');

page();

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space