import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, Observable, switchMap } from 'rxjs';
import { Book } from '../shared/models/book-model';
import { User } from '../shared/models/user-model';
import { BookService } from '../shared/services/book.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {

  searchField = new FormControl('');
  // searchText$ = new BehaviorSubject('');
  searchText$:string;
  // searchResults$: Observable<Book[]>;
  searchResults$: Book[];


  user: User = null;
  userId: string;
  bookList: Book[];

  getUserInfo() {
    // this.userService.getUserById(this.userId).subscribe((data) => {
    //   // console.log(data);
    //   this.user = data;
    // });
    this.user = this.userService.getUserById(this.userId)
  }
  getBooks() {
    // this.bookService.getBooks().subscribe((d) => {
    //   this.bookList = d;
    //   this.loading = false
    // });
    this.bookList = this.bookService.getBooks();
    this.loading=false;
  }

  loading:boolean = true

  constructor(
    private userService: UserService,
    private router: Router,
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId === null) {
      this.router.navigateByUrl('');
    }

    this.getUserInfo();
    this.getBooks();

    

    // this.searchResults$ = this.searchText$.pipe(
    //   debounceTime(500),
    //   switchMap(query => this.bookService.findBookByTitle(query))
    // );
    this.searchResults$ = this.bookService.findBookByTitle(this.searchText$)

    // this.searchField.valueChanges.subscribe(this.searchText$);
  }
}

