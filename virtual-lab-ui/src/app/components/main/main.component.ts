import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { Slide } from 'src/app/models/slide.model';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public slides: Slide[] = [
    {title: 'First slide', acts: [
      {text: "Fuck you", imageRef: '../../../assets/images/gora.jpg', textRevealed: false, imageRevealed: false, imagePosX: 250, imagePosY: 100},
      {text: "Faggot", imageRef: '../../../assets/images/park.jpg', textRevealed: false, imageRevealed: false, imagePosX: 350, imagePosY: 50}
    ]},
    {title: 'Second slide', acts: [
      {text: "Suck my", imageRef: undefined, textRevealed: false, imageRevealed: false, imagePosX: 250, imagePosY: 100},
      {text: "Dick", imageRef: '../../../assets/images/park.jpg', textRevealed: false, imageRevealed: false, imagePosX: 250, imagePosY: 100}
    ]},
    {title: 'Third slide', acts: []},
    {title: 'Fourth slide', acts: []},
    {title: 'Fifth slide', acts: []},
    {title: 'Sixth slide', acts: []}
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
  maxIndex: number = 0;
  disabled: boolean = false;

  @ViewChild(SwiperDirective, {read: 0, static: true}) directiveRef: SwiperDirective;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.playAnimation(this.ind);
  }

  nextPage = () => {
    if (this.disabled) return;
    if (this.ind < this.slides.length - 1) ++this.ind;
  }

  goToPage = (num: number) => {
    if (this.disabled) return;
    this.ind = num;
  }

  prevPage = () => {
    if (this.disabled) return;
    if (this.ind > 0) --this.ind;
  }

  public onIndexChange(index: number) {
    this.ind = index;
    if (this.ind > this.maxIndex) {
      this.playAnimation(this.ind);
      this.maxIndex = this.ind;
    }
  }

  playAnimation = (page: number) => {
    this.disabled = true;
    if (this.slides[page].acts && this.slides[page].acts.length) {
      this.revealAct(page, 0);
    } else {
      this.disabled = false;
    }  
  }

  revealAct = (page: number, index: number) => {
    this.slides[page].acts[index].textRevealed = true;
    if (this.slides[page].acts[index].imageRef) {
      setTimeout(() => {
        const dialogRef = this.dialog.open(DialogComponent, { data: this.slides[page].acts[index].imageRef});
        dialogRef.afterClosed().subscribe(
          () => {
            this.slides[page].acts[index].imageRevealed = true;
            if (this.slides[page].acts.length - 1 == index) {
              this.disabled = false;
            } else {
              setTimeout(() => this.revealAct(page, index + 1), 5000);
            }
          }
        )
      }, 2000)
      return;
    }
    if (this.slides[page].acts.length - 1 == index) {
      this.disabled = false;
    } else {
      setTimeout(() => this.revealAct(page, index + 1), 5000);
    }
  }

  getSlidesImagesStyles = (slide: Slide) => {
    let imageRefs: string[] = [];
    let imagePositions: string[] = [];
    for (let i = 0; i < slide.acts.length; ++i) {
      if (slide.acts[i].imageRevealed) {
        imageRefs.push(slide.acts[i].imageRef);
        imagePositions.push(`${slide.acts[i].imagePosX}px ${slide.acts[i].imagePosY}px`);
      }
    }
  }
}
