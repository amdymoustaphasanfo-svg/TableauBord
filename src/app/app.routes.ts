import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Statistique } from './statistique/statistique';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'statistique', component: Statistique }
];