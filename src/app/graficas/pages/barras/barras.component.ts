import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

	public barChartOptions: ChartConfiguration['options'] = {
		responsive: true,
		// We use these empty structures as placeholders for dynamic theming.
		scales: { xAxes: [{}], yAxes: [{}] },
		plugins: {
			datalabels: {
			anchor: 'end',
			align: 'end'
			}
		}
	};
		public barChartLabels: Label[] = [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ]
		public barChartType: ChartType = 'bar';
		public barChartLegend: true;

		public barChartData: ChartDataSets[] = [
			{ data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#F05C4D', hoverBackgroundColor: 'red' },
			{ data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#C20CF7', hoverBackgroundColor: 'red' },
			{ data: [ 12, 48, 51, 19, 57, 23, 33 ], label: 'Series C', backgroundColor: '#2CED0C', hoverBackgroundColor: 'red' }
		];


	constructor() { }

	ngOnInit(): void {
	}

	public randomize(): void {
		// Only Change 3 values
		this.barChartData[0].data = [
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100)
		];

		this.barChartData[1].data = [
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100)
		];

		this.barChartData[2].data = [
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100)
		];
	}

}
