import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  links: any[] = [
    {
      img: 'facebook.svg',
      link: 'https://www.facebook.com/primelevelmedia',
    },
    {
      img: 'instagram.svg',
      link: 'https://www.instagram.com/primelevelmedia/',
    },
    {
      img: 'linkedin.svg',
      link: 'https://www.linkedin.com/company/prime-level-media/?viewAsMember=true&fbclid=IwAR2fOLAwCTiovrIZBnmJwr3l6rR80O9R-wRBUmSIDWLjiLbtvGmHQHBjr2U',
    },
  ];
  year: number = new Date().getFullYear();
  ngOnInit(): void {}
}
