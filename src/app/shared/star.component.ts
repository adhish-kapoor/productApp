import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>(); //ratingClicked is output property
    ngOnChanges():void{
        this.starWidth=this.rating*96/5;    
    }
    onClick(rating:number):void{
        this.rating=rating;
        this.ratingClicked.emit("Rating "+this.rating+" clicked");
       //this.ratingClicked.emit(`Rating ${this.rating} clicked.`)  //emit the output
    }
}