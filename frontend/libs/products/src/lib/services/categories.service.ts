import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@evn/environment';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiURLCategories = environment.apiURL + 'categories';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURLCategories);
  }
  createCategory(category: Category): Observable<any> {
    return this.http.post<any>(this.apiURLCategories, category);
  }
  deleteCategory(categoryId: String): Observable<any> {
    return this.http.delete<Category>(`${this.apiURLCategories}/${categoryId}`);
  }
  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  }
  updateCategory(categoryId: string, category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.apiURLCategories}/${categoryId}`,
      category
    );
  }
}
