import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@evn/environment';
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiURLProducts = environment.apiURL + 'products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURLProducts);
  }
  createProduct(productData: FormData): Observable<any> {
    return this.http.post<any>(this.apiURLProducts, productData);
  }

  getProduct(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiURLProducts}/${productId}`);
  }
  updateProduct(productId: string, productData: FormData): Observable<any> {
    return this.http.put<Product>(
      `${this.apiURLProducts}/${productId}`,
      productData
    );
  }
  deleteProduct(productId: String): Observable<any> {
    return this.http.delete<Product>(`${this.apiURLProducts}/${productId}`);
  }
}
