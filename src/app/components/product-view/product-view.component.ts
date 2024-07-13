import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit, OnDestroy {

  producto: Producto[] = [];
  productoSub: Subscription | undefined;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productoSub = this.productoService.getProducto()
    .subscribe({
      next: (productos: Producto[]) => {
        this.producto = productos
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

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe()
  }

}
