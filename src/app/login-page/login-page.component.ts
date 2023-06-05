import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  sent: boolean = false;
  loggedIn: boolean = null;

  login() {
    this.sent = true;
    let user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    // this.userService.login(user).subscribe(
    //   (data) => {
    //     console.log('successfully loged in');
    //     this.loggedIn = true;
    //     console.log(data.user.id);
    //     localStorage.setItem('userId', data.user.id);
    //     this.goToMyBooks();
    //   },
    //   (response) => {
    //     if (!response.ok) {
    //       this.loggedIn = false;
    //       console.log('Error login');
    //     }
    //   }
    // );
    const status:Boolean = this.userService.login(user)
    if(status==true){
      console.log('successfully loged in');
        this.loggedIn = true;
        localStorage.setItem('userId', "0");
        this.goToMyBooks();
    }else{
      this.loggedIn = false;
      console.log('Error login');
    }
  }

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    let userId: String;
    userId = localStorage.getItem('userId');
    if (userId !== null) {
      this.goToMyBooks();
    }
  }

  onSubmit() {
    this.login();
  }

  goToMyBooks() {
    this.router.navigateByUrl('mybooks');
  }
}
