import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

	@Input() horizontal: boolean = false;

	public barChartOptions: ChartOptions = {
		responsive: true
	};

	@Input() barChartLabels: Label[] = [
		//'2020', '2021', '2022', '2023', '2024', '2025', '2026'
	];
	public barChartType: ChartType = 'bar';
	public barChartLegend: true;

	@Input() barChartData: ChartDataSets[] = [
		/*
		{ data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#F05C4D', hoverBackgroundColor: 'red' },
		{ data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#C20CF7', hoverBackgroundColor: 'red' },
		{ data: [ 12, 48, 51, 19, 57, 23, 33 ], label: 'Series C', backgroundColor: '#2CED0C', hoverBackgroundColor: 'red' }
		*/
	];

	constructor() {
	}

	ngOnInit(): void {
		console.log( this.horizontal );

		if( this.horizontal ) {
			this.barChartType = 'horizontalBar';
		}
	}

}
