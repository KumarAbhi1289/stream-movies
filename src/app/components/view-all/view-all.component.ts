import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MoviesDetailsService} from '../../services/movies-details.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  url = this.router.url; 
  urlValue:Array<string> = [];

  constructor(private router: Router, private moviesDetailsService: MoviesDetailsService) { }
  
  moviesData = this.moviesDetailsService.movieData;
  perticularCategoryMovies:Array<object>=[];
  assetPath = '../'


  ngOnInit(): void {
    this.getUrlValue(this.url);
    this.fetchMovieByCategory(this.moviesData);
  }

  

  getUrlValue(url:string){
    url = url.substring(1);
    url = url.replace('%20', ' ');
    
    url = url.replace('/',':');
    
    this.urlValue = url.split(":")
  }
  
  fetchMovieByCategory(object: Array<object>){
    if(!this.urlValue.includes('view-all')){
      object.forEach((element: any) => {
        let toGetCategory = (element.category).toLowerCase();
        let category = (this.urlValue[1]).toLowerCase();
        if(category == toGetCategory){
          this.perticularCategoryMovies.push(element);
        }
      });
    }
    else{
      if(this.urlValue.includes('Upcomming')){
        this.perticularCategoryMovies = this.moviesDetailsService.commingSoonMovies;
      }
      else{
          object.forEach((element: any) => {
          let toGetType = (element.type).toLowerCase();
          let type = (this.urlValue[1]).toLowerCase();
          if(toGetType.includes(type)){
            this.perticularCategoryMovies.push(element);
          }
        });
      }
      
    }
  }

}
