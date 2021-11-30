import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services 
  hideHeader =true;
  constructor() { }

  ngOnInit() {
    this.services = [
      {
          heading: `Motor vehicle service `,
          body: `Which is a series of maintenance procedures carried out at a set time interval or after the vehicle has travelled a certain distance; a major service will include New spark plugs (non-platinum), points and condensers, New in-line plastic fuel filters, New air filters, New oil filters, New engine oil, Electrical check and report, Adjustment of hand brake, Testing of brake, Battery check, V-belt check, Car was and vacuum (excludes engine clean), 62-point check, Labour for the all the above, a report on defects found and customer informed of additional 
          repair work required by the vehicle. No additional work is undertaken without the customer prior consent.`,
          img: `assets/images/service-image-1.png`,
          url: ``
      },
      {
          heading: `Auto Repairs `,
          body: `
          Consisting of conducting extensive diagnostic procedures to determine the sources of customers’ problems and provide accurate repair recommendations of mechanical problems and repairing the diagnosed problems including by replacing the parts. This will include fault finding from the car; repairs and/or replacement of clutches, engines, diff, transmissions or gear-boxes, drive belts, electronic and other motor
           vehicle components which include. electronic systems, braking, transmission, and steering systems.
          `,
          img: `assets/images/service-image-2.png`,
          url: ``
      },
      {
          heading: `Auto Electrical Solution`,
          body: `Which includes fault-finding, wiring, repair and reconditioning of starters, as well as repair and reconditioning of alternators.
  
          `,
          img: `assets/images/service-image-3.png`,
          url: ``
      },
  ];
    window.scroll(0, 0);
    this.services.forEach(x => {
      x.body = `${x.body.substring(0, 120)}...`
    })
  }

}
