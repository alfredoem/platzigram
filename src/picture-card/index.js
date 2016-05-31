var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function pictureCard(user, pic) {
  var el;

  function render(picture) {
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
     <div class="card-image-stats-container">
          <div class="card-image-stats">
            <p><i class="fa fa-heart" aria-hidden="true"></i> ${pic.likes}</p>
            <p><i class="fa fa-comment" aria-hidden="true"></i> ${pic.comments}</p>
          </div>
      </div>
      <div class="card-image">
        <img class="activator" src="${picture.url}">
      </div>
      <div class="card-content">
        <a href="/user/${user.username}" class="card-title">
          <img src="${user.avatar}" class="avatar" />
          <span class="username">${user.username}</span>
        </a>
        <small class="right time">${translate.date.format(picture.createdAt)}</small>
        <p>
          <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a class="left" href="#" onclick=${like.bind(null, false)}><i class="full-heart fa fa-heart" aria-hidden="true"></i></a>
          <span class="left likes">${translate.message('likes', { likes: picture.likes })}</span>
        </p>
      </div>
    </div>`
  }

  function like(liked) {
    pic.liked = liked;
    pic.likes += liked ? 1 : -1;
    var newEl = render(pic);
    yo.update(el, newEl);
    return false;
  }

  el = render(pic);
  return el;
}