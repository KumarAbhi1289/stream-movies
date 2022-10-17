import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDetailsService {

  constructor() { }

  assetpath = '../../assets/';
  thumbnilPath= '../../assets/thumbnil/';
  videoPath = '../../assets/videos/';
  category:Array<string> = [];
  movieTypes:Array<String> = [];

  movieData = [ 
    {
      id: 1,
      name: 'Laal Singh Chaddha',
      duration: '2h 41min',
      releaseingYear: '2022',
      rating: 5.1,
      ageRistriction: 'U/A',
      category: 'Bollywood',
      type: 'Romance/Drama',
      thumbnilPath: this.thumbnilPath+'lal-singh-chaddha.jpeg',
      videoPath: this.videoPath+'video1.mp4',
      discription: 'Laal Singh Chaddha is a 2022 Indian Hindi-language comedy-drama film directed by Advait Chandan from a screenplay by Eric Roth and Atul Kulkarni.',
    },
    {
      id: 2,
      name: 'Dobaaraa',
      duration: '2h 15min',
      releaseingYear: '2022',
      rating: 3.1,
      ageRistriction: 'U/A',
      category: 'Bollywood',
      type: 'Drama/Thriller',
      thumbnilPath: this.thumbnilPath+'dobaaraa.webp',
      videoPath: this.videoPath+'video1.mp4',
      discription: 'A woman gets an opportunity to save the life of a 12-year old boy who witnessed a death during a thunderstorm which happened 25 years ago',
    },
    {
      id: 3,
      name: 'Watcher',
      duration: '1h 35min',
      releaseingYear: '2022',
      rating: 6.3,
      ageRistriction: 'U/A',
      category: 'Hollywood',
      type: 'Horror',
      thumbnilPath: this.thumbnilPath+'watcher.jpeg',
      videoPath: this.videoPath+'video1.mp4',
      discription: 'As a serial killer stalks the city, a young actress who just moved to town with her boyfriend notices a mysterious stranger watching her from across the street.',
    },
    {
      id: 4,
      name: 'Cobra',
      duration: '3h 3min',
      releaseingYear: '2022',
      rating: 6.3,
      ageRistriction: 'U/A',
      category: 'Tollywood',
      type: 'Thriller',
      thumbnilPath: this.thumbnilPath+'cobra.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: 'Cobra is a 2022 Indian Tamil-language psychological action thriller film written and directed by R. Ajay Gnanamuthu and produced by S. S. Lalit Kumar, under the banner 7 Screen Studio. The film stars Vikram in a dual role alongside Irfan Pathan, Srinidhi Shetty, Roshan Mathew, K. S.',
    },
    {
      id: 5,
      name: 'Bullet Train',
      duration: '2h 6min',
      releaseingYear: '2022',
      rating: 7.4,
      ageRistriction: 'U/A',
      category: 'Hollywood',
      type: 'Action',
      thumbnilPath: this.thumbnilPath+'bullet-train.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: "Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe -- all with connected yet conflicting objectives -- on the world's fastest train.",
    },
    {
      id: 6,
      name: 'After Ever Happy',
      duration: '1h 45min',
      releaseingYear: '2022',
      rating: 4.4,
      ageRistriction: 'U/A',
      category: 'Hollywood',
      type: 'Romance/Drama',
      thumbnilPath: this.thumbnilPath+'after-ever-happy.png',
      videoPath:this.videoPath+'video1.mp4',
      discription: "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple girl she was when she met Hardin.",
    },
    {
      id: 7,
      name: 'Karthikeya 2',
      duration: '2h 30min',
      releaseingYear: '2022',
      rating: 8,
      ageRistriction: 'U/A',
      category: 'Tollywood',
      type: 'Thriller',
      thumbnilPath: this.thumbnilPath+'karthikeya-2.webp',
      videoPath:this.videoPath+'video1.mp4',
      discription: 'Trapped in a web of conspiracies and betrayal, Karthikeya, a doctor, must retrieve a mythological treasure and clear his name.',
    },
    {
      id: 8,
      name: 'Blonde',
      duration: '2h 46min',
      releaseingYear: '2022',
      rating: 5.5,
      ageRistriction: 'U/A',
      category: 'Hollywood',
      type: 'Drama',
      thumbnilPath: this.thumbnilPath+'blonde.webp',
      videoPath:this.videoPath+'video1.mp4',
      discription: 'Blonde is a 2022 American biographical film written and directed by Andrew Dominik, based on the 2000 novel of the same name by Joyce Carol Oates.',
    },
    {
      id: 9,
      name: 'Nope',
      duration: '2h 15min',
      releaseingYear: '2022',
      rating: 6.9,
      ageRistriction: 'R',
      category: 'Hollywood',
      type: 'Horror',
      thumbnilPath: this.thumbnilPath+'nope.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: '',
    },
    {
      id: 10,
      name: 'X',
      duration: '1h 46min',
      releaseingYear: '2022',
      rating: 6.6,
      ageRistriction: 'R',
      category: 'Hollywood',
      type: 'Horror',
      thumbnilPath: this.thumbnilPath+'x.jpg',
      videoPath:this.videoPath+'video1.mp4',
      discription: 'X is a 2022 slasher film written, directed, produced and edited by Ti West. It stars Mia Goth, Jenna Ortega, Martin Henderson, Brittany Snow, Owen Campbell',
    },
    {
      id: 11,
      name: 'Hunt',
      duration: '2h 11min',
      releaseingYear: '2022',
      rating: 6.9,
      ageRistriction: '',
      category: 'Hollywood',
      type: 'Thriller',
      thumbnilPath: this.thumbnilPath+'hunt.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: "After President Park's murder in 1980, North Korea sense an opportunity for future invasion and sends one of its spies. Park Pyong-Ho and Kim Jung-Do, two senior security officers, are tasked with the hunting down the infiltrator.",
    },
    {
      id: 12,
      name: 'Mat Kilau',
      duration: '1h 57min',
      releaseingYear: '2022',
      rating: 5.7,
      ageRistriction: 'U/A',
      category: 'Hollywood',
      type: 'Action',
      thumbnilPath: this.thumbnilPath+'mat-kilau.jpg',
      videoPath:this.videoPath+'video1.mp4',
      discription: "Mat Kilau: Kebangkitan Pahlawan ('Mat Kilau: The Rise of a Warrior') is a 2022 Malaysian biographical historical epic film directed by Syamsul Yusof,",
    },
    {
      id: 13,
      name: 'The Black Phone',
      duration: '1h 42min',
      releaseingYear: '2022',
      rating: 7,
      ageRistriction: 'R',
      category: 'Hollywood',
      type: 'Horror',
      thumbnilPath: this.thumbnilPath+'the-black-phone.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: "The Black Phone is a 2021 American coming-of-age supernatural horror film directed by Scott Derrickson and written by Derrickson and C. Robert Cargill",
    },
    {
      id: 14,
      name: 'Tadap',
      duration: '2h 6min',
      releaseingYear: '2022',
      rating: 5.1,
      ageRistriction: 'U/A',
      category: 'Bollywood',
      type: 'Romance/Action',
      thumbnilPath: this.thumbnilPath+'tadap.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: "Tadap ( transl. Yearning) is a 2021 Indian Hindi-language romantic action drama film directed by Milan Luthria and produced by Sajid Nadiadwala",
    },
    {
      id: 15,
      name: 'Vikram',
      duration: '2h 53min',
      releaseingYear: '2022',
      rating: 8.4,
      ageRistriction: 'U/A',
      category: 'Tollywood',
      type: 'Action',
      thumbnilPath: this.thumbnilPath+'vikram.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.",
    },
    {
      id: 16,
      name: 'Shiddat',
      duration: '2h 26min',
      releaseingYear: '2022',
      rating: 7.6,
      ageRistriction: 'U/A',
      category: 'Bollywood',
      type: 'Romance',
      thumbnilPath: this.thumbnilPath+'shiddat.jpeg',
      videoPath:this.videoPath+'video1.mp4',
      discription: 'Shiddat: Journey Beyond Love, or simply Shiddat ( transl. Passion), is a 2021 Indian Hindi-language romantic drama film directed by Kunal Deshmukh',
    }
  ]

commingSoonMovies = [
  {
    id: 1,
    name: 'Avatar: The Way of Water',
    duration: 'Comming Soon',
    releaseingYear: '',
    rating: 0,
    ageRistriction: 'U/A',
    category: 'Hollywood',
    type: 'Upcomming',
    thumbnilPath: this.thumbnilPath+'avatar-the-way-of-water.jpeg',
    videoPath:this.videoPath+'video1.mp4',
    discription: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
  },
  {
    id: 2,
    name: 'Ram Setu',
    duration: 'Comming Soon',
    releaseingYear: '2022',
    rating: 0,
    ageRistriction: 'U/A',
    category: 'Bollywood',
    type: 'Upcomming',
    thumbnilPath: this.thumbnilPath+'ram-setu.jpeg',
    videoPath:this.videoPath+'video1.mp4',
    discription: 'An atheist archaeologist turned believer must race against time to prove the true existence of the legendary Ram Setu before evil forces destroy the pillar of India’s heritage.',
  },
  {
    id: 3,
    name: 'Black Panther: Wakanda Forever',
    duration: 'Comming Soon',
    releaseingYear: '2022',
    rating: 0,
    ageRistriction: 'U/A',
    category: 'Hollywood',
    type: 'Upcomming',
    thumbnilPath: this.thumbnilPath+'wakanda-forever.jpeg',
    videoPath:this.videoPath+'video1.mp4',
    discription: '',
  },
  {
    id: 4,
    name: 'Black Adam',
    duration: 'Comming Soon',
    releaseingYear: '2022',
    rating: 0,
    ageRistriction: 'U/A',
    category: 'Hollywood',
    type: 'Upcomming',
    thumbnilPath: this.thumbnilPath+'black-adam.jpeg',
    videoPath:this.videoPath+'video1.mp4',
    discription: '',
  },
  {
    id: 1,
    name: 'name', 
    duration: '',
    releaseingYear: '2022',
    rating: 0,
    ageRistriction: 'U/A',
    category: 'Hollywood',
    type: 'type',
    thumbnilPath: this.thumbnilPath+'',
    videoPath:this.videoPath+'video1.mp4',
    discription: '',
  },
]
  
  exampleOfMoveStore=[
    {
      id: 1,
      name: 'name',
      duration: '',
      releaseingYear: '2022',
      rating: 0,
      ageRistriction: 'U/A',
      category: 'Hollywood',
      type: 'type',
      thumbnilPath: this.thumbnilPath+'',
      videoPath:this.videoPath+'video1.mp4',
      discription: '',
    },
  ]

  corouselData = [this.movieData[1], this.movieData[2], this.movieData[3]]

  getCategory(object: Array<Object>) {
    let categoryOfMovies:Array<String> = []
    let categoryName: string;
    let getCategory: Boolean = false;

    object.forEach((element: any) => {
      categoryName = element.category;
        categoryOfMovies.forEach(element => {
          if(categoryName == element){
            getCategory = true;
            return;
          }
        });
        if(!getCategory){
          categoryOfMovies.push(categoryName);
        }
        getCategory = false;
      });
      return categoryOfMovies;
  }

  getType(object: Array<Object>) {
    let typesOfMovies:Array<String> = []
    let typeName: string;
    let getType: Boolean = false;

    object.forEach((element: any) => {      
      typeName = element.type;      
      if(typeName.includes('/')){
        let containsArray = typeName.split('/');
        containsArray.forEach((element => {
          typesOfMovies.forEach((matchElement => {
            if(element == matchElement){
              getType = true;
              return
            }
          }));
          
          if(!getType){
            typesOfMovies.push(element);
          }
          getType = false;
        }))
      }
      else{
        typesOfMovies.forEach(element => {  
          if(typeName == element){
            getType = true;
            return
          }
        });
        if(!getType){
          typesOfMovies.push(typeName);
        }
        getType = false;
      }
    });
    
    return typesOfMovies;
  }

  getTypeOfMoviesDetails(object: Array<object>, typeOfMovie: string){
    let movieArray:Array<object> = []
    let getTypeOfMovie:string;
    object.forEach((element: any) => {      
      getTypeOfMovie = element.type;
      if(getTypeOfMovie.includes(typeOfMovie)){
        movieArray.push(element);
      }
    })
    return movieArray;
  }

}
