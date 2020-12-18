import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  homepage()
  {
    const username = (document.getElementById('defaultLoginFormEmail') as HTMLInputElement).value;
    const password = (document.getElementById('defaultLoginFormPassword') as HTMLInputElement).value;
    console.log("Data:"+username+password);
    axios.get('http://localhost:4000/api/nandani/login', {
      auth: {
        username: username,
        password: password
      }})
    .then(res => {
      if(res)
         console.log("in login res"+res.data.token);
          document.cookie=res.data.token;
          window.sessionStorage.setItem(document.cookie,res.data._id);
          window.location.href = "/dashboard";

    }).catch((res) => {
      console.log('catch response',res)
      // error(response.status, response.data.description)
      }
    )
}

}
