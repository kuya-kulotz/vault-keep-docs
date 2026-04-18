import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Cpu, BrainCircuit, ShieldCheck, MapPin } from 'lucide-angular';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="problem" class="problem-section">
      <div class="section-container">
        <div class="problem-header">
          <h2 class="section-title reveal-scroll">The High Cost of <span class="text-gradient-orange">Forgotten Paper</span></h2>
          <div class="problem-grid">
            <div class="problem-text reveal-scroll">
              <p>Every year, billions of receipts fade into illegibility or are lost forever. When a warranty claim is needed, or an asset must be tracked for insurance, that missing paper becomes a multi-million dollar problem.</p>
              <p>Most "cloud-based" receipt apps expose your sensitive financial history to third-party servers. <strong>VaultKeep changes that.</strong> We believe your purchase data belongs on your device, secured by local intelligence.</p>
            </div>
            <div class="stat-cards">
              <div class="glass-card stat-card reveal-scroll">
                <div class="stat-number">Billion+</div>
                <div class="stat-label">Receipts lost annually</div>
              </div>
              <div class="glass-card stat-card reveal-scroll">
                <div class="stat-number">₱ Millions</div>
                <div class="stat-label">Unclaimed warranties</div>
              </div>
            </div>
          </div>
        </div>

        <div class="value-pills-wrapper">
          <h3 class="pills-title reveal-scroll">The <span class="text-gradient-green">VaultKeep</span> Philosophy</h3>
          <div class="pills-grid">
            <div class="pill-card glass-card reveal-scroll" *ngFor="let pill of pills">
              <div class="pill-icon">
                <lucide-icon [img]="pill.icon" class="icon-svg"></lucide-icon>
              </div>
              <div class="pill-content">
                <h4>{{ pill.title }}</h4>
                <p class="hover-info">{{ pill.info }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .problem-section {
      background: var(--bg-darker);
      position: relative;
    }

    .section-title {
      font-size: 3.5rem;
      margin-bottom: 48px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .problem-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      margin-bottom: 120px;
    }

    .problem-text p {
      font-size: 1.15rem;
      color: var(--text-muted);
      margin-bottom: 24px;
      line-height: 1.7;
      
      strong { color: var(--accent-green); }
    }

    .stat-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .stat-card {
      padding: 32px;
      text-align: center;
      background: rgba(255, 255, 255, 0.02);
      
      .stat-number {
        font-size: 2.2rem;
        font-weight: 800;
        color: var(--accent-orange);
        margin-bottom: 8px;
        font-family: var(--font-heading);
      }
      
      .stat-label {
        font-size: 0.85rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-weight: 600;
      }
    }

    .pills-title {
      text-align: center;
      margin-bottom: 60px;
      font-size: 2.2rem;
      font-weight: 700;
    }

    .pills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .pill-card {
      padding: 24px 32px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      cursor: default;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.015);
      border: 1px solid rgba(255, 255, 255, 0.05);
      
      h4 {
        font-size: 1.25rem;
        margin: 0 0 8px 0;
        font-weight: 700;
        color: #fff;
      }
      
      .hover-info {
        font-size: 0.95rem;
        color: var(--text-muted);
        line-height: 1.5;
        margin: 0;
      }
      
      &:hover {
        border-color: var(--accent-green);
        box-shadow: 0 10px 30px rgba(0, 224, 102, 0.1);
        background: rgba(0, 224, 102, 0.02);
      }
    }

    .pill-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 224, 102, 0.1);
      border-radius: 12px;
      color: var(--accent-green);
      
      .icon-svg {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 1024px) {
      .problem-grid { grid-template-columns: 1fr; gap: 48px; }
      .section-title { font-size: 2.5rem; }
    }
  `,
})
export class Problem implements AfterViewInit {
  pills = [
    { title: 'Offline processing', info: 'All image processing happens on your device using local neural accelerators.', icon: Cpu },
    { title: 'Hybrid Intelligence', info: 'Deterministic patterns combined with local LLMs (Llama) for perfect accuracy.', icon: BrainCircuit },
    { title: 'End-to-End Privacy', info: 'Zero accounts required. Your financial signature never leaves your device storage.', icon: ShieldCheck },
    { title: 'Smart Asset Tracking', info: 'Automatic warranty grouping and instant PDF export for effortless claims.', icon: MapPin },
  ];

  ngAfterViewInit() {
    gsap.utils.toArray('.reveal-scroll').forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      });
    });
  }
}
