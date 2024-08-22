import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './home/home.component.html',
  styleUrl: './home/home.component.css',
})
export class AppComponent {
  title = 'My-first-project';
}
