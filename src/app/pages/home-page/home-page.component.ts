import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  cards = [
    {photo: 'favicon.ico', title: 'asdg', description: 'aerh arg efdh sertdhedtrgszdfkhy'},
    {photo: 'favicon.ico', title: 'zxcv', description: 'ahsjgrnvn w ngwj gngnwj nsgnjnwoung w'},
    {photo: 'favicon.ico', title: 'qwer', description: 'jIAONSVNWISNGN WEIO GNOIWENE GNWOING '},
    {photo: 'favicon.ico', title: 'rtyf', description: 'aounhfunaugfuas aunfaeufn  uau ngfuesn'},
    {photo: 'favicon.ico', title: 'yuiz', description: 'afunsunun nuan gunn unaunfeunaufn a'},
    {photo: 'favicon.ico', title: 'bnmg', description: 'hsafunfuadnufnaunfuasnunuand as unfuna'}
  ]
}
