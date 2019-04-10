import {  Injectable  } from '@angular/core';
import { Iproduct } from "./products.module";

@Injectable()

export class ProductService {
    getProducts(): Iproduct[]
    {
        return [
            
        ]
    }
}