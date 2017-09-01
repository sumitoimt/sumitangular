import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class ShortnewsService {

  constructor(private http: Http) { }

  getTopNews(sources)
	{
		
		return this.http.get('https://newsapi.org/v1/articles?source='+sources+'&sortBy=top&apiKey=0b1ea621fb524415b7e4ec9006bbf69b').map((response: Response) => {return response.json()});

	}
/*
	getLatestNews(latest)
	{
		return this.http.get('https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=0b1ea621fb524415b7e4ec9006bbf69b').map((response: Response) => {return response.json()});

	}*/

	getPopularNews(sources)
	{
		return this.http.get('https://newsapi.org/v1/sources?language=en').map((response: Response) => {return response.json()});

	}

}




