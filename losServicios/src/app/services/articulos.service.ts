import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  articulo: Articulo = new Articulo();
  constructor(private http: HttpClient) {}

  leerNoticias(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
