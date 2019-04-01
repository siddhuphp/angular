import { Component, OnInit } from '@angular/core';

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
  filterInput:string = '';
  products:any[] = [
    {
      'Name':'Santoor',
      'Price':'55',
      'date':'01-01-2019',
      'rating':'4.5',
      'img':'https://via.placeholder.com/50',
    },
    {
      'Name':'Lux',
      'Price':'45',
      'date':'01-02-2019',
      'rating':'5',
      'img':'https://via.placeholder.com/50',
    },
    {
      'Name':'Medmix',
      'Price':'75',
      'date':'01-05-2019',
      'rating':'2.5',
      'img':'https://via.placeholder.com/50',
    }
  ];


}
