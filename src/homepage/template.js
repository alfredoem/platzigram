var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate').message;
var request = require('superagent');

module.exports = function (pictures) {
  var el = yo`<div class="container timeline">
    <div class="row">
      <div class="valign-wrapper col s9 m4 offset-s2 center-align">
        <img src="${pictures.user.avatar}" class="valign circle"/>  
      </div>
      <div class="col s11 offset-s1 m8 left-align">
        <h5>${pictures.user.username}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis sint odio, excepturi maiores, error cumque amet, obcaecati minima quibusdam fugiat perferendis dolore dicta vero tempore impedit et saepe voluptatibus!</p>
        <div class="row hide-on-small-only">
          <div class="col s4"><span class="bold">${pictures.user.posts}</span> ${translate('posts')}</div>
          <div class="col s4"><span class="bold">${pictures.user.followers}</span> ${translate('followers')}</div>
          <div class="col s4"><span class="bold">${pictures.user.following}</span> ${translate('following')}</div>
        </div>
      </div>
    </div>
    <div class="row hide-on-med-and-up offset-s1 center-align">
      <div class="col s12 m4">
        <span class="bold">${pictures.user.posts}</span> ${translate('posts')}
      </div>
      <div class="col s6 m4">
        <span class="bold">${pictures.user.followers}</span> ${translate('followers')}
      </div>
      <div class="col s6 m4">
        <span class="bold">${pictures.user.following}</span> ${translate('following')}
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate('upload-picture')}</span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.data.map(function (pic) {
          return picture(pictures.user, pic);
        })}
      </div>
    </div>
  </div>`;

  function toggleButtons() {
    document.getElementById('fileName').classList.toggle('hide');
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
  }

  function cancel() {
    toggleButtons();
    document.getElementById('formUpload').reset();
  }

  function onchange() {
    toggleButtons();
  }

  function onsubmit(ev) {
    ev.preventDefault();

    var data = new FormData(this);
    request
      .post('/api/pictures')
      .send(data)
      .end(function (err, res) {
        console.log(arguments);
      })
  }

  return layout(el);
}

