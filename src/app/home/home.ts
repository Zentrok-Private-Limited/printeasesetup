import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  title: string;
  description: string;
  iconClass: string;   // Font Awesome class
  link: string;
}
interface WorkStep {
  step: number;
  title: string;
  description: string;
  iconClass: string; // Font Awesome class
}
interface WhyChooseCard {
  title: string;
  description: string;
  iconClass: string; // Font Awesome icon
}

interface StrategyCard {
  title: string;
  description: string;
  iconClass: string; // Font Awesome icon
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
  workSteps: WorkStep[] = [
    {
      step: 1,
      title: 'Discovery & Insights',
      description:
        'We deeply understand your business, audience, and goals to uncover opportunities that drive meaningful growth.',
      iconClass: 'fa-solid fa-chart-pie',
    },
    {
      step: 2,
      title: 'Strategy & Roadmap',
      description:
        'A clear, data-backed plan is created — outlining priorities, milestones, and execution paths.',
      iconClass: 'fa-solid fa-lightbulb',
    },
    {
      step: 3,
      title: 'Design & Messaging',
      description:
        'We craft visuals, UX, and messaging that connect with users and guide them toward action.',
      iconClass: 'fa-solid fa-pen-nib',
    },
    {
      step: 4,
      title: 'Build & Launch',
      description:
        'Your solution is built, tested, optimized, and launched with speed, security, and performance in mind.',
      iconClass: 'fa-solid fa-rocket',
    },
    {
      step: 5,
      title: 'Optimize & Scale',
      description:
        'Using real-time analytics, we refine strategies continuously to scale what works and eliminate waste.',
      iconClass: 'fa-solid fa-chart-line',
    },
  ];
  // ✅ Existing cards (UNCHANGED)
  whyChooseCards: WhyChooseCard[] = [
  {
    title: 'Data-Driven Results',
    description:
      'Our strategies are backed by analytics and measurable KPIs, ensuring you see real business growth.',
    iconClass: 'fa-solid fa-chart-line',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We prioritize your vision and goals, working collaboratively to achieve maximum impact.',
    iconClass: 'fa-solid fa-users',
  },
  {
    title: 'Agile & Scalable',
    description:
      'Fast deployment with flexible strategies that evolve as your business grows.',
    iconClass: 'fa-solid fa-bolt',
  },
  {
    title: 'Secure & Compliant',
    description:
      'We implement robust security and compliance measures to protect your data and brand.',
    iconClass: 'fa-solid fa-shield-halved',
  },
  {
    title: '24/7 Dedicated Support',
    description:
      'Our team is always available for guidance, feedback, or emergency support whenever you need it.',
    iconClass: 'fa-solid fa-headset',
  },
];

  // ✅ NEW: Strategy cards (8 cards)
  strategyCards: StrategyCard[] = [
  {
    title: 'Insight-Driven Ideation',
    description:
      'We transform market insights into actionable strategies that maximize ROI and minimize risk.',
    iconClass: 'fa-solid fa-lightbulb',
  },
  {
    title: 'Modular Campaign Design',
    description:
      'Reusable, scalable frameworks that evolve with your brand, audience, and platform requirements.',
    iconClass: 'fa-solid fa-puzzle-piece',
  },
  {
    title: 'Rapid Execution',
    description:
      'From concept to launch, our agile workflows ensure campaigns go live faster and more efficiently.',
    iconClass: 'fa-solid fa-bolt',
  },
  {
    title: 'Data-Led Optimization',
    description:
      'Continuous performance tracking and iterative improvements ensure every initiative outperforms.',
    iconClass: 'fa-solid fa-chart-column',
  },
  {
    title: 'Personalized Engagement',
    description:
      'Behavioral targeting and segmentation create hyper-relevant experiences for each audience segment.',
    iconClass: 'fa-solid fa-bullseye',
  },
  {
    title: 'Full-Funnel Alignment',
    description:
      'Every touchpoint is harmonized to drive conversions and retention from awareness to advocacy.',
    iconClass: 'fa-solid fa-diagram-project',
  },
  {
    title: 'Performance Acceleration',
    description:
      'Advanced automation and testing methods allow campaigns to scale with speed and precision.',
    iconClass: 'fa-solid fa-rocket',
  },
  {
    title: 'Compliance & Security',
    description:
      'All strategies are fully GDPR, CCPA, and HIPAA compliant, ensuring safe and ethical growth.',
    iconClass: 'fa-solid fa-shield-halved',
  },
];
}