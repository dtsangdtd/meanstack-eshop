import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@evn/environment';
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiURLProducts = environment.apiURL + 'products';
  constructor(private http: HttpClient) {}
  getProducts(categoryFilter?: string[]): Observable<Product[]> {
    let params = new HttpParams();
    if (categoryFilter) {
      params = params.append('categories', categoryFilter.join(','));
    }
    return this.http.get<Product[]>(this.apiURLProducts, { params: params });
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
  getCountProduct(): Observable<any> {
    return this.http
      .get<any>(`${this.apiURLProducts}` + '/get/count')
      .pipe(map((objectValues: any) => objectValues.productCount));
  }
  getProductFeatured(count: number): Observable<any> {
    return this.http.get<any>(`${this.apiURLProducts}/get/featured/${count}`);
  }
}
