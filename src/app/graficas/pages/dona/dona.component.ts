import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

	constructor() { }

	ngOnInit(): void {
	}

	// Doughnut
	public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
	public doughnutChartData: MultiDataSet = [
			 [ 350, 450, 100, 150 ]
			 //[ 50, 150, 120 ] ,
			 //[ 250, 130, 70 ]
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

}
