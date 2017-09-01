import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { PostalCodeComponent } from './postal-code/postal-code.component';
import { ShortNewsComponent } from './short-news/short-news.component';

const APP_ROUTES: Routes = [
	{path: '', component: QuotesComponent},
	{path: 'new-quote', component: NewQuoteComponent },
	{path: 'postal-code', component: PostalCodeComponent},
	{path: 'short-news', component: ShortNewsComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);