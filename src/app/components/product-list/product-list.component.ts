import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy{
  producto: Producto[] = [];
  productoSub: Subscription | undefined;
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto()
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

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
