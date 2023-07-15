import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
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

  getH1Classes(): string {
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
}
