import { Component, OnInit  } from "@angular/core";
import { App_productService } from "../api_products/app_products.service";

@Component({
    selector:`app-app_products`,
    templateUrl: './app_products.component.html'
})

export class App_producrts implements OnInit
{
    constructor(private _App_productService:App_productService) { }

  appProducts:any[] = [];
  ngOnInit(): void {
    this._App_productService.getAppProducts().subscribe((data) => this.appProducts = data);    
  }

  title:string = 'Products List';
  showImage:boolean = false;
  ToggleImage(): void{
    this.showImage = !this.showImage;
  };
}