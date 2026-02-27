import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PrinterBrand {
  name: string;
  logo: string;
  buttonText: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  printerBrands: PrinterBrand[] = [
    {
      name: 'HP',
      logo: '/hp.png',
      buttonText: 'START NOW',
      link: '/hp',
    },
    {
      name: 'Canon',
      logo: '/canon.png',
      buttonText: 'START NOW',
      link: '/canon',
    },
    {
      name: 'Epson',
      logo: '/epson.png',
      buttonText: 'START NOW',
      link: '/epson-printer-setup',
    },
    {
      name: 'Brother',
      logo: '/brother.png',
      buttonText: 'START NOW',
      link: '/brother-printer-setup',
    },
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
        'For Wi-Fi: confirm both devices are on the same network (band differences can matter).',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 3,
      title: 'Confirm selected device',
      description: [
        'Ensure the correct printer is selected and set as default.',
        'This is especially important if multiple printers are installed.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 4,
      title: 'Clear pending jobs',
      description: [
        'Remove stuck or pending print jobs from the queue.',
        'Restart the print service if needed to unblock the queue.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 5,
      title: 'Run system diagnostics',
      description: [
        'Use the built-in printer or device diagnostics tool.',
        'Check for offline status, port issues, or configuration mismatches.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 6,
      title: 'Update the driver',
      description: [
        'Install the latest compatible printer driver.',
        'Reinstall only after completing earlier steps to avoid repeated work.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
    {
      id: 7,
      title: 'Test and note errors',
      description: [
        'Print a test page to verify the fix.',
        'If an error code appears, note it for further troubleshooting.',
      ],
      subDescription: 'After this step, try printing a test page.'
    },
  ];

  toggleStep(id: number) {
    this.activeStep = this.activeStep === id ? 0 : id;
  }

  brands = ['HP', 'Epson', 'Canon', 'Brother'];
  selectedBrand = 'HP';

  selectBrand(brand: string) {
    this.selectedBrand = brand;
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
      text: 'After an update my driver broke. They guided me through a clean reinstall and everything worked again.',
    },
    {
      name: 'Emily R.',
      role: 'Home User',
      initial: 'E',
      text: 'Patient and easy to follow. I’m not technical, but the directions were super clear.',
    },
    {
      name: 'Priya S.',
      role: 'Student',
      initial: 'P',
      text: 'Error code + paper jam issue fixed quickly. Really helpful and efficient.',
    },
    {
      name: 'Ahmad K.',
      role: 'Retail Store',
      initial: 'A',
      text: 'We print daily. The guidance saved us time and got us back to work fast.',
    },
  ];
}