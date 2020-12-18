import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { DataTablesModule } from 'angular-datatables';
import { Chart } from 'chart.js';
import axios from 'axios';
import { logging } from 'protractor';

@Component({
  selector: 'pb-addeditbudget',
  templateUrl: './addeditbudget.component.html',
  styleUrls: ['./addeditbudget.component.scss']
})
export class AddeditbudgetComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  posts;

  //This is for Chart js
  public dataChart = {
    datasets: [{
      data: [],
      backgroundColor: [],
    }],

    labels: []
  };

  public data;
  constructor(private http: HttpClient, public dataService: DataService) { }

  ngOnInit(): void {
    this.getBudgetData();
  }

   getBudgetData() {
    this.dataChart = {
      datasets: [{
        data: [],
        backgroundColor: [],
      }],

      labels: []
    };
    const cookieValue = document.cookie;

    var start = (document.getElementById('month') as HTMLInputElement).value;
    var month = start.split("-");
    var month_value = month[1] - 1;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookieValue}`
    });

    this.http.get('http://localhost:4000/api/nandani/getBudgetByMonth/' + month_value, { headers })
      .subscribe(posts => {
        console.log(posts.user_budget)
        this.posts = posts.user_budget;
        this.dataService.budgetData = posts.user_budget;

        var result_budget = posts.user_budget;
        console.log(posts.user_budget);
        for (var i = 0; i < result_budget.length; i++) {
          this.dataChart.datasets[0].data[i] = result_budget[i].budget;
          this.dataChart.labels[i] = result_budget[i].title;
          this.dataChart.datasets[0].backgroundColor[i] = result_budget[i].color;
        }
        this.chart_display()

      });
  }

  chart_display() {

    var table = (document.getElementById('table-id-area') as HTMLInputElement);

      var dt = this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        scrollY: "400px",
        scrollCollapse: true
      };
    }

  putbudgetMonth(){
    console.log("Token"+document.cookie);
    const config= {
      headers: {
      Authorization: 'Bearer ' + document.cookie },
    };
    const data = {
      "title": (document.getElementById('title') as HTMLInputElement).value,
      "budget": (document.getElementById('budget') as HTMLInputElement).value,
      "color": (document.getElementById('color') as HTMLInputElement).value,
      "month": (document.getElementById('month') as HTMLInputElement).value
      };
      console.log(data);

    axios.put('http://localhost:4000/api/nandani/putBudgetByMonth', data, config).then(res => {
      if(res.data){
           alert("Data Successfully Added");
           window.location.href="/addeditbudget";
           this.getBudgetData();
      }
      else{
        alert("Something went wrong");
      }
    }).catch((res) => {
      console.log('catch response',res)
      // error(response.status, response.data.description)
      })
  }



}
