import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {
  constructor() {}
  config: SwiperOptions = {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    loop: true,
    grabCursor: true,
  };
  tetimonials: any[] = [
    {
      name: `satisfecho`,
      img: `user1.png`,
      opinion: `muy satisfecho con el trabajo de
      juan pablo y prime level media`,
    },
    {
      name: `HUGE THANKS JP`,
      img: `user2.png`,
      opinion: `Awesome job! I'm beyond satisfied and 
      look forward to working with you guys 
      until my back gives out!!`,
    },
    {
      name: `NO REGRETS`,
      img: `user3.png`,
      opinion: `Awesome job! I'm beyond satisfied and 
      look forward to working with you guys 
      until my back gives out!!`,
    },
  ];
  ngOnInit(): void {}
}
