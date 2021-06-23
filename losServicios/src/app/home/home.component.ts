import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(
    public UsuarioInyectado: UsuarioService,
    private ArticuloInyectado: ArticulosService,
    private Ruta: Router
  ) {}

  ngOnInit() {
    this.ArticuloInyectado.leerNoticias().subscribe((articulos) => {
      this.articulos = articulos;
    });
  }

  irAlDetalle(articulo: Articulo) {
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }
}
