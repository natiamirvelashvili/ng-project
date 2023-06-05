import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/models/book-model';
import { User } from '../shared/models/user-model';
import { BookService } from '../shared/services/book.service';
import { UserService } from '../shared/services/user.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css'],
})
export class AddEditBookComponent implements OnInit {
  addEditForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.addEditForm.get('title');
  }
  get author() {
    return this.addEditForm.get('author');
  }
  get type() {
    return this.addEditForm.get('type');
  }
  get description() {
    return this.addEditForm.get('description');
  }

  userId: string;
  bookId:string;
  user: User;
  book: Book;
  editing:boolean

  getUserInfo() {
    // this.userService.getUserById(this.userId).subscribe((data) => {
    //   // console.log(data);
    //   this.user = data;
    // });
    this.user = this.userService.getUserById(this.userId)
  }

  getBookInfo(){
    // this.bookService.getBook(this.bookId).subscribe((data) => {
    //   // fill out fields
    //   this.addEditForm.patchValue({
    //     title: data.title,
    //     author: data.author,
    //     type: data.type,
    //     price: data.price,
    //     imageUrl: data.imageUrl,
    //     description: data.description
    //   });
    // });
    
    // fill out fields
    const data:Book = this.bookService.getBook(this.bookId) 
    this.addEditForm.patchValue({
      title: data.title,
      author: data.author,
      type: data.type,
      price: data.price,
      imageUrl: data.imageUrl,
      description: data.description
    });
    
  }

  updateBook(bookId: string) {
    let editedBook = {
      id: bookId,
      title: this.addEditForm.value.title,
      author: this.addEditForm.value.author,
      type: this.addEditForm.value.type,
      price: this.addEditForm.value.price,
      description: this.addEditForm.value.description,
      address: this.user.city,
      email: this.user.email,
      imageUrl:this.addEditForm.value.imageUrl,
      status: 'enabled',
    };
    this.bookService.updateBook(editedBook).subscribe();
    this.router.navigateByUrl('/mybooks');
  }
  addBook() {
    let newBook = {
      id: uuidv4(),
      title: this.addEditForm.value.title,
      author: this.addEditForm.value.author,
      type: this.addEditForm.value.type,
      price: this.addEditForm.value.price,
      description: this.addEditForm.value.description,
      address: this.user.city,
      email: this.user.email,
      imageUrl:this.addEditForm.value.imageUrl,
      status: 'enabled',
    };
    this.bookService.addBook(newBook).subscribe();
    this.router.navigateByUrl('/mybooks');
  }

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId === null) {
      this.router.navigateByUrl('/');
    }

    this.getUserInfo();
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id')
      if (this.bookId === null) {
        this.editing = false
      } else {
        this.editing=  true
        this.getBookInfo();
      }
    });
    
  }

  onSubmit() {
    if (!this.editing) {
      this.addBook();
    } else {
      this.updateBook(this.bookId);
    }
  }
}
