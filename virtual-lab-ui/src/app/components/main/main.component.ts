import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { Slide } from 'src/app/models/slide.model';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SlideType } from 'src/app/enums/slide-type.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public slides: Slide[] = [
    {
      title: 'Тема',
      type: SlideType.Title,
      options: undefined,
      acts: [],
      topic: {
        title: 'Лабораторний дослiд №1',
        subtitle: 'Добування метану в лабораторiї',
        description: 'Мета: Дослiдити один зi способiв добування метану в лабораторiї, дослiдити деякi фiзичнi та хiмiчнi властивостi добутої речовини'
      }
    },
    {
      title: 'Обладнання та реактиви', 
      type: SlideType.TextImage,
      topic: undefined,
      options: undefined, 
      acts: [
        { 
          text: "Штатив з кiльцем i азбестовою сiткою", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Штатив з кiльцем i азбестовою сiткою", 
            imagePosX: 0, 
            imagePosY: 0, 
            zIndex: 1, 
            width: 166, 
            height: 291, 
            imageRef: '../../../assets/images/tripod.png'
          } 
        },
        { 
          text: "Колба Вюрца", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Колба Вюрца", 
            imagePosX: 86, 
            imagePosY: 20, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/wurtz-flask.png'
          } 
        },
        { 
          text: "Спиртiвка", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Спиртiвка", 
            imagePosX: 74, 
            imagePosY: 193, 
            zIndex: 2, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/alcohol-stove.png'
          } 
        },
        { 
          text: "Промивна склянка (2 шт)", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Промивна склянка", 
            imagePosX: 175, 
            imagePosY: 84, 
            zIndex: 3, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/wash-flask.png'
          } 
        },
        { 
          text: "Кристалiзатор", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Кристалiзатор", 
            imagePosX: 398, 
            imagePosY: 182, 
            zIndex: 4, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/crystallizer.png'
          } 
        },
        { 
          text: "Штатив для пробiрок", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Штатив для пробiрок", 
            imagePosX: 270, 
            imagePosY: 175, 
            zIndex: 6, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/tube-tripod.png'
          } 
        },
        { 
          text: "Пробiрка", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Пробiрка", 
            imagePosX: 368, 
            imagePosY: 145, 
            zIndex: 5, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/test-tube.png'
          } 
        },
        { 
          text: "Газовiдвiднi трубки (3 шт)", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Газовiдвiдна трубка", 
            imagePosX: 206, 
            imagePosY: 19, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/hose.png'
          } 
        },
        { 
          text: "Ацетат натрiю", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Ацетат натрiю", 
            imagePosX: 520, 
            imagePosY: 0, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/jar.png'
          } 
        },
        { 
          text: "Гiдроксид натрiю", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Гiдроксид натрiю", 
            imagePosX: 610, 
            imagePosY: 0, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/jar.png'
          } 
        },
        { 
          text: "Розчин кислоти", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Розчин кислоти", 
            imagePosX: 560, 
            imagePosY: 140, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/flask.png'
          } 
        },
        { 
          text: "Розчин лугу", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Розчин лугу", 
            imagePosX: 644, 
            imagePosY: 140, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/flask.png'
          } 
        },
        { 
          text: "Вода", 
          textRevealed: false, 
          imageRevealed: false, 
          image: {
            title: "Вода", 
            imagePosX: 728, 
            imagePosY: 140, 
            zIndex: 0, 
            width: 115, 
            height: 149, 
            imageRef: '../../../assets/images/flask.png'
          } 
        }
      ]
    }
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

  constructor(public dialog: MatDialog, public sanitizer: DomSanitizer) { }

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
    if (this.slides[page].acts[index].image && this.slides[page].acts[index].image.imageRef) {
      setTimeout(() => {
        const dialogRef = this.dialog.open(DialogComponent, { data: {title: this.slides[page].acts[index].image.title, reference: this.slides[page].acts[index].image.imageRef}});
        dialogRef.afterClosed().subscribe(
          () => {
            this.slides[page].acts[index].imageRevealed = true;
            if (this.slides[page].acts.length - 1 == index) {
              this.disabled = false;
            } else {
              setTimeout(() => this.revealAct(page, index + 1), 2000);
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
}
