import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Productlist } from '../Interfaces/productlist';

@Component({
  selector: 'app-productoverview',
  templateUrl: './productoverview.component.html',
  styleUrls: ['./productoverview.component.css']
})
export class ProductoverviewComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  products = {} as Productlist;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProducts()
    .subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  }

}
