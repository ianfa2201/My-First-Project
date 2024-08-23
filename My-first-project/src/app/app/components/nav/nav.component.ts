import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './../../../styles/bootstrap.min.nav.css' 
})
export class NavComponent {

}
