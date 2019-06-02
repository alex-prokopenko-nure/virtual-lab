import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  config: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
    keyboard: true,
    navigation: true,
    pagination: this.pagination,
    scrollbar: false
  };

  ind: number = 0;

  @ViewChild(SwiperDirective, {read: 0, static: true}) directiveRef: SwiperDirective;

  constructor() { }

  ngOnInit() {
  }

  nextPage = () => {
    if (this.ind < 1) ++this.ind;
    else this.ind = 0;
  }

  public onIndexChange(index: number) {
    this.ind = index;
  }
}
