import { Component } from "@angular/core";
import { ItButtonDirective, ItIconComponent } from "design-angular-kit";

@Component({
    standalone: true,
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    imports: [ItIconComponent, ItButtonDirective]
})
export class CalendarioComponent { }