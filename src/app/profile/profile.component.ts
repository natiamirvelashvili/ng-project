import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user-model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = null;
  userId: string;

  loading:boolean = true
  getUserInfo() {
    // this.userService.getUserById(this.userId).subscribe((data) => {
    //   // console.log(data);
    //   this.user = data;
    //   this.loading = false
    // });
    this.user=this.userService.getUserById(this.userId)
    this.loading = false
  }

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId === null) {
      this.goToMyBooks();
    }

    this.getUserInfo();
  }

  goToMyBooks() {
    this.router.navigateByUrl('');
  }
}
