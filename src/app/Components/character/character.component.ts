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
  character: Character = {
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
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.characterService.getCharacterId(id).subscribe(data=>{
      this.character = data;
    });  
   
  }

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

