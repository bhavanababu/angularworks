import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-sub',
  templateUrl: './smart-sub.component.html',
  styleUrls: ['./smart-sub.component.css']
})
export class SmartSubComponent implements OnInit {
  num1:any=0;
  num2:any=0;
  result:any=0;

  constructor() { }

  ngOnInit(): void {
  }

  smartsub(){
    console.log(this.num1,this.num2);
    if(this.num1>this.num2){
     this.result=this.num1-this.num2;
    }
    else{
      this.result=this.num2-this.num1;
    
    }
    
  }

}
