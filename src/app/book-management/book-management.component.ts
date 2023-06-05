import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book-model';
import { BookService } from '../shared/services/book.service';



@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css'],
})
export class BookManagementComponent implements OnInit {
 bookList: Book[];
 loading:boolean=true;
  loadBooks(){
  //  this.bookService.getBooks().subscribe(d=>{
  //   this.bookList=d
  //   this.loading=false;
  //  })
  this.bookList = this.bookService.getBooks();
  this.loading=false;
  }
  constructor(private bookService:BookService) {
    
  }
  ngOnInit(): void {
    this.loadBooks()
  }
}
