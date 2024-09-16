import { Routes } from '@angular/router';
import { HomeComponent } from './../app/home/home.component';
import { NavComponent } from './app/components/nav/nav.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesSeenComponent } from './courses-seen/courses-seen.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { SettingsComponent } from './settings/settings.component';
import { CursosDictadosComponent } from './cursos-dictados/cursos-dictados.component';
import { NotasComponent } from './notas/notas.component';
import { CursosActualesComponent } from './cursos-actuales/cursos-actuales.component';
import { ConsultasAnterioresComponent } from './consultas-anteriores/consultas-anteriores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'nav',
    component: NavComponent,
  },

  {
    path: 'footer',
    component: FooterComponent,
  },

  {
    path: 'student',
    component: StudentComponent,
  },

  {
    path: 'courses',
    component: CoursesComponent,
  },

  {
    path: 'courses-seen',
    component: CoursesSeenComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'notes',
    component: NotesComponent,
  },

  {
    path: 'help',
    component: AyudaComponent,
  },

  {
    path: 'settings',
    component: SettingsComponent,
  },

  { 
    path: 'dictadas', 
    component: CursosDictadosComponent 
  },
  { path: 'notas', component: NotasComponent },
  { path: 'actuales', component: CursosActualesComponent },
  { path: 'prev-query', component: ConsultasAnterioresComponent },
  { path: '', redirectTo: '/dictadas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
