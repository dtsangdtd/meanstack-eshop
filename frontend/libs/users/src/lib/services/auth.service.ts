import { User } from '@bluebits/users';
import { Injectable } from '@angular/core';
import { environment } from '@evn/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURLUsers = environment.apiURL + 'users';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/login`, {
      email: email,
      password: password,
    });
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
