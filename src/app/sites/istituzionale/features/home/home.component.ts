import { Component } from '@angular/core';
import { CalendarioComponent } from "./calendario.component";
import { EvidenzaComponent } from './evidenza.component';
import { HeadSectionComponent } from './head-section.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeadSectionComponent, CalendarioComponent, EvidenzaComponent, CalendarioComponent]
})
export default class HomeComponent { }
