import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  theme: string = 'special';
  actualTheme: string = 'special';
  
  constructor() { }
}
