import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-epson',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './epson.html',
  styleUrl: './epson.css',
})
export class Epson {
product: string = '';

  constructor(private router: Router) {}

  next() {
    if (!this.product || this.product.trim().length === 0) return;

    // ✅ Canon page → Canon brand
    this.router.navigate(['/printer/driver'], {
      queryParams: {
        brand: 'epson',
        model: this.product
      }
    });
  }
}
