import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
ErrorMessage: string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.ErrorMessage  = this.route.snapshot.data['message'];
  }


}
