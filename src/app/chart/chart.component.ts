import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit  {

  chart: Chart;
    constructor() { };

    ngOnInit() {

    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
          categories: ['Ahalife', 'Alphasense', 'LazyPay', 'Cube'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Value',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'top',
         x: -1,
         y: 1,
         floating: true,
         borderWidth: 1,
         shadow: true
     },

     series: [{
          name: 'Ahalife',
          data: [65, 1.09, 0.66,0.24,0.09,-0.09,0]
      }, {
          name: 'Alphasense',
          data: [2,0.46,0.69,0.96,-0.02,-0.52,0]
      }, {
          name: 'LazyPay',
          data: [66, 1,0.537,0.379,0,-0.21,0]
      }]

    })

    };


/*  chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    });*/



  // add point to chart serie
  add() {
    //this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
