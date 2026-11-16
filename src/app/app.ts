import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Pied } from './pied/pied';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Pied],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
