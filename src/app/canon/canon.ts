import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-canon',
  standalone: true,                // ✅ REQUIRED
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './canon.html',
  styleUrls: ['./canon.css'],      // ✅ FIX (plural)
})
export class Canon {

  product: string = '';

  constructor(private router: Router) {}

  next() {
    if (!this.product || this.product.trim().length === 0) return;

    // ✅ Canon page → Canon brand
    this.router.navigate(['/printer/driver'], {
      queryParams: {
        brand: 'canon',
        model: this.product
      }
    });
  }
}