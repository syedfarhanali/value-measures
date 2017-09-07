import { Component, OnInit } from '@angular/core';
import { VmService } from '../services/vm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalTeams : number = 0;
  totalReports : number = 0;
  topTeams : string[] = [];
  bottomTeams : string[] = [];
  topMeasure : string[] = [];
  bottomMeasure : string[] = [];
  notes : string[] = ["Assign POC","Take Session"];

  constructor(private vmService : VmService) { }

  ngOnInit() {
    this.totalTeams = this.vmService.getTeamCount();
    this.totalReports = this.vmService.getTotalReports();
    this.topTeams = this.vmService.getTopTeams();
    this.bottomTeams = this.vmService.getBottomTeams();
    this.topMeasure = this.vmService.getTopMeasure();
    this.bottomTeams = this.vmService.getBottomTeams();
  }

}
