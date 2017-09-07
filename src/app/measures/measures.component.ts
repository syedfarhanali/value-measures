import { Component, OnInit } from '@angular/core';
import { VmService } from '../services/vm.service';
import { ValueMeasure } from '../models/valueMeasure.model';



@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {

  valueMeasures : ValueMeasure[];

  constructor( private vmService: VmService) { }

  sortValueMeasures(sortColumn : string){
    this.valueMeasures = this.vmService.sortValueMeasures(sortColumn);
  }

  ngOnInit() {
    this.valueMeasures = this.vmService.getValueMeasures();
    console.log(this.valueMeasures);
  }

}
