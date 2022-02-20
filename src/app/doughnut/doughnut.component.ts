import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'doughnut',
  templateUrl: './doughnut.component.html',
})
export class Doughnut {
  GREEN = '#338f6c';
  DARK_YELLOW = '#e3c992';
  LIGHT_YELLOW = '#fcf9f3';

  ngOnInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('doughnut');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: [this.DARK_YELLOW, this.LIGHT_YELLOW],
            borderColor: [this.DARK_YELLOW, this.LIGHT_YELLOW],
          },
        ],
      },
      options: {
        cutout: 150,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    });
  }
}
