import { Component } from '@angular/core';
import { EvidenzaComponent } from './evidenza.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [EvidenzaComponent]
})
export default class HomeComponent { }
