import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from '@angular/core/src/render3';

@Pipe({name:'Productsdesc'})

export class ProductsdescPipe implements PipeTransform {
    transform(value: any, args: any[]) {
        return value?value.substr(0,10)+'..':null;
    }

}