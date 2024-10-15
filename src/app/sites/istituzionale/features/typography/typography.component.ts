import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<h1>Tipografia</h1><br/>
    <h1>Hello h1</h1>
    <h2>Hello h2</h2>
    <h3>Hello h3</h3>
    <h4>Hello h4</h4>
    <h5>Hello h5</h5>
    <h6>Hello h6</h6>

    <p>Esempio di testo <u>sottolineato</u>.</p>
    <p>Esempio di testo <mark>evidenziato</mark>.</p>
    <p>Esempio di testo <em>corsivo</em>.</p>
    <p>Esempio di testo <strong>in grassetto</strong>.</p>
    <p>Esempio di testo <small>rimpicciolito</small>.</p>
    <p>Esempio di testo <ins>aggiuntivo</ins>.</p>
    <p>Esempio di testo <del>cancellato</del> o <i>invalido</i>.</p>
    <p>Esempio di testo <code>monospace</code>.</p>
    `,
})
export default class TypographyComponent {}
