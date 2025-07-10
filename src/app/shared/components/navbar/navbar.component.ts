import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isDropDownActive = false;
  menuOpen = false;
  isHome = false;
  isScrolled = false;
  isVisible = true;

  private lastScrollTop = 0;
  private scrollThreshold = 80;
  private isScrolling = false;
  private scrollTimer: any;

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

  ngOnDestroy(): void {
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.isScrolled = scrollTop > 50;

    if (!this.isScrolling) {
      this.isScrolling = true;
      this.handleScroll(scrollTop);
      this.scrollTimer = setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    }
  }

  private handleScroll(scrollTop: number): void {
    const scrollDifference = Math.abs(scrollTop - this.lastScrollTop);

    if (scrollDifference < this.scrollThreshold) {
      return;
    }

    if (scrollTop <= 80) {
      this.isVisible = true;
    } else if (scrollTop > this.lastScrollTop) {
      this.isVisible = false;
      this.menuOpen = false;
      this.isDropDownActive = false;
    } else {
      this.isVisible = true;
    }

    this.lastScrollTop = scrollTop;
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
