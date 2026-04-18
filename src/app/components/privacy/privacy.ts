import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Shield, Camera, Download, ScanLine, Fingerprint, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="privacy" class="privacy-section">
      <div class="section-container">
        <div class="privacy-card glass-card reveal-scroll">
          <div class="privacy-grid">
            <div class="privacy-text">
              <div class="locked-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <h2 class="text-gradient-green">Privacy by Design</h2>
              <p>VaultKeep is built on the principle of <strong>Zero-Cloud Exposure</strong>. Your receipts, financial data, and personal documents never leave your device.</p>
              <ul class="privacy-features">
                <li><span class="check">✓</span> 100% On-Device Artificial Intelligence</li>
                <li><span class="check">✓</span> Hardware-Backed Encryption</li>
                <li><span class="check">✓</span> No Accounts, No Tracking, No Cloud</li>
              </ul>
            </div>
            <div class="privacy-onboarding">
              <h3 class="onboarding-title">Onboarding Flow</h3>
              <div class="carousel-container">
                <div class="onboarding-card glass-card">
                  <div class="card-header">
                    <div class="card-step">Step {{ activeStep + 1 }} of {{ onboarding.length }}</div>
                    <lucide-icon [img]="onboarding[activeStep].icon" class="step-icon"></lucide-icon>
                  </div>
                  <h4>{{ onboarding[activeStep].title }}</h4>
                  <p>{{ onboarding[activeStep].desc }}</p>
                </div>
                
                <div class="carousel-controls">
                  <button class="nav-btn" (click)="prevStep()" [disabled]="activeStep === 0">
                    <lucide-icon [img]="ChevronLeft"></lucide-icon>
                  </button>
                  
                  <div class="dots-wrapper">
                    <span 
                      class="dot" 
                      *ngFor="let card of onboarding; let i = index" 
                      [class.active]="i === activeStep" 
                      (click)="setStep(i)"></span>
                  </div>
                  
                  <button class="nav-btn" (click)="nextStep()" [disabled]="activeStep === onboarding.length - 1">
                    <lucide-icon [img]="ChevronRight"></lucide-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .privacy-section {
      padding: 140px 0;
      background: radial-gradient(circle at 10% 50%, rgba(0, 224, 102, 0.03) 0%, transparent 40%);
    }

    .privacy-card {
      padding: 80px;
      background: rgba(255, 255, 255, 0.01);
      border-radius: 40px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.5);
    }

    .privacy-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 100px;
      align-items: center;
    }

    .locked-icon {
      width: 60px;
      height: 60px;
      color: var(--accent-green);
      margin-bottom: 32px;
      filter: drop-shadow(0 0 12px rgba(0, 224, 102, 0.3));
    }

    .privacy-text {
      h2 { font-size: 3rem; margin-bottom: 24px; font-weight: 800; }
      p { font-size: 1.2rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 40px; 
          strong { color: var(--accent-green); }
      }
    }

    .privacy-features {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 1.1rem;
        color: #fff;
        margin-bottom: 16px;
        font-weight: 500;
        
        .check { color: var(--accent-green); font-weight: 800; font-size: 1.4rem; }
      }
    }

    .privacy-onboarding {
      .onboarding-title {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--text-muted);
        margin-bottom: 32px;
        font-weight: 600;
        text-align: center;
      }
    }

    .carousel-container {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .onboarding-card {
      width: 100%;
      min-height: 220px;
      padding: 40px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(0, 224, 102, 0.15);
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        
        .card-step { 
          font-size: 0.85rem; 
          color: var(--accent-green); 
          font-weight: 700; 
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .step-icon {
          width: 32px;
          height: 32px;
          color: var(--accent-green);
          opacity: 0.8;
        }
      }
      
      h4 { font-size: 1.6rem; margin-bottom: 16px; font-weight: 700; color: #fff; }
      p { font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin: 0; }
    }

    .carousel-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .nav-btn {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover:not([disabled]) {
          background: rgba(0, 224, 102, 0.1);
          border-color: var(--accent-green);
          color: var(--accent-green);
        }
        
        &[disabled] {
          opacity: 0.3;
          cursor: not-allowed;
        }
      }
      
      .dots-wrapper {
        display: flex;
        gap: 12px;
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s;
          
          &.active {
            background: var(--accent-green);
            transform: scale(1.3);
            box-shadow: 0 0 10px rgba(0, 224, 102, 0.4);
          }
        }
      }
    }

    @media (max-width: 1024px) {
      .privacy-grid { grid-template-columns: 1fr; gap: 60px; }
      .privacy-card { padding: 40px; }
      .privacy-text h2 { font-size: 2.4rem; }
    }
  `,
})
export class Privacy {
  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;

  activeStep = 0;

  onboarding = [
    { title: 'Welcome', desc: 'Securely initialize your private vault on your device hardware.', icon: Shield },
    { title: 'Permission', desc: 'Grant camera access for physical asset digitization.', icon: Camera },
    { title: 'AI Setup', desc: 'Download local neural weights for on-device OCR.', icon: Download },
    { title: 'First Scan', desc: 'Digitize your first receipt and see physical data transform.', icon: ScanLine },
    { title: 'Vault Active', desc: 'Ready to track assets with sub-millimeter precision.', icon: CheckCircle2 },
  ];

  nextStep() {
    if (this.activeStep < this.onboarding.length - 1) {
      this.activeStep++;
    }
  }

  prevStep() {
    if (this.activeStep > 0) {
      this.activeStep--;
    }
  }

  setStep(index: number) {
    this.activeStep = index;
  }
}
