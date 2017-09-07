import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  private users:Array<string> = ["User1","User2"];

  getUsers():Array<string> {
    return this.users;
  }

}
