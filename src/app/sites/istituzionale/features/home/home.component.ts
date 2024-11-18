import { Component } from '@angular/core';
import { CalendarioComponent, EvidenzaComponent, FooterComponent, HeadSectionComponent } from './ui';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeadSectionComponent, CalendarioComponent, EvidenzaComponent, CalendarioComponent, FooterComponent]
})
export default class HomeComponent { }
