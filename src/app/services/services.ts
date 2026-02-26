import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ServiceCard {
  title: string;
  description: string;
  iconClass: string;   // Font Awesome class
  link: string;
}
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
serviceCards: ServiceCard[] = [
    {
      title: 'Web & App Development',
      description:
        'High-performance websites and applications built to convert and scale seamlessly.',
      iconClass: 'fa-solid fa-code',
      link: '#',
    },
    {
      title: 'UI / UX Design',
      description:
        'Clean, intuitive user experiences designed to guide users from interest to action.',
      iconClass: 'fa-solid fa-pen-nib',
      link: '#',
    },
    {
      title: 'Digital Marketing',
      description:
        'Data-driven campaigns focused on traffic, engagement, and measurable growth.',
      iconClass: 'fa-solid fa-bullhorn',
      link: '#',
    },
    {
      title: 'Business Analytics',
      description:
        'Data-driven insights to optimize decisions, performance, and conversions.',
      iconClass: 'fa-solid fa-chart-line',
      link: '#',
    },
    {
      title: 'Security & Compliance',
      description:
        'Robust protection and compliance solutions aligned with global standards.',
      iconClass: 'fa-solid fa-shield-halved',
      link: '#',
    },
    {
      title: 'Dedicated Support',
      description:
        'Reliable long-term partnership with continuous optimization and support.',
      iconClass: 'fa-solid fa-users',
      link: '#',
    },
  ];
}
