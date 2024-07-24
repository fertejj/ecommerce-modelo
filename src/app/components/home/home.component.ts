import { Component } from '@angular/core';

import { ProductListComponent } from '../product-list/product-list.component';
import { CartModalComponent } from "../cart-modal/cart-modal.component";
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, CartModalComponent, HeroSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent {

}
