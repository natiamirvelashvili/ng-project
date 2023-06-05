import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/models/book-model';
import { BookService } from '../shared/services/book.service';
import {MatDialog} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() myBook: boolean;


  updateBook(status: string) {
    this.book.status = status;
    this.bookService.updateBook(this.book).subscribe();
  }

  constructor(private bookService: BookService, private matDialog:MatDialog) {}

  ngOnInit(): void {

  }

  openPopup(){
    console.log("popoooop")
    const popup =this.matDialog.open(PopupComponent,{width:'300px', height:'130px'})
    popup.afterClosed().subscribe(m=>{
      if(m==="confirm"){
        this.updateBook('disabled')
      }
    })
  }

  enableBook() {
    this.updateBook('enabled');
  }
  disableBook() {
    this.openPopup()
  }
}
