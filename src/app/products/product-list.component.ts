import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
@Component({
    //selector:'app-product',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
    providers:[ProductService]                   //to create or deliver the service
})
export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    imageWidth:number=50; 
    imageMargin:number=3;
    showImage:boolean=false;
    errorMessage:string;

    _listFilter:string;

    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=(this.listFilter?this.performFilter(this.listFilter):this.products);
    }

    filteredProducts:IProduct[];
    products:IProduct[];

    constructor(private productService:ProductService)
    {
        //initializes productService property of type ProductService and injected as a dependency
        // by @Injectable() decorator to keep our component class lean and efficient
    }
    onRatingClicked(message:string):void{
        this.pageTitle="Product List: "+message;
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=> 
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
    //ngOnInit executed after constructor is executed
    ngOnInit():void{
        this.productService.getProducts().subscribe(
            products=>{ 
            this.products=products;  //subscribe sets products property 
            this.filteredProducts=this.products;   
        },
            error=>this.errorMessage=<any>error
        );
           
    }
}