import { Router } from '@angular/router';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs'; 
export interface AuthResponseData{
  
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean

}


@Injectable({providedIn:'root'})


export class AuthServiceSign {

  constructor(private http:HttpClient,private router:Router){}
  user = new BehaviorSubject<User>(null);
  private tokenexpirationTimer:any;

  autoLogin(){
  const userData:{
    email:string,
    id:string,
    _token:string,
    _tokenExpirationDate:string
  } =  JSON.parse(localStorage.getItem('userData')) ;
  if(!userData){
    return;
  }
  const loadedUser = new User(
    userData.email,
    userData.id,
    userData._token,
    new Date(userData._tokenExpirationDate)
    )
    if(loadedUser.token){
      this.user.next(loadedUser);
      const expirationTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
      this.autologout(expirationTime);
    }
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenexpirationTimer){
      clearTimeout(this.tokenexpirationTimer);
    }
    this.tokenexpirationTimer = null;
  }

autologout(expirationTime:number){
  console.log(expirationTime)
 this.tokenexpirationTimer = setTimeout(
    ()=>{
    this.logout();
  },expirationTime)

}



  signup(email:string,password:string){
 return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd0oH8U4DgAQuefuQTf8a0pIexfQLvlWg',
   {email: email,
    password: password,
    returnSecureToken: true,
}).pipe(catchError(this.handleError),tap(responseData=>{
  this.handleAuthentication(
     responseData.email,
     responseData.localId,
     responseData.idToken,
     +responseData.expiresIn
     )

}));

  }

login(email:string,password:string){
    
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd0oH8U4DgAQuefuQTf8a0pIexfQLvlWg',
   {
    email:email,
    password:password,
    returnSecureToken:true,
   }).pipe(catchError(this.handleError),tap(responseData=>{
    this.handleAuthentication(
       responseData.email,
       responseData.localId,
       responseData.idToken,
       +responseData.expiresIn
       )

 }))

}

private handleError(errorRes:HttpErrorResponse){
  let errorMessage = 'An unknown error occured!';
  if(!errorRes.error || !errorRes.error.error){
    return throwError(errorMessage);
  }
  switch(errorRes.error.error.message){
    case 'EMAIL_EXISTS':
        errorMessage = "This email is already exits!";
        break;
    case 'EMAIL_NOT_FOUND':
    errorMessage = "This Email does not exist.";
    break;
    case 'INVALID_PASSWORD':
    errorMessage = "The password is not correct.";
    break;
    
}
return throwError(errorMessage);
}
private handleAuthentication(email:string,userID:string,token:string,expiresIn:number){
  const expirationDate =  new Date(new Date().getTime() + expiresIn * 1000)
  const user =  new User(
     email,
     userID,
     token,
     expirationDate
     );
     this.user.next(user);
     this.autologout(expiresIn * 1000);
     localStorage.setItem('userData',JSON.stringify(user))
}
}