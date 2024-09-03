import { Character } from './character.interface';
export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  
  export interface CharacterResponse {
    info: Info;
    results: Character[];
  }
  