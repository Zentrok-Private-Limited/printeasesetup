import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './printer.html',
  styleUrl: './printer.css'
})
export class Printer {

  brandName: any;
  brand: any;

  loadingText = "Searching for USB Ports...";

  detectText = "Gathering information about your devices...";
  progress = 10;
  showUsbCheck = false;
  showDriverCheck = false;
  modelNumber = '';
  brands: any = {
    hp: {
      name: 'HP',
      logo: '/hp.png',
      hero: '/hp1.png',
      bg: 'from-[#0c4a6e] to-[#0284c7]'
    },

    canon: {
      name: 'Canon',
      logo: '/canon.png',
      hero: '/canon1.png',
      bg: 'from-[#b91c1c] to-[#dc2626]'
    },

    epson: {
      name: 'Epson',
      logo: '/epson.png',
      hero: '/epson1.png',
      bg: 'from-[#1e3a8a] to-[#2563eb]'
    },

    brother: {
      name: 'Brother',
      logo: '/brother.png',
      hero: '/brother1.png',
      bg: 'from-[#1e40af] to-[#3b82f6]'
    }

  };

  step = 0;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    const name: any = this.route.snapshot.paramMap.get('name');

    this.brand = this.brands[name];
    this.brandName = this.brand.name;

  }

  startWizard() {
    this.setStep(1);
  }

  next() {
    this.setStep(this.step + 1);
  }

  setStep(value: number) {

    this.step = value;
    this.cd.detectChanges();

    // STEP 3 → spinner → STEP 4
    if (value === 3) {
      setTimeout(() => {
        this.step = 4;
        this.cd.detectChanges();
      }, 2000);
    }

    // STEP 5 → loading sequence
    if (value === 5) {
      this.startLoadingSequence();
    }


    // STEP 7 → detecting sequence
    if (value === 7) {
      this.startDetectSequence();
    }

  }

  async startLoadingSequence() {

    const messages = [
      "Searching for USB Ports...",
      "Checking Printer Spooler...",
      "Checking Printer Drivers...",
      "Checking Installation Files...",
      "Loading Error..."
    ];

    for (let msg of messages) {

      this.loadingText = msg;
      this.cd.detectChanges();

      await new Promise(res => setTimeout(res, 4000));

      if (msg === "Loading Error...") {

        setTimeout(() => {
          this.showUsbCheck = true;
          this.cd.detectChanges();
        }, 3000);

        setTimeout(() => {
          this.showDriverCheck = true;
          this.cd.detectChanges();
        }, 6000);

        setTimeout(() => {
          this.step = 6;
          this.cd.detectChanges();
        }, 9000);

      }

    }

  }

  async startDetectSequence() {

    const steps = [
      { text: "Gathering information about your devices...", progress: 25 },
      { text: "Checking the spooler service...", progress: 40 },
      { text: "Checking printer registry files...", progress: 60 },
      { text: "Checking network printer connectivity...", progress: 80 }
    ];

    for (let item of steps) {

      this.detectText = item.text;
      this.progress = item.progress;

      this.cd.detectChanges();

      await new Promise(res => setTimeout(res, 4000));

    }

    // final error screen
    this.step = 8;
    this.cd.detectChanges();

  }

  close() {
    this.step = 0;
  }

}