import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpcommingMoviesComponent } from './components/upcomming-movies/upcomming-movies.component';
import { ViewAllComponent } from './components/view-all/view-all.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"view-all/:id",
    component:ViewAllComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
