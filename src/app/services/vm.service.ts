import { ValueMeasure } from '../models/valueMeasure.model';
import {Observable} from "rxjs/Observable";

export class VmService{

    sortColumn : string = "project";

    getValueMeasures():Array<ValueMeasure> {
      return this.sortValueMeasures(this.sortColumn);
    }

    sortValueMeasures(column : string):Array<ValueMeasure> {
      this.sortColumn = column;
      this.valueMeasures =  this.valueMeasures.sort(this.compareFunction);
      return this.valueMeasures;
    }

    topValueMeasures():Array<ValueMeasure> {
      this.valueMeasures =  this.valueMeasures.sort(this.compareFunction);
      return this.valueMeasures;
    }

    getTeamCount() : number {
      return 10;
    }
    getTotalReports() : number{
      return 89;
    }
    getTopTeams() :Array<string>{
      return this.valueMeasures.map((p)=>p.project).splice(0,2);
    }

    getBottomTeams() :Array<string>{
      return ["Test1","Test2"];
    }
    getTopMeasure() :Array<string>{
        return ["Velocity","DeliveryRatio"];
    }
    getBottomMeasure() :Array<string>{
      return ["ScopeCreep","TechDebt"];
    }


     addValueMeasures(project: string, sprint: number , deliveryRatio: number, velocity: number, firstTimeRight : number,
      scopeCreep: number, unplannedAgility : number, techDebt : number) {
         this.valueMeasures.push(new ValueMeasure(project, sprint, deliveryRatio, velocity, firstTimeRight
         , scopeCreep, unplannedAgility, techDebt));
     }

    compareFunction = (a, b) => {
      console.log(this.sortColumn);
      if (a[this.sortColumn] < b[this.sortColumn])
        return -1;
      if (a[this.sortColumn] > b[this.sortColumn])
        return 1;
      return 0;
    };

     private valueMeasures:Array<ValueMeasure> = [
           new ValueMeasure("Ahalife",65, 1.09, 0.66,0.24,0.09,-0.09,0),
           new ValueMeasure("Alphasense",2,0.46,0.69,0.96,-0.02,-0.52,0),
           new ValueMeasure("Ahalife",66, 1,0.537,0.379,0,-0.21,0),
           new ValueMeasure("Ahalife",67,1,0.58,0,0.055,-0.05,0),

           new ValueMeasure("Alphasense",3,0.63,1.18,0.91,-0.08,-0.29,0),

           new ValueMeasure("LazyPay",1,1,3.88,1,0,0.29,0),
           new ValueMeasure("LazyPay",2,1,3.07,0.98,0,0.021,0),

           new ValueMeasure("Cube",1, 0.95,1.03,1,-0.05,0,0),
           new ValueMeasure("Cube",2,1.05,1.37,1,-0.15,0.21,0 )

         //  new ValueMeasure("Cube",),
         //  new ValueMeasure("Cube",),
       ];

}
