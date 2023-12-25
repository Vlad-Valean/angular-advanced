import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  links:{name: string, path: string}[] = [
    {name: 'Home', path: '/'},
    {name: 'About us', path: '/about-us'},
    {name: 'Contact', path: '/contact-us'}
  ]
}
