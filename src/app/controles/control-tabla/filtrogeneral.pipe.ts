import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filtrogeneral'
})

@Injectable()
export class FiltroGeneralPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
		let renglon = items.filter(singleItem =>
			{
				let seencontro=false;
				for(let elemento in singleItem){
					let stringbuscar = singleItem[elemento]===undefined ?"":singleItem[elemento].valor===undefined?singleItem[elemento]:singleItem[elemento].valor;
					stringbuscar=stringbuscar===null?"":stringbuscar;
					seencontro = seencontro || stringbuscar.toString().toLowerCase().includes(value.toLowerCase());
					if(seencontro)
						break;
				}
				if(seencontro)
					return true;
				else
					return null;
			}
		);
        return renglon;
    }
}