import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';  // Importamos las rutas
import { CursosDictadosComponent } from './cursos-dictados/cursos-dictados.component';
import { NotasComponent } from './notas/notas.component';
import { CursosActualesComponent } from './cursos-actuales/cursos-actuales.component';
import { ConsultasAnterioresComponent } from './consultas-anteriores/consultas-anteriores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { NavComponent } from './app/components/nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    CursosDictadosComponent,
    NotasComponent,
    CursosActualesComponent,
    ConsultasAnterioresComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Importamos el RouterModule y le pasamos las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap del AppComponent
})
export class AppModule { }