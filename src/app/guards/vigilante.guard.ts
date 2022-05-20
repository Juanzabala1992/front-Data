import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RouterModule, Routes, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor (private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let infos = JSON.parse (localStorage.getItem("user-login")||"{}"); 
    return infos;
  }
  
}
