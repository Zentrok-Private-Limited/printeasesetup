import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hp',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hp.html',
  styleUrl: './hp.css',
})
export class Hp {
product = '';

next() {
  if (!this.product || this.product.trim().length === 0) return;
  console.log(this.product);
}
}
