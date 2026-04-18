import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Cpu, Network, PackageSearch, Banknote, BellRing, Lock, Gauge, BarChart3, Share2, LayoutGrid, Scan, RefreshCw } from 'lucide-angular';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="features" class="features-section">
      <div class="section-container">
        <div class="features-header reveal-scroll">
          <h2 class="section-title">Professional <span class="text-gradient-green">Asset Governance</span></h2>
          <p class="section-subtitle">The most advanced offline toolkit for Philipine consumers and businesses.</p>
        </div>
        
        <div class="features-grid">
          <div class="glass-card feature-card" *ngFor="let feature of features">
            <div class="feature-icon">
              <lucide-icon [img]="feature.icon" class="lucide-svg"></lucide-icon>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .features-section {
      background: var(--bg-dark);
      padding: 140px 0;
    }

    .features-header {
      text-align: center;
      margin-bottom: 90px;
      
      .section-title { font-size: 3.5rem; margin-bottom: 16px; font-weight: 800; }
      .section-subtitle { color: var(--text-muted); font-size: 1.2rem; }
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }

    .feature-card {
      padding: 48px 40px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: rgba(255, 255, 255, 0.015);
      
      .feature-icon {
        width: 52px;
        height: 52px;
        color: var(--accent-green);
        margin-bottom: 8px;
        filter: drop-shadow(0 0 8px rgba(0, 224, 102, 0.4));
        
        .lucide-svg { width: 100%; height: 100%; }
      }
      
      h3 { font-size: 1.4rem; font-weight: 700; color: #fff; letter-spacing: -0.01em; }
      p { color: var(--text-muted); font-size: 1rem; line-height: 1.6; }
      
      &:hover {
        border-color: var(--accent-green);
        background: rgba(0, 224, 102, 0.02);
        box-shadow: 0 15px 40px rgba(0, 224, 102, 0.08);
      }
    }

    @media (max-width: 600px) {
      .section-title { font-size: 2.5rem; }
      .features-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class Features implements AfterViewInit {
  features = [
    { title: '100% Offline AI', description: 'Google ML Kit + local LLM processing entirely on your hardware.', icon: Cpu },
    { title: 'Hybrid Intelligence', description: 'Deterministic slicing + Neural validation for perfect receipt digitization.', icon: Network },
    { title: 'Asset Tracking', description: 'Advanced searchable database for physical possessions and tax records.', icon: PackageSearch },
    { title: 'Multi-Currency', description: 'Full support for PHP and dynamic localized currency conversion.', icon: Banknote },
    { title: 'Critical Alerts', description: 'Automatic warranty notifications with smart time buckets (30d/7d/1d).', icon: BellRing },
    { title: 'Encrypted Backups', description: 'Secure ZIP exports containing your entire vault (JSON + original images).', icon: Lock },
    { title: 'Confidence Scoring', description: 'Neural validation of merchant data with smart confidence distribution.', icon: Gauge },
    { title: 'Visual Dashboards', description: 'Offline-first insights into spending trends, loyalty, and risk scores.', icon: BarChart3 },
    { title: 'Instant Sharing', description: 'Professional PDF generation for warranty claims or tax filing.', icon: Share2 },
    { title: 'Android Widgets', description: 'Rapid-access home screen widgets for one-tap receipt scanning.', icon: LayoutGrid },
    { title: 'Spatial Analysis', description: 'Advanced column-wise OCR extraction for complex store formats.', icon: Scan },
    { title: 'Smart Re-Scan', description: 'Neural memory of camera vs gallery choices for faster workflows.', icon: RefreshCw },
  ];

  ngAfterViewInit() {
    gsap.utils.toArray('.feature-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: (index % 3) * 0.1,
        ease: 'power3.out',
      });
    });
  }
}
