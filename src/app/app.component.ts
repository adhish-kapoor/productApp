import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
  <a class="navbar-brand">{{title}}</a>
  <ul class="nav nav-pills">
  <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
  <li><a class="nav-link" [routerLink]="['/products']">Product List</a></li>
  </ul>
  </nav>
  <br><br>
  <div class="container">
  <router-outlet></router-outlet> 
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Product Management';
}
