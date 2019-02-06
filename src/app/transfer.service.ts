import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private messageSource = new BehaviorSubject('default messgage');

  //Holds the current value
  currentMessage = this.messageSource.asObservable();
  constructor() { }


  //Function to update the valye
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
