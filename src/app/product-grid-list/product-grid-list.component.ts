import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: 'product-grid-list.component.html',
  styleUrls: ['product-grid-list.component.css']
})
export class ProductGridListComponent implements OnInit
{

  public products: Array<{
    title: string;
    description: string;
    barcode: string;
    sku: string;
    color?: string;
    size?: string;
    price: number;
    discount: number;
  }> = [];

  ngOnInit()
  {
    for (let i = 0; i < 12; i++)
    {
      this.products.push({
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph(),
        barcode: 'b-' + faker.lorem.words(1),
        sku: 'sku-' + faker.lorem.words(1),
        color: faker.commerce.color(),
        price: Math.floor(Math.random() * 100),
        discount: Math.floor(Math.random() * 100)
      });
    }
  }
}
