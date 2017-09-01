import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class PostalService {

  constructor(private http: Http) { }


  	getPostal(id: number)
	{
		return this.http.get('http://postalpincode.in/api/pincode/'+id).map((response: Response) => {return response.json()});

	}

	

}
