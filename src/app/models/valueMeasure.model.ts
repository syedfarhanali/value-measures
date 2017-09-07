
export class ValueMeasure {

  public project: string;
  public sprint: number;
  public deliveryRatio: number;
  public velocity: number;
  public firstTimeRight: number;
  public scopeCreep: number;
  public unplannedAgility: number;
  public techDebt: number;

  constructor(project: string, sprint: number, deliveryRatio: number, velocity: number, firstTimeRight : number,
   scopeCreep: number, unplannedAgility : number, techDebt : number) {
    this.project = project;
    this.sprint = sprint;
    this.deliveryRatio = deliveryRatio;
    this.velocity = velocity;
    this.firstTimeRight = firstTimeRight;
    this.scopeCreep = scopeCreep;
    this.unplannedAgility = unplannedAgility;
    this.techDebt = techDebt;
  }

}
