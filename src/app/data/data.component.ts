import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { latestEventCounts } from '../dashboardData';
import { latestNodeActivity } from '../dashboardData';
import { latestEvents } from '../dashboardData';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  lastDays = latestEventCounts;
  todaysEvents = latestEventCounts[0];
  latestNodes = latestNodeActivity;
  todaysNodes = latestNodeActivity[0]
  latestEvents = latestEvents;
  name = 'Angular   6';
  eventcanvas: any;
  eventctx: any;
  @ViewChild('eventchart') eventchart;
  nodecanvas: any;
  nodectx: any;
  @ViewChild('nodechart') nodechart;
  typescanvas: any;
  typesctx: any;
  @ViewChild('typeschart') typeschart;


  ngAfterViewInit() {
    
    // Event chart
    this.eventcanvas = this.eventchart.nativeElement; 
    this.eventctx = this.eventcanvas.getContext('2d');

    let eventchart = new Chart(this.eventctx, {
      type: 'line',
      
      data: {
		    labels: ['Dec 20', 'Dec 21', 'Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31', 'Jan 01', 'Jan 02', 'Jan 03'],
        datasets: [{
          label: 'Events',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
		      data: [8, 5, 12, 6, 103, 166, 154, 162, 168, 158, 42, 8, 5, 7, 7],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Events Per Day'
        },
        scales: {
          xAxes: [{
            position: 'bottom',
            ticks: {
              maxTicksLimit: 10,
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Day',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Events',
              display: true
            }
          }]
        }
      }
    });


    // Node chart
    this.nodecanvas = this.nodechart.nativeElement; 
    this.nodectx = this.nodecanvas.getContext('2d');

    let nodechart = new Chart(this.nodectx, {
      type: 'line',
      
      data: {
		    labels: ['Dec 20', 'Dec 21', 'Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31', 'Jan 01', 'Jan 02', 'Jan 03'],
        datasets: [{
          label: 'Nodes Active',
          backgroundColor: "rgba(0, 153, 0, 0.3)",
          borderColor: "rgb(0, 153, 0)",
          fill: true,
		      data: [13, 12, 9, 10, 10, 8, 2, 4, 3, 2, 2, 6, 9, 12, 12],
        },{
          label: 'Nodes Total',
          backgroundColor: "rgba(0, 153, 255, 0.4)",
          borderColor: "rgba(0, 153, 255, 0.4)",
          fill: true,
		      data: [13, 12, 9, 10, 18, 21, 19, 22, 24, 22, 20, 10, 12, 12, 12],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Nodes Active/Total'
        },
        scales: {
          xAxes: [{
            position: 'bottom',
            ticks: {
              maxTicksLimit: 10,
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Day',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Events',
              display: true
            }
          }]
        }
      }
    });

    
    // Types chart
    this.typescanvas = this.typeschart.nativeElement; 
    this.typesctx = this.typescanvas.getContext('2d');

    let typeschart = new Chart(this.typesctx, {
      type: 'bar',
      
      data: {
		    labels: ['Dec 20', 'Dec 21', 'Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31', 'Jan 01', 'Jan 02', 'Jan 03'],
        datasets: [{
          label: 'Informational',
          backgroundColor: "rgba(0, 153, 255,1)",
          borderColor: "rgb(0, 153, 255)",
          fill: true,
		      data: [8, 5, 12, 6, 20, 58, 42, 33, 44, 36, 28, 6, 3, 7, 5],
        },{
          label: 'Warnings',
          backgroundColor: "rgba(255, 163, 102,1)",
          borderColor: "rgb(255, 163, 102)",
          fill: true,
		      data: [0, 0, 0, 0, 48, 32, 37, 18, 38, 44, 7, 2, 1, 0, 2],
        },{
          label: 'Errors',
          backgroundColor: "rgba(255, 99, 132,1)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
		      data: [0, 0, 0, 0, 35, 76, 75, 111, 86, 78, 7, 0, 1, 0, 0],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Event Types'
        },
        scales: {
          xAxes: [{
            stacked: true,
            position: 'bottom',
            ticks: {
              maxTicksLimit: 10,
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Day',
              display: true,
            }
          }],
          yAxes: [{
            stacked: true,
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Events',
              display: true
            }
          }]
        }
      }
    });
  }
}
