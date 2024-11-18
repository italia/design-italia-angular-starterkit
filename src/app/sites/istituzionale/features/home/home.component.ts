import { Component } from '@angular/core';
import { EvidenzaComponent } from './evidenza.component';
import { HeadSectionComponent } from './head-section.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeadSectionComponent, EvidenzaComponent]
})
export default class HomeComponent { }
