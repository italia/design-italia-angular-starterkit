import { TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { addDays, format } from 'date-fns';
import { it } from "date-fns/locale";
import { ItButtonDirective, ItIconComponent } from "design-angular-kit";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

const slidesStoreFactory = () => {
    return Array
        .from({ length: 5 }, (_, index) => addDays(new Date(), index))
        .map((item: Date, index: number) => ({
            id: `${index + 1}`,
            title: `item ${index + 1}`,
            date: format(item, 'dd', { locale: it }),
            dayOfWeek: format(item, 'E', { locale: it })
        }))
}

const getThisMonth = () => format(new Date(), 'MMMM yyyy', { locale: it })

@Component({
    standalone: true,
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    imports: [ItIconComponent, ItButtonDirective, CarouselModule, TitleCasePipe]
})
export class CalendarioComponent {

    readonly month = getThisMonth();

    readonly slidesStore = slidesStoreFactory();

    readonly customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    }
}