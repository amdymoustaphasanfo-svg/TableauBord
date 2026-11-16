import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil {
  prenom = 'Amdy';
  compteur = 0;

  ajouter() {
    this.compteur++;
  }
}