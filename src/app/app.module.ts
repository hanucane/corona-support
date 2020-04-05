import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CaresActComponent } from './cares-act/cares-act.component';
import { SbaLoanWorkflowComponent } from './sba-loan-workflow/sba-loan-workflow.component';
import { SitemapComponent } from './sitemap/sitemap.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    CaresActComponent,
    SbaLoanWorkflowComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    CaresActComponent,
    ContactComponent,
    NavbarComponent,
    SbaLoanWorkflowComponent,
    SitemapComponent
  ]
})
export class AppModule { }
