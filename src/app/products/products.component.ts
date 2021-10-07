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

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
    .subscribe((data) => {
      this.product = data;
    })
  }

}
