import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()

export class App_productService {

    private _productUrl = "https://ngproductsparam.herokuapp.com/api/getProductDetails";
    constructor(private _http:HttpClient){}
    getAppProducts(): Observable <any[]> {
        return this._http.get<any[]>(this._productUrl)
    }
}