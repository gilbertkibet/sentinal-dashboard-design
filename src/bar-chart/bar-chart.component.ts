import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChart {
  GREEN = '#338f6c';
  DARK_YELLOW = '#e3c992';
  LIGHT_YELLOW = '#fcf9f3';

  ngOnInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('bar-chart');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [
          {
            data: [183, 300, 148, 232, 351, 198, 231, 320],
            backgroundColor: [
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
              this.GREEN,
              this.LIGHT_YELLOW,
              this.DARK_YELLOW,
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
            ],
            borderColor: [
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
              this.GREEN,
              this.LIGHT_YELLOW,
              this.DARK_YELLOW,
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
              this.LIGHT_YELLOW,
            ],
            borderWidth: 1,
            barThickness: 40,
            borderRadius: 10,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  }
}
