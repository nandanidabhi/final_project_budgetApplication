import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { DataTablesModule } from 'angular-datatables';
import { Chart } from 'chart.js';
import axios from 'axios';

@Component({
  selector: 'pb-allocatedbudget',
  templateUrl: './allocatedbudget.component.html',
  styleUrls: ['./allocatedbudget.component.scss'],
})
export class AllocatedbudgetComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts;

  public dataChart = {
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],

    labels: [],
  };

  public data;
  constructor(private http: HttpClient, public dataService: DataService) {}

  ngOnInit(): void {
  }

  getBudgetData(){
    const cookieValue = document.cookie;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookieValue}`
    })

    this.http.get('http://localhost:4000/api/nandani/getBudget', { headers })
      .subscribe(posts => {
        this.posts = posts["user_budget"].allotedBudget;

        var dt = this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          scrollY: "400px",
          scrollCollapse: true
        };
      });
  }

  putbudget() {
    console.log('Token' + document.cookie);

    const config = {
      headers: {
        Authorization: 'Bearer ' + document.cookie,
      },
    };
    const data = {
      title: (document.getElementById('title') as HTMLInputElement).value,
      budget: (document.getElementById('budget') as HTMLInputElement).value,
      color: (document.getElementById('color') as HTMLInputElement).value,
    };
    axios
      .put('http://localhost:4000/api/nandani/putBudget', data, config)
      .then((res) => {
        if (res.data) {
          alert('Data Successfully Added');
          window.location.href = '/allocatedbudget';
        } else {
          alert('Something went wrong');
        }
      })
      .catch((res) => {
        console.log('catch response', res);
        // error(response.status, response.data.description)
      });
  }

  deletebudget(){
    const config = {
      headers: {
        Authorization: 'Bearer ' + document.cookie,
      },
    };
    axios
      .put('http://localhost:4000/api/nandani/deleteBudget', config)
      .then((res) => {
        if (res.data) {
          alert('Deleted Budget Successfully ');
          window.location.href = '/allocatedbudget';
        } else {
          alert('Something went wrong');
        }
      })
      .catch((res) => {
        console.log('catch response', res);
        // error(response.status, response.data.description)
      });
  }

  editBudget(editBudgetTitle, editBudgetAmount, editBudgetColor) {
    var edit_form = document.getElementById("edit-form") as HTMLElement;
    edit_form.style.display = "";
    (document.getElementById('edit-title') as HTMLInputElement).value = editBudgetTitle;
    (document.getElementById('edit-amount') as HTMLInputElement).value = editBudgetAmount;
    (document.getElementById('edit-color') as HTMLInputElement).value = editBudgetColor;

  }

}
