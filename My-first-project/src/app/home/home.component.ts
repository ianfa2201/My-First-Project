import { Component } from '@angular/core';
import { StudentComponent } from "./../student/student.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StudentComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './../styles/bootstrap.min.css'
})
export class HomeComponent {
  
}
