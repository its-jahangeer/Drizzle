import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './slider/slider.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookTicComponent } from './book-tic/book-tic.component';
import { FooterComponent } from './footer/footer.component';
import { ResortsComponent } from './resorts/resorts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SliderComponent,
    AboutusComponent,
    BookTicComponent,
    FooterComponent,
    ResortsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
