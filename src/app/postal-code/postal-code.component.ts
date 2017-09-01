import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostalService } from "../postal.service";

@Component({
  selector: 'app-postal-code',
  templateUrl: './postal-code.component.html',
  styleUrls: ['./postal-code.component.css']
})
export class PostalCodeComponent implements OnInit {
postal: number;

  list: any;
  PostOffice: any;
  constructor(private postalService: PostalService) { }

  ngOnInit() {
  }

  
 

   onSubmitPostal(): void {   
    //console.log(this.postal);
    this.postalService.getPostal(this.postal)
    .subscribe(
      result => { this.list = result;  console.log(result) }

      );
    //form.reset();
  }

 

}




