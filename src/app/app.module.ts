import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsdescPipe } from './products/products-desc.pipe';
import { ProductSearchPipe } from './products/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/products.service';
import { App_producrts } from './api_products/app_products.component';
import { App_productService } from './api_products/app_products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,    
    ProductsdescPipe,
    ProductSearchPipe,
    StarComponent,
    App_producrts   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ProductService,
    App_productService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
