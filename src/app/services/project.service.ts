import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }
  private projects:Array<string> = ["Project1","Project2"];

  getProjects():Array<string> {
    return this.projects;
  }

}
