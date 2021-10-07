import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url = 'https://localhost:44337/';  // URL to DEX web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.Url + "product/" + id.toString());
    }
  }
