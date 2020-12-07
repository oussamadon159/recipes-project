import { Router } from '@angular/router';
import { AuthServiceSign, AuthResponseData } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert.component'
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
selector:'app-auth',
templateUrl:'auth.component.html',
styles:[`
input.ng-invalid.ng-touched{
    border: 1px solid red;
}
`]
})

export class AuthComponent implements OnInit , OnDestroy{
  isLoginMode = false;
  isLoading = false;
  Error:string = null;
  LoginForm:FormGroup;
  errorMessage:string=null;
  private closeSub:Subscription
  @ViewChild(PlaceHolderDirective,{static:false}) AlertHost:PlaceHolderDirective
  constructor(private authService:AuthServiceSign,private router:Router,private cmpFactResolver:ComponentFactoryResolver,){}
    ngOnInit(){
        this.Error= null;
       this.loginForm();
       this.onSwitchMode();

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
         this.isLoading= true;
        authObs = this.authService.login(email,password);

        }
        else{
            this.isLoading  = true;
        authObs = this.authService.signup(email,password);
        }
       console.log(this.isLoginMode)
        authObs.subscribe(responseData=>{
            console.log(responseData);
            this.isLoading = false;
            this.Error = null;
            this.router.navigate(['/recipes']);

        },errorMessage=>{
            console.log(errorMessage);
             this.errorMessage = errorMessage;
            //  this.showErrorAlert(errorMessage);
            //  this.authService.messageError.next(this.Error);
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
    if(this.isLoginMode){
      this.LoginForm.setValue({
        'email':'oussama.elhaddad@gmail.com',
        'password':'skydrive147258',
      })
    }
    if(!this.isLoginMode){
      this.LoginForm.setValue({
        'email':null,
        'password':null,
      })
    }
}

OnCatchData(){
    this.Error = null;

}

private showErrorAlert(message:string){

const alertCmpFactory  = this.cmpFactResolver.resolveComponentFactory(AlertComponent);

const hostViewContainer = this.AlertHost.viewContainerRef;
hostViewContainer.clear();

const componentref =  hostViewContainer.createComponent(alertCmpFactory);


 this.closeSub = componentref.instance.close.subscribe(
    ()=>{
       this.closeSub.unsubscribe();
       hostViewContainer.clear();
    }
);
}
ngOnDestroy(){
if(this.closeSub){
    this.closeSub.unsubscribe();
}
}
}
