import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book-model';
import { db } from '../database';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:3000/books';

  // public getBooks(): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.url);
  // }
  public getBooks(): Book[] {
    return db.books
  }
  // public getBook(id: string): Observable<Book> {
  //   return this.http.get<Book>(`${this.url}/${id}`);
  // }

  public getBook(id: string): Book {
    return db.books[id]
  }
  public updateBook(book: Book) {
    return this.http.put<Book>(
      `${'http://localhost:3000/books'}/${book.id}`,
      book
    );
  }
  public addBook(book: Book) {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }

  // public findBookByTitle(title: string) {
  //   return this.http.get<Book[]>('http://localhost:3000/books', {
  //     params: new HttpParams().set('title_like', title)
  //   });
  // }
  public findBookByTitle(title: string) {
    return db.books
  }

  constructor(private http: HttpClient) {}
}
