import { Component } from '@angular/core';
import { CalendarioComponent } from "./calendario.component";
import { EvidenzaComponent } from './evidenza.component';
import { FooterComponent } from './footer.component';
import { HeadSectionComponent } from './head-section.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeadSectionComponent, CalendarioComponent, EvidenzaComponent, CalendarioComponent, FooterComponent]
})
export default class HomeComponent { }
