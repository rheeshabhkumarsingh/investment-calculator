import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investment-calculator');
}
