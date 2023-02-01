import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import {Output,EventEmitter} from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any;
  @Output() newItemEvent=new EventEmitter()

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.service.getCategories().then(res=>res.json()).then(data=>this.categories=data);
  }
  listByCategory(cat:string){
    console.log(cat);
    this.newItemEvent.emit(cat);
    
  }

}
