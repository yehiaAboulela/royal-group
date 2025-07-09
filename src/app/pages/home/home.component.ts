import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMessionComponent } from './home-mession/home-mession.component';
import { HomeFactsComponent } from './home-facts/home-facts.component';
import { HomePartnersComponent } from './home-partners/home-partners.component';
import { HomeOutroComponent } from './home-outro/home-outro.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeHeaderComponent,
    HomeMessionComponent,
    HomeFactsComponent,
    HomePartnersComponent,
    HomeOutroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
