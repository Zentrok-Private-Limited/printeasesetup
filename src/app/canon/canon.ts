import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-canon',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './canon.html',
  styleUrl: './canon.css',
})
export class Canon {
product = '';

next() {
  if (!this.product || this.product.trim().length === 0) return;
  console.log(this.product);
}
}
