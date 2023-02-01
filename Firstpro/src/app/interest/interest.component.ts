import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  amount:any=0;
  interest:any=0;
  result:any=0;

  constructor() { }

  ngOnInit(): void {
  }
  findinterest(){
    console.log(this.amount,this.interest);
    this.result=(this.amount*this.interest)/100;
    
  }

}
