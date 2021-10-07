import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Productlist } from '../Interfaces/productlist';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product = {} as Product;
  products = {} as Productlist;

  ngOnInit(): void {
    this.getProductById();
    this.getProducts();
  }

  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
    .subscribe((data) => {
      this.product = data;
    })
  }

  getProducts():void{
    this.productService.getProducts()
    .subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  }

}
