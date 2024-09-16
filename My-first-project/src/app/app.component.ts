import { Component } from '@angular/core';
import { NavComponent } from './app/components/nav/nav.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home/home.component.html',
  styleUrl: './../styles.css',
})
export class AppComponent {
  title = 'My-first-project';
}
