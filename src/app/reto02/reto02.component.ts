import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto02',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto02.component.html',
  styleUrl: './reto02.component.css'
})
export class Reto02Component {
  descripcion: string = '';
  codigo: string = '';
  precioCosto: number = 0;
  precioVenta: number  = 0;
  stockIdeal: number = 0;
  mensaje: string = '';
  ingresarProducto() {
    if (this.precioCosto > 0 && this.precioVenta > 0 && this.stockIdeal > 0) {
      this.mensaje = 'Producto dado de alta';
    } else {
      this.mensaje = 'Los precios y el stock deben ser mayores que cero';
    }
  }
}
