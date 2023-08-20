interface Wand {
  wood: string;
  core: string;
  length: number;
}

export interface Characters {
  id: string;
  link: string;
  name: string;
  species: string;
  gender: string;
  dateOfBirth: string;
  image: string;
  house: string;
  actor: string;
  wand: Wand;
}
