import { Component, OnInit, ViewChild, Input, ViewEncapsulation} from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayVideoComponent } from '../../components/play-video/play-video.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {

  
  @Input() movieList:any;
  
  assetPath = "../../"
  counter = Array;
  star:number = 0;
  showNavigationArrows = true;
  showNavigationIndicators = false;
  closeResult: any;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  displayModal = false;
  movieName:any;
  starRating:number=0;
  starStyle:String = '';
  displayStar:boolean = true;
  getColorFillPercentageOfStar:string = '';
  style:String =''
  images = ["../../../assets/carousel/img-1.jpeg", "../../../assets/carousel/img-2.webp", "../../../assets/carousel/img-3.jpeg"];

  constructor(config: NgbCarouselConfig, public modalService: NgbModal) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    
  }

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }


  lastIndexOfRating(data: number){
    return Math.floor(data/2)+1;
  }

  getStarPercentage(rating:number){
    let starRating:number;
    starRating = Math.floor(rating/2)+1;
  }
  isLastStar(rating:number, index:number){
    rating = rating/2
    if(rating-index > 1){
      return false;
    }
    else{
      rating = (rating - index)*100;
      this.getColorFillPercentageOfStar = 'width: '+rating+'%';
      return true;
    }
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  
  openFullscreen(content:any) {
    this.modalService.open(content, { fullscreen: true });
  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
    console.warn('vertically centerd');
    
  }
  
  openModal(movieName:any){
    this.movieName = movieName;
    const modalRef = this.modalService.open(PlayVideoComponent, {centered: true});
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    })
    console.warn(this.movieName);
    modalRef.componentInstance.fromParent = this.movieName;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    })
  }

  showImg(val:any){
    console.warn(val);
  }



}
