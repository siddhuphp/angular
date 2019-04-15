import { Component, OnInit } from '@angular/core';
import { Iproduct } from './products.module';
import { ProductService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//
  constructor(private _productService: ProductService) { }
  appProducts:any[] = [];
  ngOnInit(): void {
      this.products = this._productService.getProducts();
  }

  title:string = 'Products List';
  showImage:boolean = false;
  ToggleImage(): void{
    this.showImage = !this.showImage;
  };

  onDataRecive(message: String){
    this.title = `Product list ${message}`;
  }



  filterValue:'';
  products:Iproduct[] = [];


}
