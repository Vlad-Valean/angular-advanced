import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";

export const routes: Routes = [
  { path: '', title: 'Home', component: HomePageComponent },
  { path: 'about-us', title: 'About us', component: AboutUsPageComponent },
  { path: 'contact-us', title: 'Contact us', component: ContactPageComponent },
  { path: '**', title: 'Error 404', component: NotFoundPageComponent}
];
