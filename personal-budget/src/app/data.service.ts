import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user_budget = [];
  budgetData: (user_budget: any) => any;

  constructor(private http: HttpClient) { }

  // public getData(){
  //   return this.http.get('http://localhost:3000/budget');
  // }

  public getBudget(){
    return axios.get('http://localhost:4000/api/nandani/getBudget', {
      headers: {
        Authorization: 'Bearer ' + document.cookie },
      });
    }
}
