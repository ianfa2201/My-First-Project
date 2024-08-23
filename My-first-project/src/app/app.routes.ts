import { Routes } from '@angular/router';
import { HomeComponent } from "./../app/home/home.component";
import { NavComponent } from "./app/components/nav/nav.component";
import { FooterComponent } from './app/components/footer/footer.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesSeenComponent } from './courses-seen/courses-seen.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [
    {
        path: 'home',
        component:HomeComponent

    },

    {
        path: 'nav',
        component:NavComponent
    },

    {
        path: 'footer',
        component:FooterComponent
    },

    {
        path: 'student',
        component:StudentComponent
    },

    {
        path: 'courses',
        component:CoursesComponent
    },

    {
        path: 'courses-seen',
        component:CoursesSeenComponent
    },

    {
        path: 'login',
        component:LoginComponent
    },

    {
        path: 'notes',
        component:NotesComponent
    }

];
