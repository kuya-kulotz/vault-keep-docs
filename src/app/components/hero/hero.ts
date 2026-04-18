import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero-wrapper" #heroSection>
      <div class="glow-aura" style="top: 10%; left: -10%"></div>
      <div class="glow-aura" style="bottom: 10%; right: -10%; background: radial-gradient(circle, rgba(224, 68, 0, 0.05) 0%, transparent 70%);"></div>

      <div class="section-container">
        <div class="hero-content">
          <div class="badge reveal-up">100% Offline | Privacy-First | Local-First</div>
          
          <h1 class="hero-title reveal-up">
            VaultKeep: Your <span class="text-gradient-green">Privacy-First</span><br>
            Digital Asset Vault
          </h1>
          
          <p class="hero-subtitle reveal-up">
            Digitize  receipts, track assets, and protect warranties — 100% on-device, zero cloud dependencies.
          </p>
          
          <div class="hero-actions reveal-up">
            <a href="#" class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.9.7-1.5 1.5-1.5h15c.9 0 1.5.7 1.5 1.5v17l-9-4.5-9 4.5z"/>
              </svg>
              Google Play
            </a>
            <div class="btn-secondary disabled-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 17.5c-1.5 1.5-3.5 1.5-4.5 0s-1.5-3.5 0-4.5 3.5-1.5 4.5 0 1.5 3.5 0 4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              iOS (Coming Soon)
            </div>
          </div>
          
          <div class="scroll-instruction reveal-up" (click)="scrollToNext()">
            <span>Take control of your assets</span>
            <div class="mouse"></div>
          </div>
        </div>

        <div class="hero-visual" #mockupContainer>
          <div class="mockup-parallax">
            <img src="assets/vaultkeep_1.jpg" alt="VaultKeep App Mockup" class="device-mockup">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: radial-gradient(circle at 80% 20%, rgba(0, 224, 102, 0.05) 0%, transparent 40%);
    }

    .section-container {
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      align-items: center;
      gap: 60px;
    }

    .hero-content {
      z-index: 2;
    }

    .hero-title {
      font-size: 4.5rem;
      line-height: 1.05;
      margin: 24px 0;
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-muted);
      max-width: 580px;
      margin-bottom: 48px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      
      .disabled-btn {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
    }

    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
    }

    .device-mockup {
      width: 100%;
      max-width: 420px;
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 
        0 40px 80px rgba(0,0,0,0.9),
        0 0 0 2px rgba(0, 224, 102, 0.15) inset;
      transform: perspective(1000px) rotateY(-8deg) rotateX(4deg);
      transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    .device-mockup:hover {
      transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
    }

    .scroll-instruction {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--text-muted);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 600;
      z-index: 10;
      
      .mouse {
        width: 24px;
        height: 40px;
        border: 2px solid var(--text-muted);
        border-radius: 20px;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background-color: var(--accent-green);
          border-radius: 2px;
          animation: scroll 2s infinite;
        }
      }
      
      &:hover .mouse {
        border-color: var(--accent-green);
      }
    }

    @keyframes scroll {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, 15px); opacity: 0; }
    }

    @media (max-width: 1024px) {
      .section-container {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 140px;
      }
      
      .hero-title { font-size: 3.2rem; }
      .hero-subtitle { margin: 0 auto 48px; }
      .hero-actions { justify-content: center; }
      .device-mockup { max-width: 320px; margin-top: 40px; }
    }
  `,
})
export class Hero implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('mockupContainer') mockupContainer!: ElementRef;

  ngAfterViewInit() {
    this.initAnimations();
  }

  private initAnimations() {
    gsap.to('.reveal-up', {
      opacity: 1,
      y: 0,
      duration: 1.4,
      stagger: 0.12,
      ease: 'power4.out',
      delay: 0.4
    });

    gsap.from(this.mockupContainer.nativeElement, {
      opacity: 0,
      y: 60,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.6
    });
  }

  scrollToNext() {
    const nextSection = document.getElementById('problem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
