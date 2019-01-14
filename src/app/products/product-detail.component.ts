import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string="Product Detail";
  product:IProduct;
  errorMessage:string;

  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  onBack():void{
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    //route.snapshot is a static image of the route information shortly after the component was created
    //paramMap is a dictionary of route parameter values extracted from the URL
    // '+' is JS operator to convert string to number
    const param= +this.route.snapshot.paramMap.get('id');  
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  getProduct(id:number){
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

}
