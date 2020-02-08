export class City {
  Name: string;
  State: string;
  constructor(name: string, state: string) {
    this.Name = name;
    this.State = state;
}
}

export const citylist: City[] = 
[
   { "Name": "Lawrence", State: "Available" },
   { "Name": "St. Louis", State: "Ready" },
   { "Name": "New York", State: "Started" }
];