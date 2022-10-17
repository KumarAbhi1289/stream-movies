import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stream-movies';

  moviesList = [
    {
      id: 1,
      name: "Laal Singh Chaddha",
      ageRistriction: "U/A",
      duration: "2h:41min",
      year: 2022,
      rating: 5,
      imageUrl: "../assets/carousel/img-1.jpeg",
      description: "Laal Singh Chaddha is a 2022 Indian Hindi-language comedy-drama film directed by Advait Chandan from a screenplay by Eric Roth and Atul Kulkarni."
    },
    {
      id: 2,
      name: "Karthikeya 2",
      ageRistriction: "U/A",
      duration: "2h:30min",
      year: 2022,
      rating: 8,
      imageUrl: "../assets/carousel/img-1.webp",
      description: "Karthikeya 2, also known as Karthikeya 2: Daivam Manushya Rupena,[4] is a 2022 Indian Telugu-language mystery action-adventure film[5][6] written and directed by Chandoo Mondeti."  
    },
    {
      id: 3,
      name: "Paws of Fury: The Legend of Hank",
      ageRistriction: "U/A",
      duration: "1h:43min",
      year: 2022,
      rating: 5,
      imageUrl: "../assets/carousel/img-3.jpeg",
      description: "A down-on-his-luck hound finds himself in a town full of cats who need a hero to defend them from a ruthless villain's evil plot to wipe their village off the map. With help from a reluctant trainer, the underdog must assume the role of fearsome samurai and team up with the felines to save the day. The only problem is -- they all hate dogs."
    }
  ]

  typesOfMovies = ['Upcomming Movies', 'Trending Movies', 'Horror Movies']
}
