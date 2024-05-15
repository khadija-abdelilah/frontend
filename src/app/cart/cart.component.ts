import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Common Angular directives

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Import CommonModule if using common directives in your template
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // Corrected property name from 'styleUrl' to 'styleUrls'
})
export class CartComponent {
  // Component logic here
}
