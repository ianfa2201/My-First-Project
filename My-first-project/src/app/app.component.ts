import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from "./teacher/teacher.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, TeacherComponent],
  templateUrl: './home/home.component.html',
  styleUrl: './styles/bootstrap.min.css',
})
export class AppComponent {
  title = 'My-first-project';
}
