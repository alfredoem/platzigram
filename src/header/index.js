var yo = require('yo-yo');
var translate = require('../translate');
var empty = require('empty-element');

var el = yo`<header>
   <ul id="user-actions" class="dropdown-content">
  <li><a href="#!">${translate.message('logout')}</a></li>
</ul>
<nav class="white" role="navigation">
  <div class="nav-wrapper">
    <a id="logo-container" href="#!" class="brand-logo platzigram">Platzigram</a>
    <ul class="right hide-on-med-and-down">
      <li><a class="dropdown-button" href="#!" data-activates="user-actions">Greed<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
    <ul id="nav-mobile" class="side-nav">
        <li><a href="#">${translate.message('logout')}</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
  </div>
</nav></header>`;

module.exports = function header (ctx, next) {
  var container = document.getElementById('header-container')
  empty(container).appendChild(el);
  next();
}

