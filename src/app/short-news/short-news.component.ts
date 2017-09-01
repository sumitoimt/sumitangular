import { Component, OnInit } from '@angular/core';
import { ShortnewsService } from "../shortnews.service";
@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.css']
})
export class ShortNewsComponent implements OnInit {

snews: any;

sources: any;
articles: any;
  constructor(private shortnewsService: ShortnewsService) { }

  ngOnInit() {
  }


  getSourceID(sources){

  	this.shortnewsService.getTopNews(sources)
    .subscribe(
      result => { this.snews = result;  console.log(result) }

      );

  }

  onSourcesNews(sources)
  {
  	this.shortnewsService.getPopularNews(sources)
    .subscribe(
      result => { this.snews = result;  console.log(result) }

      );
  }

}





