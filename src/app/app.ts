import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
    LegalModal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = 'VaultKeep | Offline-First Asset & Warranty Vault';
  activeLegalModal: string | null = null;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const checkModal = (params: Record<string, string>) => {
      const modal = params['modal'];
      if (modal === 'privacy' || modal === 'terms') {
        this.activeLegalModal = modal;
      }
    };

    // checkModal(this.route.snapshot.queryParams);

    this.route.queryParams.subscribe((params) => {
      this.checkModal(params);
    });
  }

  checkModal(params: Record<string, string>) {
      const modal = params['modal'];
      if (modal === 'privacy' || modal === 'terms') {
        console.log('Opening legal modal:', modal);
        this.activeLegalModal = modal;
        this.cdr.detectChanges(); // Ensure the view updates immediately
      }
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
