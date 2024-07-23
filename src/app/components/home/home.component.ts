import { Component } from '@angular/core';

import { ProductListComponent } from '../product-list/product-list.component';
import { CartModalComponent } from "../cart-modal/cart-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, CartModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent {

}
