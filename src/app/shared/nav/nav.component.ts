import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from '../constants';
import { NavModel } from '../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showNav: boolean;
  items: NavModel[] = MENUITEMS;
  constructor() { }

  ngOnInit() {
    // this.showNav = true;
  }

}
