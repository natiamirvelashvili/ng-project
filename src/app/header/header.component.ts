import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userId: string = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use('en');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  userLogged() {
    this.userId = localStorage.getItem('userId');
    if (this.userId === null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('userId');
  }
}
