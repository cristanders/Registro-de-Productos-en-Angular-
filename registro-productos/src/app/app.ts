import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoFormularioComponent } from './feature/components/producto-formulario/producto-formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoFormularioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('registro-productos');
}