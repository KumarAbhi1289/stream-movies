import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router, public _location: Location) { }

  categoryUrlRoute = [
    {
      path: 'category/bollywood',
      name: 'Bollywood'
    },
    {
      path: 'category/hollywood',
      name: 'Hollywood'
    },
    {
      path: 'category/tollywood',
      name: 'Tollywood'
    },
    {
      path: 'category/tv-shows',
      name: 'TV-Shows'
    }  
  ]

  ngOnInit(): void {
  }

  refreshPage(): void{
    this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
    });
  }

}
