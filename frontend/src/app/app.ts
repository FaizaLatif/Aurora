import { Component } from '@angular/core';
import { Shell } from './shell/shell';
import { HeaderComponent } from './header-component/header-component';
@Component({
  imports: [Shell, HeaderComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
