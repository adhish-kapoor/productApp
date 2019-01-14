import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductDetailGuard implements CanActivate {
 //guard is a service to prevent access to a route, confirm navigation away from a route or 
 //to preload data for a route
  constructor(private router:Router){}

  canActivate( //method having two parameters
    next: ActivatedRouteSnapshot, //next::to provide current route info
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { //state::to provide router state info
      let id= + next.url[1].path;
      if(isNaN(id) || id<1)
      {
        alert("Invalid productId");
        this.router.navigate(['/products']);
        return false;
      };
    return true;
  }
}
