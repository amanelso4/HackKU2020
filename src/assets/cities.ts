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
    COL: 0,
    Population: 0,
    ImageLink: "",
    Link: "",
    Attraction: ""
    },
    { 
      Name: "Kansas",
     State: "KS",
     COL: 93,
     Population: 96892,
     ImageLink: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fadmissions.ku.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcaptioned_media%2Fpublic%2F2017-03%2FRS12514_103274_ExtdCanvas%2520%25281%2529_0.jpg%3Fitok%3D6Q0Eiu9m&imgrefurl=https%3A%2F%2Fadmissions.ku.edu%2Fvisiting-campus%2Flawrence&tbnid=MlUHKX0tzu6HvM&vet=12ahUKEwj8qNqF8cLnAhUExKwKHcetDDEQMygCegUIARCDAg..i&docid=riG5Lhbg6qDqTM&w=2334&h=1312&q=lawrence%20ks&ved=2ahUKEwj8qNqF8cLnAhUExKwKHcetDDEQMygCegUIARCDAg",
     Link: "lawrenceks.org",
     Attraction: "The university of Kansas is located here."
     },
     { 
      Name: "Los Angeles",
     State: "CA",
     COL: 0,
     Population: 0,
     ImageLink: "",
     Link: "",
     Attraction: ""
     },

];