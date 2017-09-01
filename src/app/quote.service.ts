import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class QuoteService{
	constructor(private http: Http){}

/*
	createEvent(val)  {
   console.log(val);
    let formPayload = new URLSearchParams();
        formPayload.set('title', val.title);
        formPayload.set('start_date', val.start_date);
        formPayload.set('end_date', val.end_date);
        formPayload.set('description', val.description);
        formPayload.set('p_id', val.person.id);
        formPayload.set('p_email', val.person.email);
let  requestOptions :any = new RequestOptions({
        method: 'Post',
        url: 'http://127.0.0.1:8000/api/event',
        headers:  this.getHeader(),
        body: formPayload
 });
   return this.http.request(new Request(requestOptions)).map((res: Response)=> res.json());
}*/
	
	 addQuote(content)
	{
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    let body = JSON.stringify(content);
	    return this.http.post('http://localhost/laravelcrud/public/api/news/store', body, options ).map((res: Response) => res.json());
  	}

	/*getHeader()
	{
		let headers = new Headers({'content-type':'application/json'});
		return headers;
	}

	addQuote(content)
	{
		//console.log(content);
		let formPayload = new URLSearchParams();
		formPayload.set('title',content.title);
		formPayload.set('slug',content.slug);
		formPayload.set('category',content.category);
		formPayload.set('author',content.author);
		formPayload.set('short_description',content.short_description);
		formPayload.set('full_content',content.full_content);
		
		//const body = JSON.stringify({content:content});
		let  requestOptions :any = new RequestOptions({
	        method: 'Post',
	        url: 'http://localhost/laravelcrud/public/api/news/store',
	        headers:  this.getHeader(),
	        body: formPayload
 		});
   return this.http.request(new Request(requestOptions)).map((res: Response)=> res.json());


		//const headers = new Headers({'content-type':'application/json'});
		//return this.http.post('http://localhost/laravelcrud/public/api/news/store', formPayload.toString(), {headers:headers});
	}*/
	
	getQuotes(): Observable<any>{
		
		return this.http.get('http://localhost/laravelcrud/public/api/news').map((response: Response) => {return response.json()});
}

	updateQuote(id: number, newContent: string)
	{
		const body = JSON.stringify({content: newContent});
		const headers = new Headers({'content-type':'application/json'});
		return this.http.put('http://localhost/laravelcrud/public/api/news' + id, body, {headers:headers})
		.map(
			(response:Response) => response.json()
			);
	}

	deleteQuote(id: number)
	{

		return this.http.delete('http://localhost/laravelcrud/public/api/news/delete/'+id);
	}

	showQuote(content:string)
	{

		return this.http.get('http://localhost/laravelcrud/public/api/news/'+content).map((response: Response) => {return response.json()});
	}
}


