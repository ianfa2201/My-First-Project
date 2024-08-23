import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from "./teacher/teacher.component";
import { NavComponent } from './app/components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TeacherComponent, NavComponent],
  templateUrl: './home/home.component.html',
  styleUrl: './../styles.css',
})
export class AppComponent {
  title = 'My-first-project';
}
