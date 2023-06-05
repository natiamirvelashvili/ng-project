import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicDetailsComponent } from './public-details/public-details.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'details/:id', component: PublicDetailsComponent },
  { path: 'mybooks', component: MyBooksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-edit', component: ProfileEditComponent },
  { path: 'mybooks/edit/:id', component: AddEditBookComponent },
  { path: 'mybooks/add', component: AddEditBookComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
