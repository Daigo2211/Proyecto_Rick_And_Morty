import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Character } from '../Models/character.interface';

@Injectable({
    providedIn: 'root',
  })
  export class CharacterService {
    private apiUrl = 'http://localhost:8080/api/characters'; 
  
    constructor(private http: HttpClient) {}
  
    // Obtener todos los personajes
    getAllCharacters(): Observable<Character[]> {  
      return this.http.get<Character[]>(this.apiUrl); 
    }
    
  
    // Obtener un personaje por ID
    getCharacterId(id: number): Observable<Character> {
      return this.http.get<Character>(`${this.apiUrl}/${id}`);
    }
      
}