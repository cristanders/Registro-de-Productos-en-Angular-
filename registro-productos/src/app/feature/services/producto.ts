import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [];

  constructor() { }

  registrarProducto(producto: Producto): Observable<boolean> {
    this.productos.push(producto);
    console.log('Lista actual de productos:', this.productos);
    return of(true);
  }

  getProductos(): Producto[] {
    return this.productos;
  }
}