import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })


export class LoggingService {


    lastlogg:string;

    printLog(message:string){

        console.log(message);
        console.log(this.lastlogg);
        this.lastlogg = message;
        }
}
