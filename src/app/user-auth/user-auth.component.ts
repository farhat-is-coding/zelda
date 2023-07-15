import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  constructor(public darkMode: DarkModeService){}

  isLogin: boolean = true;

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  getMainDivClasses(): string {
    if (this.darkMode.theme === 'special') {
      return 'bg-screen text-white';
    } else if (this.darkMode.theme === 'white') {
      return 'bg-white text-gray-700';
    } else if (this.darkMode.theme === 'dark') {
      return 'bg-cyan-900 text-white';
    } else {
      return '';
    }
  }

  getContentDivClasses(): string {
    if (this.darkMode.theme === 'special') {
      return 'bg-color text-white';
    } else if (this.darkMode.theme === 'white') {
      return 'bg-zinc-200 text-gray-700';
    } else if (this.darkMode.theme === 'dark') {
      return 'bg-cyan-950 text-white';
    } else {
      return '';
    }
  }

  getFormClasses(): string {
    if (this.darkMode.theme === 'special') {
      return 'peer-focus:text-blue-100 text-gray-200 border-gray-300 focus:border-blue-100 peer';
    } else if (this.darkMode.theme === 'white') {
      return 'peer-focus:text-gray-700 text-gray-700 border-gray-700 focus:border-gray-700 peer dark:border-gray-700';
    } else if (this.darkMode.theme === 'dark') {
      return 'peer-focus:text-blue-100 text-gray-200 border-gray-300 focus:border-blue-100 peer';
    } else {
      return '';
    }
  }

  getEmailInputClasses(): string {
    if (this.darkMode.theme === 'white') {
      return 'peer-focus:text-gray-700 text-gray-700 border-gray-700 focus:border-gray-700 peer';
    } else {
      return '';
    }
  }

  getPasswordInputClasses(): string {
    if (this.darkMode.theme === 'white') {
      return 'peer-focus:text-gray-700 text-gray-700 border-gray-700 focus:border-gray-700 peer';
    } else {
      return '';
    }
  }
}
