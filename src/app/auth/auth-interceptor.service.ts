import { AuthServiceSign } from './auth.service';

 
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http'
import { take, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})



export class AuthInterceptorService implements HttpInterceptor {


    constructor(private auth:AuthServiceSign){}
    intercept(req:HttpRequest<any>,next:HttpHandler){

       return this.auth.user.pipe(take(1),exhaustMap(user=>{
             
           if(!user){
               return next.handle(req);
           }
           const modifiedReq = req.clone({
               params: new HttpParams().set('auth',user.token)
           })
           return next.handle(modifiedReq)
       }))

    }

}