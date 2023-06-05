import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book-model';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-public-details',
  templateUrl: './public-details.component.html',
  styleUrls: ['./public-details.component.css'],
})
export class PublicDetailsComponent implements OnInit {
  id: string;
  book: Book = null;
  getBook() {
    // this.bookService.getBook(this.id).subscribe((d) => {
    //   this.book = d;
    //   this.loading = false
    // });
    this.book = this.bookService.getBook(this.id)
    this.loading = false
  }
  loading:boolean = true;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getBook();
  }
}
