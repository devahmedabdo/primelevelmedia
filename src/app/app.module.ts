import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LandingComponent } from './views/home/components/landing/landing.component';
// import { AboutComponent } from './views/home/components/about/about.component';
import { ServicesComponent } from './views/home/components/services/services.component';
import { TestimonialsComponent } from './views/home/components/testimonials/testimonials.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,

    // AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
  ],
  imports: [BrowserModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    window.addEventListener('scroll', () => {
      let divClass = document.querySelectorAll(
        '.dReveal,.lReveal,.uReveal,.rReveal'
      );
      let imgClass = document.querySelectorAll('.imgReveal');
      [divClass, imgClass].forEach((arr: NodeListOf<Element>) => {
        let removeClass = (ele: Element, addedClass: string) => {
          if (ele.getBoundingClientRect().top < 600) {
            ele.classList.add(addedClass);
          } else {
            ele.classList.remove(addedClass);
          }
        };
        if (arr == divClass) {
          arr.forEach((hiddenEle: Element) => {
            removeClass(hiddenEle, 'reveal');
          });
        } else if (arr == imgClass) {
          arr.forEach((hiddenEle: Element) => {
            removeClass(hiddenEle, 'imgUnReveal');
          });
        }
      });
    });
  }
}
