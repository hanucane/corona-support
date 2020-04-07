import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CaresActComponent } from './cares-act/cares-act.component';
import { SbaLoanWorkflowComponent } from './sba-loan-workflow/sba-loan-workflow.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ToastsComponent } from './shared/toasts/toasts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    CaresActComponent,
    SbaLoanWorkflowComponent,
    SitemapComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
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
