import { Component, OnInit, Input} from '@angular/core';
import {MoviesDetailsService} from '../../services/movies-details.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() movieType:any;
  @Input() movieData:any;

  
  constructor( private moviesDetailsService: MoviesDetailsService) { }

  ngOnInit(): void {
    console.warn("Movie Object: ",this.moviesDetailsService.getTypeOfMoviesDetails(this.movieData, this.movieType[0]));
    
  }
  openInNewTab(url:string, type:any){
    window.open(url);
  }
  typeOfMoviesObject:Array<Object> = [];

  getMovieObject(object:Array<object>, type:String){
    return this.moviesDetailsService.getTypeOfMoviesDetails(this.movieData, this.movieType[0]);
  }


}
