import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-installer',
  standalone: true,                 // ✅ REQUIRED
  imports: [CommonModule],          // ✅ for *ngIf, pipes
  templateUrl: './installer.html',
  styleUrls: ['./installer.css'],   // ✅ FIX (plural)
})
export class Installer implements OnInit {

  brand: string = '';
  model: string = '';
  driverFound: boolean = false;     // ✅ RESULT FLAG

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.brand = this.route.snapshot.queryParamMap.get('brand') || '';
    this.model = this.route.snapshot.queryParamMap.get('model') || '';

    // ✅ FRONTEND-ONLY FAKE DRIVER CHECK
    const fakeDrivers = ['envy', 'pixma', 'officejet'];

    this.driverFound = fakeDrivers.some(d =>
      this.model.toLowerCase().includes(d)
    );
  }
}