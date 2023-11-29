import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){
    console.log("feature-2 branch,");

  }
  ngOnInit(): void {
  }

  
  title = 'lazyAssignment';

  msg:any = "devlop branch,Angular Devloper....";
}
