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
      name: `JOSE RAMOS 9/16/2022 `,
      des: `satisfecho`,
      img: `user1.png`,
      opinion: `muy satisfecho con el trabajo de
      juan pablo y prime level media`,
    },
    {
      name: `PETER KLOPSTEIN 1/20/2023`,
      des: `HUGE THANKS JP`,
      img: `user2.png`,
      opinion: `Awesome job! I'm beyond satisfied and 
      look forward to working with you guys 
      until my back gives out!!`,
    },
    {
      name: `BEN PENEBIANCO 3/8/2023`,
      des: `NO REGRETS`,
      img: `user3.png`,
      opinion: `Well, I believe in marketing now... Great 
      group of guys. Special thanks to Juan 
      Pablo and Eric for getting me steady work.`,
    },
    {
      name: `BEN PENEBIANCO 3/8/2023`,
      des: `Great Experience`,
      img: `user4.png`,
      opinion: `Very surprised with how quickly I 
      got new leads and how qualified they were.`,
    },
    {
      name: `WILL BROWN 7/15/2022 `,
      des: `Thanks PLM`,
      img: `user5.png`,
      opinion: `Eric is the man, very knowledgeable 
      and answered all my questions`,
    },
    {
      name: `JESSICA TAYLOR 4/20/2022 `,
      des: `wow!`,
      img: `user6.png`,
      opinion: `My husband and I have been in business 
      for 12 years and I never thought we’d be 
      able to grow our little business to 6 living 
      breathing souls. Thank you JP.`,
    },
  ];
  ngOnInit(): void {}
}
