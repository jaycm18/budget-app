import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';

@Component({
  selector: 'app-summary-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  template: `
    <div class="chart-container">
      <canvas baseChart
              [data]="chartData"
              [type]="chartType"
              [options]="chartOptions">
      </canvas>
    </div>
  `,
  styles: [`
    .chart-container {
      max-width: 500px;
      margin: 1em auto;
    }
  `]
})
export class SummaryChartComponent {
  @Input() income = 0;
  @Input() expense = 0;

  chartType: ChartType = 'bar';
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.parsed.y ?? 0;
            return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(value);
          }
        }
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  get chartData(): ChartData<'bar'> {
    return {
      labels: ['Tulot', 'Menot'], // x-akselin labelit
      datasets: [{
        data: [this.income, this.expense],
        backgroundColor: ['green', 'red']
      }]
    };
  }
}
