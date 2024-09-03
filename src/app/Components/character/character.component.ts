import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../Services/character.service';
import { Character } from '../../Models/character.interface';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  character: Character = { /* Objeto para almacenar los datos del personaje */
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: { name: '' , url:''},
    location: { name: '', url:'' },
    image: '',
    episode: [],
    url: '',
    created: '',
    firstSeenIn: ''
  };

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;  // Obtiene el ID del personaje de la URL
    this.characterService.getCharacterId(id).subscribe(data=>{
      this.character = data;   // Asigna los datos del personaje al objeto `character`
    });
   
  }



  // Método para descargar la información del personaje en un archivo PDF
  downloadPDF(): void {
    const doc = new jsPDF();
    doc.text(`Character Details`, 10, 10);
    doc.text(`Name: ${this.character.name}`, 10, 20);
    doc.text(`Status: ${this.character.status}`, 10, 30);
    doc.text(`Species: ${this.character.species}`, 10, 40);
    doc.text(`Location: ${this.character.location.name}`, 10, 50);
    doc.text(`First seen in: ${this.character.firstSeenIn}`, 10, 60);
    doc.save(`${this.character.name}.pdf`);
  }
}

