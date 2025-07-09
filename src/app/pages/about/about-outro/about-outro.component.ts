import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  info: string;
}
@Component({
  selector: 'app-about-outro',
  imports: [],
  templateUrl: './about-outro.component.html',
  styleUrl: './about-outro.component.css',
})
export class AboutOutroComponent {}
