export class City {
  Name: string;
  State: string;
  COL: number;
  Population: number;
  ImageLink: string;
  Link: string;
  /*
  Jan: number;
  Feb: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  Aug: number;
  Sept: number;
  Oct: number;
  Nov: number;
  Dec: number;
  */
  Attraction: string;
}

export const citylist: City[] = 
[
   { 
     Name: "New York",
    State: "NY",
    COL: 187,
    Population: 8770000,
    ImageLink: "https://specials-images.forbesimg.com/imageserve/5d93909224fbf10007b8a1fd/960x0.jpg?fit=scale",
    Link: "https://www1.nyc.gov/",
    Attraction: "Statue of Liberty, Central Park, Times Square, Empire State Building, Rockefeller Center, Grand Central Station"
    },
    { 
      Name: "Lawrence",
     State: "KS",
     COL: 93,
     Population: 97286,
     ImageLink: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fadmissions.ku.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcaptioned_media%2Fpublic%2F2017-03%2FRS12514_103274_ExtdCanvas%2520%25281%2529_0.jpg%3Fitok%3D6Q0Eiu9m&imgrefurl=https%3A%2F%2Fadmissions.ku.edu%2Fvisiting-campus%2Flawrence&tbnid=MlUHKX0tzu6HvM&vet=12ahUKEwj8qNqF8cLnAhUExKwKHcetDDEQMygCegUIARCDAg..i&docid=riG5Lhbg6qDqTM&w=2334&h=1312&q=lawrence%20ks&ved=2ahUKEwj8qNqF8cLnAhUExKwKHcetDDEQMygCegUIARCDAg",
     Link: "lawrenceks.org",
     Attraction: "Clinton State Park, Spencer Museum of Art, Massachussets Street, KU Natural History Museum, University of Kansas, Haskell Indian Nations University, Watkins Museum of History, Castle Tea Room"
     },
     { 
      Name: "Los Angeles",
     State: "CA",
     COL: 148,
     Population: 12447000,
     ImageLink: "https://www.lacity.org/",
     Link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/1200px-20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
     Attraction: "Universal Studios Hollywood, Disneyland Park, Griffith Observatory, Hollywood Sign, Hollywood Walk-of-Fame, Hollywood Boulevard"
     },

];