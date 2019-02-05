import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Initial GOals','Another nonsens goal']);
  goal = this.goals.asObservable();
  changeGoal(goal){
    this.goals.next(goal);
  }
  constructor() { }

  

}
