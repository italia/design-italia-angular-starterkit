import { TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { addDays, format } from 'date-fns';
import { it } from "date-fns/locale";
import { ItButtonDirective, ItCardComponent, ItCarouselComponent, ItCarouselItemComponent, ItIconComponent } from "design-angular-kit";

const slidesStoreFactory = () => {
    return Array
        .from({ length: 7 }, (_, index) => addDays(new Date(), index))
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
    imports: [ItIconComponent, ItButtonDirective, TitleCasePipe, ItCarouselComponent, ItCarouselItemComponent, ItCardComponent]
})
export class CalendarioComponent {

    readonly month = getThisMonth();

    readonly slidesStore = slidesStoreFactory();
}