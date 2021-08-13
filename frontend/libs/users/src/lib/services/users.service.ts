import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@evn/environment';
import { User } from '../models/users';
import * as countriesLib from 'i18n-iso-countries';
import { map } from 'rxjs/operators';
declare const require;
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiURLUsers = environment.apiURL + 'users';
  constructor(private http: HttpClient) {
    countriesLib.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURLUsers);
  }
  createUser(users: User): Observable<User> {
    return this.http.post<User>(this.apiURLUsers, users);
  }

  getUser(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiURLUsers}/${userId}`);
  }
  updateUser(userId: string, users: User): Observable<any> {
    return this.http.put<User>(`${this.apiURLUsers}/${userId}`, users);
  }
  deleteUser(userId: string): Observable<any> {
    return this.http.delete<User>(`${this.apiURLUsers}/${userId}`);
  }
  getCountries(): { id: string; name: string }[] {
    return Object.entries(
      countriesLib.getNames('en', { select: 'official' })
    ).map((entry) => {
      return {
        id: entry[0],
        name: entry[1],
      };
    });
  }

  getCountry(countryKey: string): string {
    return countriesLib.getName(countryKey, 'en');
  }
  getCountUser(): Observable<any> {
    return this.http
      .get<any>(`${this.apiURLUsers}` + '/get/count')
      .pipe(map((objectValues: any) => objectValues.userCount));
  }
}
