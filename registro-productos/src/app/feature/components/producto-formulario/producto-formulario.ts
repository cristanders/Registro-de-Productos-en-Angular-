import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductoService, Producto } from '../../services/producto';

@Component({
  selector: 'app-producto-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-formulario.html',
  styleUrl: './producto-formulario.css',
})
export class ProductoFormularioComponent {
  productoForm: FormGroup;
  mensajeExito: string = '';
  listaProductos: Producto[] = [];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.maxLength(350)]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      categoria: ['', [Validators.required]],
      stock: [null, [Validators.required, Validators.min(0)]]
    });

    // Cargamos los productos
    this.actualizarLista();
  }

  onSubmit() {
    if (this.productoForm.valid) {
      const nuevoProducto: Producto = this.productoForm.value;
      
      this.productoService.registrarProducto(nuevoProducto).subscribe(response => {
        if (response) {
          this.mensajeExito = 'Producto registrado y enviado al servicio';
          this.productoForm.reset();
          // actualizar laa tabla
          this.actualizarLista(); 
        }
      });
    } else {
      this.productoForm.markAllAsTouched();
    }
  }

  actualizarLista() {
    this.listaProductos = this.productoService.getProductos();
  }
}