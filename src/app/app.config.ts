// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // Updated import
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // Add this configuration:
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Restores scroll position
        anchorScrolling: 'enabled', // Optional: Enables anchor scrolling
      })
    ),
    provideClientHydration(withEventReplay()),
  ],
};
