import { map, take } from 'rxjs/operators';
import { AuthServiceSign } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class AuthGuardService implements CanActivate{


     constructor(private auth:AuthServiceSign,private router:Router){}
isAuth:boolean;
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
       
    return this.auth.user.pipe(map(user=>{
        this.isAuth = !user? false : true;
        if(this.isAuth){
            return true;
        }
        else{
            this.router.navigate(['/auth']);
        }
    
        
        

    }))

        
    }
}