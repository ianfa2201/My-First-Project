import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private jsonUrl = 'assets/registros_notas.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.jsonUrl);
  }

}
