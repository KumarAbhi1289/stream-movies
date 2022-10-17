import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() movieType:any;
  constructor() { }

  ngOnInit(): void {
  }
  openInNewTab(url:string){
    window.open(url, '_blank');
  }

}
