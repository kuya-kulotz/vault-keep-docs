import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="how-it-works" class="how-it-works">
      <div class="section-container">
        <h2 class="section-title reveal-scroll">Precision <span class="text-gradient-green">Asset Intelligence</span></h2>
        
        <div class="flow-container">
          <div class="progress-line-bg">
            <div class="progress-line-fill"></div>
          </div>
          
          <div class="step-item" *ngFor="let step of steps; let i = index">
            <div class="step-marker glass-card">
              <span class="step-number">{{ i + 1 }}</span>
            </div>
            <div class="step-content reveal-scroll">
              <div class="step-text">
                <h3>{{ step.title }}</h3>
                <p [innerHTML]="step.description"></p>
                <div class="step-meta">
                  <span class="badge">{{ step.badge }}</span>
                </div>
              </div>
              <div class="step-visual glass-card" *ngIf="step.image">
                <img [src]="step.image" [alt]="step.title" class="step-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .how-it-works {
      padding: 140px 0;
      position: relative;
    }

    .section-title {
      text-align: center;
      font-size: 3.5rem;
      margin-bottom: 100px;
      font-weight: 800;
    }

    .flow-container {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      padding-left: 80px;
    }

    .progress-line-bg {
      position: absolute;
      left: 38px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }

    .progress-line-fill {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0%;
      background: linear-gradient(to bottom, var(--accent-green), #03ffb7);
      border-radius: 2px;
      box-shadow: 0 0 15px var(--accent-green);
    }

    .step-item {
      position: relative;
      padding-bottom: 100px;
      
      &:last-child {
        padding-bottom: 0;
      }
    }

    .step-marker {
      position: absolute;
      left: -80px;
      top: 0;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      border-radius: 50%;
      background: var(--bg-dark);
      border: 1px solid var(--glass-border);
      
      .step-number {
        font-family: var(--font-heading);
        font-weight: 800;
        font-size: 1.8rem;
        color: var(--accent-green);
        text-shadow: 0 0 10px rgba(0, 224, 102, 0.3);
      }
    }

    .step-content {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 60px;
      align-items: center;
      
      h3 {
        font-size: 2rem;
        margin-bottom: 20px;
        font-weight: 700;
      }
      
      p {
        color: var(--text-muted);
        font-size: 1.15rem;
        line-height: 1.6;
        margin-bottom: 24px;
        
        .subtle-link {
          color: inherit;
          text-decoration: none;
          opacity: 0.5;
          transition: opacity 0.2s, color 0.2s;
          
          &:hover {
            opacity: 1;
            color: var(--accent-green);
          }
        }
      }
    }

    .step-visual {
      background: rgba(255, 255, 255, 0.01);
      border-radius: 24px;
      padding: 12px;
      height: auto;
      min-height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-color: rgba(0, 224, 102, 0.1);
      overflow: hidden;
      
      .step-image {
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }
    }

    @media (max-width: 900px) {
      .step-content {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      .step-visual {
        display: none;
      }
    }
  `,
})
export class HowItWorks implements AfterViewInit {
  steps = [
    {
      title: 'Effortless Capture',
      description: 'Snap a photo of any  store receipt. Our custom engine physically reconstructs layouts with zero hallucinations.',
      badge: 'Spatial OCR Reconstructor',
      image: 'assets/capture.jpg'
    },
    {
      title: 'AI Neural Auditor',
      description: 'A local Llama model deduces merchant, dates, and itemized totals entirely on your device hardware. <a href="#ai-disclaimer" class="subtle-link">¹</a>',
      badge: 'GGUF Local Inference',
      image: 'assets/ai.jpg'
    },
    {
      title: 'Digital Vault Storage',
      description: 'Convert fading paper into searchable digital assets. Track warranty timelines and depreciation automatically.',
      badge: 'Hardware-Level Encryption',
      image: 'assets/vaultkeep_2.jpg'
    },
    {
      title: 'Secure Data Portability',
      description: 'Create encrypted full-vault backups and restore your data seamlessly. Export individual assets as PDFs, ensuring your financial history stays under your control.',
      badge: 'PDF Export & Backup',
      image: 'assets/backup.jpg'
    },
  ];

  ngAfterViewInit() {
    gsap.to('.progress-line-fill', {
      scrollTrigger: {
        trigger: '.flow-container',
        start: 'top 30%',
        end: 'bottom 70%',
        scrub: 1.5,
      },
      height: '100%',
      ease: 'none',
    });

    gsap.utils.toArray('.step-item').forEach((step: any) => {
      gsap.from(step.querySelector('.step-marker'), {
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(2)',
      });
    });
  }
}
