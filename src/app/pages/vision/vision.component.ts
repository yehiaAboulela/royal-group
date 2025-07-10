import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vision',
  imports: [RouterLink],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css',
})
export class VisionComponent {
  visionPoints = [
    {
      icon: '🎯',
      title: 'Strategic Excellence',
      description:
        "Leading Egypt's development through innovative real estate solutions and strategic partnerships that create lasting value for communities.",
    },
    {
      icon: '🏗️',
      title: 'Sustainable Development',
      description:
        "Building tomorrow's Egypt with environmentally conscious projects that harmonize modern living with natural preservation.",
    },
    {
      icon: '🌟',
      title: 'Quality Innovation',
      description:
        'Setting new standards in construction and design while maintaining the highest levels of craftsmanship and attention to detail.',
    },
    {
      icon: '🤝',
      title: 'Community Impact',
      description:
        "Creating spaces that bring people together, foster growth, and contribute to Egypt's economic and social development.",
    },
  ];

  milestones = [
    {
      year: '2030',
      title: 'Market Leadership',
      description:
        "Become Egypt's most trusted name in premium real estate development",
    },
    {
      year: '2035',
      title: 'Regional Expansion',
      description:
        'Expand operations across the Middle East and North Africa region',
    },
    {
      year: '2040',
      title: 'Global Recognition',
      description:
        'Achieve international recognition for innovative and sustainable development',
    },
  ];
}
