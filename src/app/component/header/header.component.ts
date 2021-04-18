import { Component, OnInit } from '@angular/core';
import { menu } from '../../services/menu'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: any;
  constructor() { }

  ngOnInit(): void {
  }
  navItems: menu[] = [
    {

      route: '',
      name: 'Home',

    },
    {
      route: 'our-story',
      name: 'Our Story',
    },
    {

      route: 'our-outlets',
      name: 'Our Outlets',

    },
    {

      route: 'our-menu',
      name: 'Our Menu',

    },
    {

      route: 'in-house-events',
      name: 'In House Events',

    },
    {
      route: 'contact',
      name: 'Contact',
    },
  ]
}
