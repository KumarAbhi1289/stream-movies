import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayVideoComponent implements OnInit {

  @Input() fromParent:any;
  
  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {

  }

  displayModal = true;
  closeResult: any;


  closeModal(){
    this.activeModal.close('Modal Closed');
  }
  openFullscreen(content:any) {
    this.modalService.open(content, { fullscreen: true, size: 'xl' });
  }
}
