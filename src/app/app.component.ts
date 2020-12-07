import { AuthServiceSign } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobileResolution:boolean;
  
constructor(private auth:AuthServiceSign,private LoggingService:LoggingService){

}


  ngOnInit(){
    this.auth.autoLogin();
    this.LoggingService.printLog('Hello from New Developper');
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
 
  
}
