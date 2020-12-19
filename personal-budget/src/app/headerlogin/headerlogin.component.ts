import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'pb-headerlogin',
  templateUrl: './headerlogin.component.html',
  styleUrls: ['./headerlogin.component.scss']
})
export class HeaderloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    axios.get('http://64.225.3.162:3000/api/nandani/users/logout').then(res => {
      if(res.data){
        console.log("Hello");
            window.sessionStorage.removeItem(res.data._id);
           alert("Logged Out Successfully");
           window.location.href="/login";
      }
      }
    ).catch((res) => {
      console.log('catch response',res)
      // error(response.status, response.data.description)
      })
  }

}
