import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { BollywoodComponent } from './components/bollywood/bollywood.component';
import { HollywoodComponent } from './components/hollywood/hollywood.component';
import { UpcommingMoviesComponent } from './components/upcomming-movies/upcomming-movies.component';
import { LatestMoviesComponent } from './components/latest-movies/latest-movies.component';
import { SuggestedForYouComponent } from './components/suggested-for-you/suggested-for-you.component';
import { TrendingComponent } from './components/trending/trending.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavBarComponent } from './utilities/nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './utilities/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BackgroundPageComponent } from './components/background-page/background-page.component';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { YearPipe } from './pipes/year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsComponent,
    BollywoodComponent,
    HollywoodComponent,
    UpcommingMoviesComponent,
    LatestMoviesComponent,
    SuggestedForYouComponent,
    TrendingComponent,
    CarouselComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CardComponent,
    CardListComponent,
    ViewAllComponent,
    PageNotFoundComponent,
    BackgroundPageComponent,
    PlayVideoComponent,
    FooterComponent,
    YearPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
