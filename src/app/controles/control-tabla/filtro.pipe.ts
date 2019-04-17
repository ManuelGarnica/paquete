import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filtro'
})

@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem => {
			let stringbuscar = singleItem[field]===undefined || singleItem[field]===null?"":singleItem[field];
			stringbuscar.toLowerCase().includes(value.toLowerCase());
		});
    }
}