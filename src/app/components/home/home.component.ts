import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  producto: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProducto()
    .subscribe({
      next: (producto: Producto[]) => {
        this.producto = producto
        console.log(this.producto)
      },
      error: (err: any) => {
        console.error('GET request error:', err);
      },
      complete: () => {
        console.log('GET request completed');
      },	
    })
  }
}
