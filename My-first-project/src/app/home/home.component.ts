import { Component } from '@angular/core';
import { StudentComponent } from "./../student/student.component";
import { RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { NavComponent } from '../app/components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StudentComponent, RouterLink, RouterLinkActive, RouterOutlet, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './../../styles.css'
})
export class HomeComponent {
  
}
