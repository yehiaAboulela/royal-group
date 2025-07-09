import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isDropDownActive = false;
  menuOpen = false;
  isHome = false;
  isScrolled = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.isHome = url === '/' || url.startsWith('/home');
        // Close mobile menu on route change
        this.menuOpen = false;
      }
    });
  }

  toggleMobileMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMobileMenu(): void {
    this.menuOpen = false;
  }

  toggleDropdown(): void {
    this.isDropDownActive = !this.isDropDownActive;
  }

  closeDropdown(): void {
    this.isDropDownActive = false;
  }
}
