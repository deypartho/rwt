import { Injectable } from '@angular/core';
import { menu } from './menu';
@Injectable({
  providedIn: 'root'
})
export class MenuitemService {
  menu = menu;
  constructor() { }
  getMenu(){
    return this.menu;
  }
}
