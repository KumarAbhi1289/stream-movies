import { Component, Input, OnInit, Output } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayVideoComponent} from '../../components/play-video/play-video.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() movieData:any;
  assetPath = '../'

  title ='Avatar';
  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.movieData)
  }



  openModal(data:any) {
    const modalRef = this.modalService.open(PlayVideoComponent, {centered: true});
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((err)=> {
      console.error(err);
    })
  }

  isUpcomming(movie: any){
    if(movie.rating == 0){
      return true;
    }
    return false
  }
}
