import { enableProdMode } from '@angular/core';
import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import axios from 'axios';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
var seconds = 60;
var timer;

start_timer();

function myFunction() {
  if (seconds > 15) {
    console.log(seconds);
    seconds--;
  } else {
    clearInterval(timer);
    var confirm_status = confirm("Your token will be expired in 15 seconds. Do you want to refresh your token?");
    if (confirm_status == true) {
      refresh_token().then(function (res) {
        document.cookie = "token = ";
        console.log(res.data.token);
        document.cookie = 'token = ' + res.data.token;
        seconds = 60;
        start_timer();
      }).catch(function (err) {
        alert(err.response.data.error);
      });
    } else {
      console.log("user pressed cancel");
    }
  }
}

function start_timer() {
  timer = window.setInterval(function () {
    myFunction();
  }, 1000);
}


function refresh_token() {
  var cookieValue = document.cookie;

  const config = {
    headers: { Authorization: 'Bearer ' + cookieValue },

  };
  return axios.get('http://localhost:4000/api/nandani/refreshToken', config);
}

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
