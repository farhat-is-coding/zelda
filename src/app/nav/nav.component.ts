import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public darkMode: DarkModeService){}

  setThemeMode(t: string){
    this.darkMode.theme = t;
    this.darkMode.actualTheme = t;

  }

  onMouseEnter(t: string) {
    this.darkMode.theme = t;
  }

  onMouseLeave() {
    this.darkMode.theme = this.darkMode.actualTheme;
  }


}
