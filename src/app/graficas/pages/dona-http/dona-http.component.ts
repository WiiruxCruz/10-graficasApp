import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

	  // Doughnut
	public doughnutChartLabels: Label[] = [
		//'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'

	];
	public doughnutChartData: MultiDataSet = [
		//[ 350, 450, 100, 150 ]
	];
	public doughnutChartType: ChartType = 'doughnut';

	public colors: Color[] = [
	{
		backgroundColor: [
			'#F05C4D',
			'#C20CF7',
			'#2CED0C',
			'#0029E0'
		]
	}
	]

	constructor( private graficasService: GraficasService) { }

	ngOnInit(): void {
		/*
		this.graficasService.getUsuariosRedesSociales()
		.subscribe(
			data => {
				console.log(data);
				const labels = Object.keys( data );
				const values = Object.values( data );
				console.log(labels);
				console.log(values);

				this.doughnutChartLabels = labels;
				this.doughnutChartData.push( values );

			}
		)
		*/

		this.graficasService.getUsuariosRedesSocialesDonaData()
		.subscribe(
			({ labels, values }) => {
				this.doughnutChartLabels = labels;
				this.doughnutChartData.push(values);
			}
		)
	}

}
