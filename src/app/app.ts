import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './components/hero/hero';
import { Problem } from './components/problem/problem';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Features } from './components/features/features';
import { Analytics } from './components/analytics/analytics';
import { Privacy } from './components/privacy/privacy';
import { Footer } from './components/footer/footer';
import { LegalModal } from './components/legal-modal/legal-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    Problem,
    HowItWorks,
    Features,
    Analytics,
    Privacy,
    Footer,
    LegalModal
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'VaultKeep | Offline-First Asset & Warranty Vault';
  activeLegalModal: string | null = null;

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
