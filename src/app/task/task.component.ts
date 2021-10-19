import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() {

   } 
   dataLink ="xxyyxxbfhr";

   user ={
     userId:20,
     firstName: 'arc',
     lastName:'laa',
     city:'new york',
     DOB:'07/23/1998'
   }

   public task = [{
    userId:20,
    firstName: 'arc',
    lastName:'laa',
    DOB:'07/23/1998',
    city:'new york',
    cityCode:'ny'

  }
  ,{
    userId:10,
    firstName: 'arc',
    lastName:'laa',
    DOB:'07/23/1998',
    city:'new york',
    cityCode:'nj'

  },{
    userId:20,
    firstName: 'arc',
    lastName:'laa',
    DOB:'07/23/1998',
    city:'new york',
    cityCode:'nm'

  }];
  
  ngOnInit(): void {
  }

}
