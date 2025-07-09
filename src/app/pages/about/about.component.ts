import { Component } from '@angular/core';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { AboutOurValuesComponent } from './about-our-values/about-our-values.component';
import { AboutOutroComponent } from './about-outro/about-outro.component';

@Component({
  selector: 'app-about',
  imports: [AboutIntroComponent, AboutOurValuesComponent, AboutOutroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
