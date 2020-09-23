import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './slider/slider.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookTicComponent } from './book-tic/book-tic.component';
import { FooterComponent } from './footer/footer.component';
import { ResortsComponent } from './resorts/resorts.component';


const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "slider", component: SliderComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "book-tic", component: BookTicComponent },
  { path: "footer", component: FooterComponent },
  {path:"resorts",component: ResortsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
