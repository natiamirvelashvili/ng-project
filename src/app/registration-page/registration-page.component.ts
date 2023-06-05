import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { City } from '../shared/models/city-model';
import { CitiesService } from '../shared/services/cities.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      repeatPassword: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    },
    { validators: this.checkMatching }
  );

  checkMatching(formGroup: FormGroup) {
    const { password, repeatPassword } = formGroup.value;
    if (password !== repeatPassword) {
      return { matching: true };
    }
    return null;
  }

  get name() {
    return this.registrationForm.get('name');
  }
  get surname() {
    return this.registrationForm.get('surname');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get repeatPassword() {
    return this.registrationForm.get('repeatPassword');
  }
  get city() {
    return this.registrationForm.get('city');
  }

  sent: boolean = false;
  userAdded: boolean = null;
  cities: City[];

  addUser() {
    this.sent = true;

    let user = {
      id: uuidv4(),
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      name: this.registrationForm.value.name,
      surname: this.registrationForm.value.surname,
      city: this.registrationForm.value.city,
    };
    this.userService.addUser(user).subscribe(
      (data) => {
        console.log('successfully');
        this.userAdded = true;
      },
      (response) => {
        if (response.ok) {
          this.userAdded = true;
          console.log('successfully');
        } else {
          this.userAdded = false;
          console.log('Error adding user');
        }
      }
    );
  }

  loadCities() {
    // this.cityService.getCities().subscribe((d) => {
    //   this.cities = d;
    //   console.log(this.cities);
    // });
    this.cities = this.cityService.getCities()
  }

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private cityService: CitiesService
  ) {}

  ngOnInit(): void {
    let userId: String;
    userId = localStorage.getItem('userId');
    if (userId !== null) {
      this.router.navigateByUrl('mybooks');
    }

    this.loadCities();
  }
  onSubmit() {
    this.addUser();
  }
}
