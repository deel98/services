import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss'],
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  formularioArticulo!: FormGroup;
  articulo: Articulo = new Articulo();
  constructor(
    private ArticuloInyectado: ArticulosService,
    private fbGenerador: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formularioArticulo = this.fbGenerador.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });

    this.ArticuloInyectado.leerTodosLosUsuarios().subscribe(
      (usuarioRecibidos) => {
        this.usuarios = usuarioRecibidos;
      }
    );
  }

  agregar() {
    this.articulo = this.formularioArticulo.value as Articulo;
    this.ArticuloInyectado.guardarArticulo(this.articulo).subscribe(
      (articuloRecibido) => {
        console.log(articuloRecibido);
        console.log('Felcidades, has registrado el primer articulo');
        this.formularioArticulo.reset();
      }
    );
  }
}
