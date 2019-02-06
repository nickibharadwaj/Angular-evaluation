import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service' 
//import { Router } from '@angular/router'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  dataFromForm : Object
  finalOb : Object
  firstName: String
  lastName :String
  constructor(private transfer: TransferService) {}

  ngOnInit() {
        this.getData();
  } 
  getData(){
    var dataLoaded ={}
    this.transfer.currentMessage.subscribe(function(message){
      dataLoaded = message
        });
      this.dataFromForm = dataLoaded;

  }

}
