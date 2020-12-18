import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'pb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register()
  {
    const data = {
      "firstName": (document.getElementById('firstName') as HTMLInputElement).value,
      "lastName": (document.getElementById('lastName') as HTMLInputElement).value,
      "age": (document.getElementById('age') as HTMLInputElement).value,
      "gender": (document.getElementById('gender') as HTMLInputElement).value,
      "email": (document.getElementById('email') as HTMLInputElement).value,
      "password": (document.getElementById('password') as HTMLInputElement).value
  };
  console.log("Data:"+data.password);
  axios.post('http://localhost:4000/api/nandani/signup', data)
  .then(res => {
    console.log("inside");
    if(res.data && res){
          console.log("in login res");
         window.location.href = "/allocatedbudget";
    }
    else{
      alert("Something went wrong");
    }
  }
  ).catch((res) => {
    alert("Already Exist");
    console.log('catch response',res)
    // error(response.status, response.data.description)
    }
  )
}

}
