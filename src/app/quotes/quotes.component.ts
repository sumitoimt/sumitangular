/*import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Quote } from "../quote";
import { QuoteService } from "../quote.service";


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];	

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onGetQuotes(){
  	
  	  	this.quoteService.getQuotes().subscribe(
  		(quotes: Quote[]) => this.quotes = quotes,
  		(error: Response) => console.log(error)
  		);

  }

}*/



import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Quote } from "../quote";
import { QuoteService } from "../quote.service";
import { NgForm } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];	
  list: string[] = [];
  editing = false;
  editValue = '';	
  constructor(private quoteService: QuoteService) { 

  }

  ngOnInit() {
  }


     model = 1;

     submit(val){
       console.log(val);

     }

  /*  onSubmit(form: NgForm)
  {
    
    
    console.log(form.value);
    this.quoteService.addQuote(form.value)
    .subscribe(
      result => {console.log(result)}
      );
    form.reset();
  }*/

  onGetQuotes(){
  	
  	//console.log(this.quoteService.getQuotes());
  	this.quoteService.getQuotes().subscribe(
  		quotes => {
  			console.log(quotes)
  			this.list.push(quotes.data);
  			console.log(this.list);
  		}
  		// (quotes: Quote[]) => this.quotes = quotes,
  		// (error: Response) => console.log(error)
  		);

  }

   onEdit(id,title)
  {
    
  	this.editing = true;
  	this.editValue = title;
  }
  onUpdate(id,title)
  {
  	this.quoteService.updateQuote(id, title)
  	.subscribe(
  		quotes => {
  			this.list.push(quotes.data);
  		}
  		//(quote:Quote) => this.quote = quote
  		);
  	this.editValue = '';
  	this.editing = false;
  }
  onCancel()
  {
  	this.editValue = '';
  	this.editing = false;
  }

   onDelete(id)
  {
    if(confirm("Are you sure you want to delete")){
  	this.quoteService.deleteQuote(id)
  	.subscribe(
  		() => console.log('Quote Deleted')
  		);
  }
}
full_content :any;
id_full:any;

  onShow(content)
  {
    
    this.quoteService.showQuote(content).subscribe(
      res => {
        console.log(res.full_content)
      this.full_content=res.full_content
      this.id_full=res.id
       console.log(this.full_content);
      }
      );
  }

}
