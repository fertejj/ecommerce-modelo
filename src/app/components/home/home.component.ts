import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  producto: any;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProducto()
  }
}
