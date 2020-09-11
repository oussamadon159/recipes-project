import { Router } from '@angular/router';
import { AuthServiceSign, AuthResponseData } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
selector:'app-auth',
templateUrl:'auth.component.html',
styles:[`
input.ng-invalid.ng-touched{
    border: 1px solid red;
}
`]
})

export class AuthComponent implements OnInit{
  isLoginMode = true;
  isLoading = false;
  Error:string = null;
  LoginForm:FormGroup;
  errorMessage:string=null;
  constructor(private authService:AuthServiceSign,private router:Router){}
    ngOnInit(){
        this.Error= null;
       this.loginForm();
       this.LoginForm.patchValue({
           'email':'oussama.don159@gmail.com',
           'password':'skydrive147258',
       })
    }
    OnSubmitForm(){
        let authObs:Observable<AuthResponseData>;
        if(!this.LoginForm.valid){
            return;
        }
        const email = this.LoginForm.get('email').value;
        const password = this.LoginForm.get('password').value;
        this.isLoading = true;
        if(this.isLoginMode){
         this.isLoading= false;
      authObs = this.authService.login(email,password);
      
        }
        else{
        authObs = this.authService.signup(email,password);
        }
        
        authObs.subscribe(responseData=>{
            console.log(responseData);
            this.isLoading = false;
            this.Error = null;
            this.router.navigate(['/recipes']);
            
        },errorMessage=>{
            console.log(errorMessage);
             this.Error = errorMessage;
            this.isLoading = false;
        })
        
        
    }

    private loginForm(){
        this.LoginForm = new FormGroup({
            'email':new FormControl(null,[Validators.required,Validators.email]),
            'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
        })
    }
onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
}
}