import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  constructor(public darkMode: DarkModeService){}

}
