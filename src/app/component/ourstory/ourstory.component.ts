import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.css']
})
export class OurstoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
