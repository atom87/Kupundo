import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    SearchComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
