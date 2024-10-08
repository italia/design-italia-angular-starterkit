import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItNavBarComponent, ItNavBarItemComponent } from 'design-angular-kit';

@Component({
  standalone: true,
  template: `
    <it-navbar>
      <ng-container navItems>
        <it-navbar-item>
          <a class="nav-link" routerLink="/istituzionale">Istituzionale</a>
        </it-navbar-item>
        <it-navbar-item
          ><a class="nav-link" routerLink="/comune">Comune</a></it-navbar-item
        >
        <it-navbar-item
          ><a class="nav-link" routerLink="/scuola">Scuola</a></it-navbar-item
        >
      </ng-container>
    </it-navbar>
    <div class="row justify-content-md-center">
      <div class="col-md-8 my-5">
        <h1 class="text-center">Design Italia Angular Starter Kit</h1>
        <div class="col-4 mx-auto">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 250 250"
            style="enable-background: new 0 0 250 250"
            xml:space="preserve">
            <g>
              <polygon
                class="st0"
                fill="#0066CC"
                points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 	" />
              <polygon
                class="st1"
                fill="#0059b3"
                points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 	" />
              <path
                class="st2"
                fill="#FFFFFF"
                d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
            L125,52.1z M142,135.4H108l17-40.9L142,135.4z" />
            </g>
          </svg>
        </div>
        <p class="small text-muted text-center">
          Lo starter kit per applicazioni Angular per la Pubblica
          Amministrazione
        </p>
        <p>
          Angular Starter Kit è un
          <b>un progetto di esempio di una applicazione Angular</b> che utilizza
          <a
            href="https://github.com/italia/design-angular-kit"
            target="_blank"
            rel="noopener noreferrer"
            >Angular Design Kit <i class="it-external-link"></i></a
          >, collezione di componenti open source specifici per la Pubblica
          Amministrazione.
        </p>
        <hr />
        <p class="small mt-4">
          Il progetto è distribuito con licenza BSD-3 (consultabile nel file
          <a
            href="https://github.com/italia/design-italia-angular-starterkit/blob/main/LICENSE"
            >LICENSE</a
          >), un modello ancora più permissivo della classica licenza GPL, in
          quanto consente di modificare e ridistribuire questo software secondo
          varie modalità, anche di tipo closed-source.
        </p>
      </div>
    </div>
  `,
  imports: [RouterLink, ItNavBarComponent, ItNavBarItemComponent],
})
export default class HomeComponent {}
