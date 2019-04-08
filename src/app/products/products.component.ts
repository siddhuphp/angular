import { Component, OnInit } from '@angular/core';
import { Iproduct } from './products.module'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = 'Products List';
  showImage:boolean = false;
  ToggleImage(): void{
    this.showImage = !this.showImage;
  };
  filterValue:'';
  products:Iproduct[] = [
    {
      'Name':'Santoor',
      'Price':563465,
      'date':'01-01-2019',
      'rating':2.5,
      'img':'https://via.placeholder.com/50',
      'desc':'Angular comes with a stock of pipes such as DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, and PercentPipe. They are all available for use in any template.',
    },
    {
      'Name':'Lux',
      'Price':4456,
      'date':'01-02-2019',
      'rating':5,
      'img':'https://via.placeholder.com/50',
      'desc':'Angular comes with a stock of pipes such as DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, and PercentPipe. They are all available for use in any template.',
    },
    {
      'Name':'Medmix',
      'Price':752345356,
      'date':'01-05-2019',
      'rating':3.5,
      'img':'https://via.placeholder.com/50',
      'desc':'Angular comes with a stock of pipes such as DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, and PercentPipe. They are all available for use in any template.',
    }
  ];


}
