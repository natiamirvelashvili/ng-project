import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { PublicDetailsComponent } from './public-details/public-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyBooksComponent } from './my-books/my-books.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    HeaderComponent,
    BookComponent,
    BookManagementComponent,
    PublicDetailsComponent,
    MyBooksComponent,
    ProfileComponent,
    ProfileEditComponent,
    AddEditBookComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader{
  return new TranslateHttpLoader(http)
}
