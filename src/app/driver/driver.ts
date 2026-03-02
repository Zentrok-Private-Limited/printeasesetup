import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver',
  standalone: true,                 // ✅ REQUIRED
  imports: [CommonModule],
  templateUrl: './driver.html',
  styleUrls: ['./driver.css'],      // ✅ FIX (plural)
})
export class Driver implements OnInit {

  brand: string = 'hp';
  model: string = '';

  bgClass: string = '';
  spinnerClass: string = '';
  textClass: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const rawBrand = this.route.snapshot.queryParamMap.get('brand') || 'hp';
    this.brand = rawBrand.toLowerCase().trim();

    // 🔍 DEBUG LINE — YAHI ADD KARO
    console.log('Driver brand:', this.brand);

    this.model = this.route.snapshot.queryParamMap.get('model') || '';

    const brandTheme: any = {
      hp: {
        bg: 'from-blue-700 to-blue-900',
        spinner: 'border-blue-300 border-t-white',
        text: 'text-blue-100',
      },
      canon: {
        bg: 'from-red-700 to-red-900',
        spinner: 'border-red-300 border-t-white',
        text: 'text-red-100',
      },
      epson: {
        bg: 'from-[#003399] to-[#002266]',
        spinner: 'border-blue-300 border-t-white',
        text: 'text-blue-100',
      },
      brother: {
        bg: 'from-[#005EB8] to-[#004A8F]',
        spinner: 'border-blue-300 border-t-white',
        text: 'text-blue-100',
      },
    };

    const theme = brandTheme[this.brand] || brandTheme.hp;
    this.bgClass = theme.bg;
    this.spinnerClass = theme.spinner;
    this.textClass = theme.text;

    setTimeout(() => {
      this.router.navigate(['/printer/install'], {
        queryParams: { brand: this.brand, model: this.model },
      });
    }, 3000);
  }
}