import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { db } from '../database';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/users';

  public addUser(user: User) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  // public login(user: { email: string; password: string }) {
  //   return this.http.post<any>('http://localhost:3000/login', user);
  // }
  public login(user: { email: string; password: string }) {
    return true;
  }

  // public getUserById(id: string) {
  //   return this.http.get<User>(`${'http://localhost:3000/users'}/${id}`);
  // }
  public getUserById(id: string) {
    return db.users[id]
  }

  public updateUser(user: User) {
    return this.http.put<User>(
      `${'http://localhost:3000/users'}/${user.id}`,
      user
    );
  }

  constructor(private http: HttpClient) {}
}
