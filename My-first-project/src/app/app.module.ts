import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';  // Importamos las rutas
import { CursosDictadosComponent } from './cursos-dictados/cursos-dictados.component';
import { CursosActualesComponent } from './cursos-actuales/cursos-actuales.component';
import { ConsultasAnterioresComponent } from './consultas-anteriores/consultas-anteriores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { NavComponent } from './app/components/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { NotesComponent } from './notes/notes.component';
import { CoursesSeenComponent } from './courses-seen/courses-seen.component';
import { NotesService } from '../services/notes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CursosDictadosComponent,
    CursosActualesComponent,
    ConsultasAnterioresComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    StudentComponent,
    CoursesComponent,
    NotesComponent,
    CoursesSeenComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]  // Bootstrap del AppComponent
})
export class AppModule { }