import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import  { routing } from './app.routing';
import { QuoteService } from "./quote.service";
import { PostalService } from "./postal.service";
import { ShortnewsService } from "./shortnews.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler } from 'ng2-translate';
import { PostalCodeComponent } from './postal-code/postal-code.component';
import { ShortNewsComponent } from './short-news/short-news.component';

//import { LanguagePipe } from './language.pipe';
//import { TranslateComponent } from './translate/translate.component';
//import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NewQuoteComponent,
    QuotesComponent,
    PostalCodeComponent,
    ShortNewsComponent
   
  ],
  imports: [

  
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
   
  ],
  providers: [ QuoteService, PostalService, ShortnewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
