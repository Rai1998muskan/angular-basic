import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  
  paramQuery ='';
  constructor( private activeatedRoute: ActivatedRoute) { 
    this.activeatedRoute.params.subscribe(data =>{
      this.paramQuery = data.id;
    });
  }

  ngOnInit(): void {
  }

}
