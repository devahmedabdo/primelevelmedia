import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}
  services: any = [
    {
      name: 'SECURE YOUR SERVICE AREA',
      icon: 'secure.svg',
      dis: `A 15 minute call to secure your 
      service area, confirm the 
      services you offer, and verify 
      your business qualifications.`,
    },
    {
      name: '30 MIN TRAINING CALL',
      icon: 'phone.svg',
      dis: `We will review our best practices, 
      train you on using the dashboard 
      and then activate your account.`,
    },
    {
      name: 'RECEIVE MORE CALLS',
      icon: 'customers.svg',
      dis: `Customers call into our network 
      and get routed to you. Just 
      answer the call and book the
       appointment.`,
    },
    {
      name: 'INCREASE YOUR REVENUE',
      icon: 'growth.svg',
      dis: `Grow your home services 
      business and increase revenue 
      with our exclusive leads.`,
    },
  ];
  ngOnInit(): void {}
}
