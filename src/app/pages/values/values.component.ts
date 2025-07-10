import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-values',
  imports: [RouterLink],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css',
})
export class ValuesComponent {
  coreValues = [
    {
      id: 1,
      title: 'Integrity',
      icon: 'fas fa-handshake',
      description:
        'We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.',
      details: [
        'Transparent business practices',
        'Ethical decision-making',
        'Honest communication',
        'Accountability at all levels',
      ],
    },
    {
      id: 2,
      title: 'Excellence',
      icon: 'fas fa-star',
      description:
        'We strive for perfection in every project, delivering superior quality that exceeds expectations.',
      details: [
        'Uncompromising quality standards',
        'Continuous improvement',
        'Attention to detail',
        'Industry-leading practices',
      ],
    },
    {
      id: 3,
      title: 'Innovation',
      icon: 'fas fa-lightbulb',
      description:
        'We embrace cutting-edge technology and creative solutions to revolutionize real estate development.',
      details: [
        'Advanced construction techniques',
        'Smart building solutions',
        'Sustainable technologies',
        'Creative design approaches',
      ],
    },
    {
      id: 4,
      title: 'Sustainability',
      icon: 'fas fa-leaf',
      description:
        'We are committed to environmental responsibility, creating developments that respect and protect our planet.',
      details: [
        'Green building certifications',
        'Energy-efficient systems',
        'Sustainable materials',
        'Environmental preservation',
      ],
    },
    {
      id: 5,
      title: 'Community',
      icon: 'fas fa-users',
      description:
        'We build more than structures; we create vibrant communities that bring people together.',
      details: [
        'Social impact initiatives',
        'Community engagement',
        'Local economic development',
        'Cultural preservation',
      ],
    },
    {
      id: 6,
      title: 'Customer Focus',
      icon: 'fas fa-heart',
      description:
        'Our clients are at the center of everything we do, ensuring their dreams become reality.',
      details: [
        'Client-centric approach',
        'Personalized service',
        'Responsive support',
        'Long-term relationships',
      ],
    },
  ];

  principles = [
    {
      number: '01',
      title: 'Quality First',
      description:
        'Every decision is made with quality as the primary consideration, ensuring lasting value.',
    },
    {
      number: '02',
      title: 'Trust & Reliability',
      description:
        'We build trust through consistent delivery and reliable partnerships with our stakeholders.',
    },
    {
      number: '03',
      title: 'Collaborative Spirit',
      description:
        'We believe in the power of teamwork and collaboration to achieve extraordinary results.',
    },
    {
      number: '04',
      title: 'Continuous Learning',
      description:
        'We embrace change and continuously learn to stay ahead in a dynamic industry.',
    },
  ];

  selectedValue: any = null;

  selectValue(value: any) {
    this.selectedValue = this.selectedValue?.id === value.id ? null : value;
  }
}
