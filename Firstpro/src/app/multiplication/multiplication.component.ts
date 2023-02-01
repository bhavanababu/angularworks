import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  form=new FormGroup(
    {
      "num1":new FormControl("",Validators.required),
      "num2":new FormControl("",Validators.required)
      
    }

  )
  constructor() { }

  ngOnInit(): void {
  }

  multiplyNumbers(){
    
    console.log("here");
    console.log(this.form.get("num1")?.value);
    console.log(this.form.get("num2")?.value);
    
    
    
  }

}
