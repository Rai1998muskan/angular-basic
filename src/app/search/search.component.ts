import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tagQuery ='';
  trendingQuery ='';
  placeQuery ='';
  constructor( private activeatedRoute: ActivatedRoute) { 
    this.activeatedRoute.queryParams.subscribe(data => {
      console.log(data)
      this.tagQuery = data.tag;
      this.trendingQuery = data.trending;
      this.placeQuery = data.place;
    });
  }

  ngOnInit(): void {
  }

}
