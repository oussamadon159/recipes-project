import { Router } from '@angular/router';
import { AuthServiceSign } from './../auth/auth.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
selector:'app-alert',
templateUrl:'./alert.component.html',
styleUrls:['./alert.component.css'],
})

export class AlertComponent implements OnInit{

 message:string;
  @Output() close = new EventEmitter<void>();
constructor(private authServ:AuthServiceSign,private router:Router){}

 ngOnInit(){
  this.authServ.messageError.subscribe(
      msgError=>{
          this.message = msgError;
      }
  )
 }
 onclose(){
  this.close.emit();
 }


}