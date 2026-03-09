import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  printerBrands = [
    {
      name: 'hp',
      title: 'HP',
      logo: '/hp.png',
      heroImage: '/hp-printer.png'
    },
    {
      name: 'canon',
      title: 'Canon',
      logo: '/canon.png',
      heroImage: '/canon-printer.png'
    },
    {
      name: 'epson',
      title: 'Epson',
      logo: '/epson.png',
      heroImage: '/epson-printer.png'
    },
    {
      name: 'brother',
      title: 'Brother',
      logo: '/brother.png',
      heroImage: '/brother-printer.png'
    }
  ];

  activeStep = 1;

  steps = [
    {
      id: 1,
      title: 'Restart the printer',
      description: [
        'Power the printer off, unplug it for 20–30 seconds, then turn it back on.',
        'This resets internal states and clears temporary errors.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 2,
      title: 'Verify connection',
      description: [
        'For USB: reconnect the cable or try another port.',
        'For Wi-Fi: confirm both devices are on the same network.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 3,
      title: 'Confirm selected device',
      description: [
        'Ensure the correct printer is selected and set as default.',
        'This is important if multiple printers are installed.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 4,
      title: 'Clear pending jobs',
      description: [
        'Remove stuck or pending print jobs from the queue.',
        'Restart the print service if needed.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 5,
      title: 'Run system diagnostics',
      description: [
        'Use the built-in printer diagnostics tool.',
        'Check for offline status or port issues.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 6,
      title: 'Update the driver',
      description: [
        'Install the latest compatible printer driver.',
        'Reinstall only after completing earlier steps.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 7,
      title: 'Test and note errors',
      description: [
        'Print a test page to verify the fix.',
        'If an error code appears, note it.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
  ];

  toggleStep(id: number) {
    this.activeStep = this.activeStep === id ? 0 : id;
  }

  // BRAND SELECT
  brands = ['HP', 'Canon', 'Epson', 'Brother'];
  selectedBrand = 'HP';

  selectBrand(brand: string) {
    this.selectedBrand = brand;
  }

  // POPUP CONTROL
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  testimonials = [
    {
      name: 'David M.',
      role: 'Office Admin',
      initial: 'D',
      text: 'I was stuck on “Offline” for hours. The steps were simple and it worked immediately.',
    },
    {
      name: 'Sarah J.',
      role: 'Operations',
      initial: 'S',
      text: 'Very clear instructions. No confusion — just follow the steps and you’re done.',
    },
    {
      name: 'Michael C.',
      role: 'Small Business',
      initial: 'M',
      text: 'After an update my driver broke. They guided me through reinstall and everything worked.',
    },
    {
      name: 'Emily R.',
      role: 'Home User',
      initial: 'E',
      text: 'Patient and easy to follow. Directions were super clear.',
    },
    {
      name: 'Priya S.',
      role: 'Student',
      initial: 'P',
      text: 'Error code + paper jam issue fixed quickly.',
    },
    {
      name: 'Ahmad K.',
      role: 'Retail Store',
      initial: 'A',
      text: 'The guidance saved us time and got us back to work fast.',
    },
  ];

}