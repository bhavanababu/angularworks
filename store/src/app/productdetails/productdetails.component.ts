import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { ProductsService } from '../service/products.service';
import {FormControl,FormGroup,Validators}  from'@angular/forms';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:any;
  form=new FormGroup(
    {
    "comment":new FormControl("",Validators.required),
    "rating":new FormControl("",Validators.required)
    }
  )
  get comment():any{
    return this.form.get("comment")?.value;
  }
  get rating():any{
    return this.form.get("comment")?.value;
  }
  


  constructor(private router:ActivatedRoute,private service:ProductsService) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get("id")
    this.service.getProductsDetail(id).then(res=>res.json()).then(data=>this.product=data);
    
  }
  addReview(){
    console.log(this.form.value);
    console.log(this.rating);
    console.log(this.comment);
    
    
    
  }
  
}
