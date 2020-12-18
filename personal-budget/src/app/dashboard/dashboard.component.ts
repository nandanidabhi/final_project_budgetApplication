import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { DataTablesModule } from 'angular-datatables';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts;

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

  // tslint:disable-next-line: typedef
  getBudgetData() {
    this.dataChart = {
      datasets: [{
        data: [],
        backgroundColor: [],
      }],

      labels: []
    };
    const cookieValue = document.cookie;

    let start = (document.getElementById('month') as HTMLInputElement).value;
    let month = start.split("-");
    let month_value = month[1] - 1;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookieValue}`
    })

    this.http.get('http://localhost:4000/api/nandani/getBudgetByMonth/' + month_value, { headers })
      .subscribe(posts => {
        console.log(posts)
        this.posts = posts.user_budget;
        this.dataService.budgetData = posts.user_budget;

        let result_budget = posts.user_budget;

        console.log(posts.user_budget);
        for (let i = 0; i < result_budget.length; i++) {
          this.dataChart.datasets[0].data[i] = result_budget[i].budget;
          this.dataChart.labels[i] = result_budget[i].title;
          this.dataChart.datasets[0].backgroundColor[i] = result_budget[i].color;
        }
        this.chart_display();

      });
  }

  // tslint:disable-next-line: typedef
  createPieChart() {
    const ctx = document.getElementById('pie-chart');
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataChart
    });
  }

  // tslint:disable-next-line: typedef
  createDoughNutChart() {
    const ctx = document.getElementById('doughnut-chart');
    const myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: this.dataChart
    });
  }

  // tslint:disable-next-line: typedef
  createBarChart() {
    const ctx = document.getElementById('bar-chart');
    const myPieChart = new Chart(ctx, {
      type: 'bar',
      data: this.dataChart
    });
  }

  // tslint:disable-next-line: typedef
  createLineChart() {
    const ctx = document.getElementById('line-chart');
    const myPieChart = new Chart(ctx, {
      type: 'line',
      data: this.dataChart
    });
  }



  // tslint:disable-next-line: typedef
  chart_display() {
    let display_type = (document.getElementById('display') as HTMLInputElement).value;
    if (display_type == 'pie-chart') {
      this.createPieChart();
      pie.style.display = "";
      doughnut.style.display = "none";
      bar.style.display = "none";
      line.style.display = "none";
      table.style.display = "none";
    } else if (display_type == 'doughnut-chart') {
      this.createDoughNutChart();
      pie.style.display = "none";
      doughnut.style.display = "";
      bar.style.display = "none";
      line.style.display = "none";
      table.style.display = "none";
    } else if (display_type == 'bar-chart') {
      this.createBarChart();
      pie.style.display = "none";
      doughnut.style.display = "none";
      bar.style.display = "";
      line.style.display = "none";
      table.style.display = "none";
    } else if (display_type == 'line-chart') {
      this.createLineChart();
      pie.style.display = "none";
      doughnut.style.display = "none";
      bar.style.display = "none";
      table.style.display = "none";
      line.style.display = "";
    } else if (display_type == 'table') {
      pie.style.display = "none";
      doughnut.style.display = "none";
      bar.style.display = "none";
      table.style.display = "";
      line.style.display = "none";
      var dt = this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        scrollY: "400px",
        scrollCollapse: true
      };
    }
  }

}
