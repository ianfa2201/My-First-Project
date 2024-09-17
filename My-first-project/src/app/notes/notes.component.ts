import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  notas: any[] = [];

  constructor(private notasService: NotesService) {}

  ngOnInit(): void{
    this.notasService.getData().subscribe((data) => {
      this.notas = data.sort((a: any, b: any) => {
        if (a.estudiante < b.estudiante) {
          return -1;
        } else if (a.estudiante > b.estudiante) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }
}
