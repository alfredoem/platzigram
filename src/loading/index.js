var yo = require('yo-yo');
var translate = require('../translate').message;

module.exports = function() {
    
    return yo`<div class="loader">${translate('loading')}...</div>`;
    
}
