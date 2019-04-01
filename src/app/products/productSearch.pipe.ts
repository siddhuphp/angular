import { Pipe, PipeTransform  } from "@angular/core";

@Pipe({
    name:'ProductSearchPipe'
})

export class ProductSearchPipe implements PipeTransform {
    transform(value: any[], userInput: string) {
        userInput = userInput?userInput.toLowerCase():null;
        return userInput ? value.filter((product) => { product.Name.toLowerCase().indexOf(userInput) !== -1}):value;
    }
}