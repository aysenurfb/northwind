import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1: any = {
    productId: 1,
    categoryId: 1,
    productName: 'Bardak',
    unitsInStock:3,
    unitPrice: 5,
  };
  product2: any = {
    productId: 2,
    categoryId: 1,
    productName: 'Laptop',
    unitsInStock:3,
    unitPrice: 5,
  };
  product3: any = {
    productId: 3,
    categoryId: 1,
    productName: 'Mouse',
    unitsInStock:3,
    unitPrice: 5,
  };

  product4: any = {
    productId: 4,
    categoryId: 1,
    productName: 'Keyboard',
    unitsInStock:3,
    unitPrice: 5,
  };
  product5: any = {
    productId: 5,
    categoryId: 1,
    productName: 'Camera',
    unitsInStock:3,
    unitPrice: 5,
  };

  products:Product[]= [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
