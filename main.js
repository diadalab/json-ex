'use strict';

var nameElement = document.getElementById('Name');
var photo = document.getElementById('photo');
var repositories = document.getElementById('repositories');
var inputName = document.getElementById('input-name');
var btnSearch = document.getElementById('btn-search');
var errorInfo = document.getElementById('error-info');

function getInfoUser(){
  var request = new XMLHttpRequest();

  request.open("GET",'https://api.github.com/users/' + inputName.value, true);

  request.onload = function(){
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      nameElement.innerHTML = data.login;
      photo.src = data.avatar_url;
      repositories.innerHTML = data.public_repos;
    } else {
      errorInfo.innerHTML ='Sorry! Server Error; this file may not exist or there may be an internal server error.';
    }
  };
  request.onerror = function() {
    errorInfo.innerHTML ='Sorry! Problem connecting with the server.';
  };
  request.send();
}

btnSearch.addEventListener('click', getInfoUser);
