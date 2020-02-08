export class City {
  Name: string;
  State: string;
  COL: number;
  Population: number;
  ImageLink: string;
  Link: string;
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
    Attraction: "Statue of Liberty, Central Park, Times Square, Empire State Building, Rockefeller Center, Grand Central Station",
    Jan: (39+26)/2,
    Feb: (43+29)/2,
    March: (52+36)/2,
    April: (64+45)/2,
    May: (72+54)/2,
    June: (80+64)/2,
    July: (84+69)/2,
    Aug: (84+69)/2,
    Sept: (76+61)/2,
    Oct: (64+50)/2,
    Nov: (55+42)/2,
    Dec: (44+31)/2
  },
  { 
    Name: "Lawrence",
    State: "KS",
    COL: 93,
    Population: 97286,
    ImageLink: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fadmissions.ku.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcaptioned_media%2Fpublic%2F2017-03%2FRS12514_103274_ExtdCanvas%2520%25281%2529_0.jpg%3Fitok%3D6Q0Eiu9m&imgrefurl=https%3A%2F%2Fadmissions.ku.edu%2Fvisiting-campus%2Flawrence&tbnid=MlUHKX0tzu6HvM&vet=12ahUKEwj8qNqF8cLnAhUExKwKHcetDDEQMygCegUIARCDAg..i&docid=riG5Lhbg6qDqTM&w=2334&h=1312&q=lawrence%20ks&ved=2ahUKEwj8qNqF8cLnAhUExKwKHcetDDEQMygCegUIARCDAg",
    Link: "lawrenceks.org",
    Attraction: "Clinton State Park, Spencer Museum of Art, Massachussets Street, KU Natural History Museum, University of Kansas, Haskell Indian Nations University, Watkins Museum of History, Castle Tea Room",
    Jan: (41+20)/2,
    Feb: (46+26)/2,
    March: (58+35)/2,
    April: (69+46)/2,
    May: (77+56)/2,
    June: (86+66)/2,
    July: (91+71)/2,
    Aug: (90+69)/2,
    Sept: (82+60)/2,
    Oct: (70+48)/2,
    Nov: (55+36)/2,
    Dec: (43+25)/2
  },
  { 
    Name: "Los Angeles",
    State: "CA",
    COL: 148,
    Population: 12447000,
    ImageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/1200px-20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
    Link: "https://www.lacity.org/",
    Attraction: "Universal Studios Hollywood, Disneyland Park, Griffith Observatory, Hollywood Sign, Hollywood Walk-of-Fame, Hollywood Boulevard",
    Jan: (68+49)/2,
    Feb: (69+51)/2,
    March: (70+52)/2,
    April: (73+55)/2,
    May: (74+58)/2,
    June: (79+62)/2,
    July: (83+65)/2,
    Aug: (85+66)/2,
    Sept: (83+65)/2,
    Oct: (79+60)/2,
    Nov: (73+53)/2,
    Dec: (68+49)/2
  },
  { 
    Name: "St. Louis",
    State: "MO",
    COL: 81,
    Population: 302838,
    ImageLink: "https://www.wheretraveler.com/sites/default/files/styles/promoted_image/public/helicopter10.29.jpg?itok=Hpczk6GE&timestamp=1484692151",
    Link: "https://www.stlouis-mo.gov/",
    Attraction: "Gateway Arch, Missouri Botantical Garden, City Museum, Saint Louis Zoo, Busch Stadium",
    Jan: (40+23)/2,
    Feb: (45+27)/2,
    March: (56+38)/2,
    April: (67+48)/2,
    May: (77+58)/2,
    June: (86+67)/2,
    July: (90+71)/2,
    Aug: (88+69)/2,
    Sept: (81+61)/2,
    Oct: (70+50)/2,
    Nov: (57+39)/2,
    Dec: (44+29)/2
  },
  { 
    Name: "Chicago",
    State: "IL",
    COL: 107,
    Population: 2705994,
    ImageLink: "https://s3-prod.chicagobusiness.com/GettyImages-1057157166.jpg",
    Link: "https://www.chicago.gov/city/en.html",
    Attraction: "Millennium Park, Willis Tower, Navy Pier, Skydeck Chicago, Shedd Aquarium",
    Jan: (32+22)/2,
    Feb: (36+26)/2,
    March: (45+34)/2,
    April: (56+43)/2,
    May: (66+53)/2,
    June: (77+63)/2,
    July: (82+70)/2,
    Aug: (81+70)/2,
    Sept: (74+62)/2,
    Oct: (62+50)/2,
    Nov: (50+39)/2,
    Dec: (37+27)/2
  },
  { 
    Name: "Houston",
    State: "TX",
    COL: 97,
    Population: 2162000,
    ImageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Houston_from_Sabine_Park.jpg/600px-Houston_from_Sabine_Park.jpg",
    Link: "https://www.houstontx.gov/",
    Attraction: "Space Center Houston, Houston Museum of Natural Science, Houston Zoo, Johnson Space Center",
    Jan: (60+45)/2,
    Feb: (64+48)/2,
    March: (70+55)/2,
    April: (76+61)/2,
    May: (83+68)/2,
    June: (88+74)/2,
    July: (91+76)/2,
    Aug: (91+76)/2,
    Sept: (86+71)/2,
    Oct: (79+63)/2,
    Nov: (70+54)/2,
    Dec: (63+48)/2 
  },
  { 
    Name: "",
    State: "",
    COL: 0,
    Population: 0,
    ImageLink: "",
    Link: "",
    Attraction: "",
    Jan: 0,
    Feb: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    Aug: 0,
    Sept: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0
  },

];