import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  ItHeaderComponent,
  ItIconComponent,
  ItNavBarComponent,
  ItNavBarItemComponent,
} from 'design-angular-kit';

@Component({
  standalone: true,
  template: `
    <it-header
      slimTitle="Ente di appartenenza"
      slimTitleLink="https://italia.github.io/design-angular-kit"
      loginStyle="full"
      loginClick="loginClickHandler($event)"
      (searchClick)="searchClickHandler($event)">
      <ng-container brand>
        <a href="#">
          <it-icon name="pa"></it-icon>
          <div class="it-brand-text">
            <div class="it-brand-title">Nome dell'Istituzione</div>
            <div class="it-brand-tagline d-none d-md-block">
              Tag line dell'Istituzione
            </div>
          </div>
        </a>
      </ng-container>

      <ng-container rightZone>
        <div class="it-socials d-none d-md-flex">
          <span>Seguici su</span>
          <ul>
            <li>
              <a href="#" aria-label="Facebook" target="_blank">
                <it-icon name="facebook"></it-icon>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Github" target="_blank">
                <it-icon name="github"></it-icon>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" target="_blank">
                <it-icon name="twitter"></it-icon>
              </a>
            </li>
          </ul>
        </div>
      </ng-container>

      <ng-container navItems>
        <it-navbar-item
          ><a class="nav-link" routerLink="home" routerLinkActive="active"
            >Home</a
          ></it-navbar-item
        >
        <it-navbar-item
          ><a class="nav-link" routerLink="document" routerLinkActive="active"
            >Documento</a
          ></it-navbar-item
        >
        <it-navbar-item
          ><a class="nav-link" routerLink="typography" routerLinkActive="active"
            >Tipografia</a
          ></it-navbar-item
        >
        <it-navbar-item
          ><a class="nav-link" routerLink="form" routerLinkActive="active"
            >Form</a
          ></it-navbar-item
        >
      </ng-container>
    </it-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [
    RouterOutlet,
    ItHeaderComponent,
    ItNavBarComponent,
    ItNavBarItemComponent,
    RouterLink,
    RouterLinkActive,
    ItIconComponent,
  ],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export default class IstituzionaleLayout {
  loginClickHandler(event: Event) {
    console.log('loginClickHandler', event);
  }

  searchClickHandler(event: Event) {
    console.log('searchClickHandler', event);
  }
}
