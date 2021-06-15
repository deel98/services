import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(public UsuarioInyectado: UsuarioService) {}

  ngOnInit(): void {
    this.articulos.push(
      {
        titulo: 'Curso Web',
        descripcion:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime corrupti officia, quos adipisci cumque enim ab dolores aut velit sequi deserunt explicabo ipsum consequatur perspiciatis rerum recusandae officiis voluptate? Officiis.',
        fecha: new Date(),
        usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`,
      },
      {
        titulo: 'Curso Front',
        descripcion:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime corrupti officia, quos adipisci cumque enim ab dolores aut velit sequi deserunt explicabo ipsum consequatur perspiciatis rerum recusandae officiis voluptate? Officiis.',
        fecha: new Date('04/25/2019'),
        usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`,
      },
      {
        titulo: 'Curso Back',
        descripcion:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime corrupti officia, quos adipisci cumque enim ab dolores aut velit sequi deserunt explicabo ipsum consequatur perspiciatis rerum recusandae officiis voluptate? Officiis.',
        fecha: new Date('05/10/2019'),
        usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`,
      }
    );
  }
}
