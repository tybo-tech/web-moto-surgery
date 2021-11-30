import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../shared/constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services ;

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
    this.services = SERVICES;
  }

}
