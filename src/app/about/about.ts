import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
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
