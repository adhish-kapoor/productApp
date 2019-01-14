import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component'
import { ProductDetailGuard } from './products/product-detail.guard';


@NgModule({ //provides compilation context for components;collect related code into functional sets
  declarations: [ // all declared components,directives,pipes are private by default
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule , //used for ngModel (two way binding)
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',
      //canActivate:[ProductDetailGuard], //array having guard to activate specific route
      component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
