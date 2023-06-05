import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from '../shared/models/city-model';
import { User } from '../shared/models/user-model';
import { CitiesService } from '../shared/services/cities.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {

  userId: string;
  cities: City[];

  editForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.editForm.get('name');
  }
  get surname() {
    return this.editForm.get('surname');
  }
  get password() {
    return this.editForm.get('password');
  }
  get email() {
    return this.editForm.get('email');
  }
  get city() {
    return this.editForm.get('city');
  }

  getUserInfo() {
    // this.userService.getUserById(this.userId).subscribe((user) => {
    //   // fill out fields
    //   this.editForm.patchValue({
    //     email: user.email,
    //     name: user.name,
    //     surname: user.surname,
    //     city: user.city
    //   });
    // });
    const user:User = this.userService.getUserById(this.userId)
    this.editForm.patchValue({
      email: user.email,
      name: user.name,
      surname: user.surname,
      city: user.city
    });
    
  }

  updateUser() {
    let user = {
      id: this.userId,
      email: this.editForm.value.email,
      password: this.editForm.value.password,
      name: this.editForm.value.name,
      surname: this.editForm.value.surname,
      city: this.editForm.value.city,
    };
    this.userService.updateUser(user).subscribe((data) => {
      this.router.navigateByUrl('/profile');
    });
  }

  loadCities() {
    // this.cityService.getCities().subscribe((d) => {
    //   this.cities = d;
    //   console.log(this.cities);
    // });
    this.cities = this.cityService.getCities()
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private cityService: CitiesService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId === null) {
      this.router.navigateByUrl('');
    }

    this.loadCities();
    this.getUserInfo();
  }

  onSubmit() {
    this.updateUser();
  }
}
