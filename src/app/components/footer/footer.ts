import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="main-footer">
      <div class="cta-banner">
        <div class="section-container">
          <h2 class="reveal-scroll">Ready to secure your <span class="text-gradient-green">vault</span>?</h2>
          <div class="cta-buttons reveal-scroll">
            <a href="#" class="btn-primary">Download VaultKeep now</a>
          </div>
        </div>
      </div>

      <div class="footer-links">
        <div class="section-container">
          <div class="footer-content">
            <div class="footer-brand">
              <h3 class="logo">VAULTKEEP</h3>
              <p>Offline-first asset and warranty management. 100% offline, 100% private.</p>
            </div>
            
            <div class="link-group">
              <h4>Platform</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">Process</a>
              <a href="#analytics">Local Insights</a>
            </div>
            
            <div class="link-group">
              <h4>Download</h4>
              <a href="#">Google Play</a>
            </div>
            
            <div class="link-group">
              <h4>Legal</h4>
              <a href="#" (click)="$event.preventDefault(); openLegal.emit('privacy')">Privacy Policy</a>
              <a href="#" (click)="$event.preventDefault(); openLegal.emit('terms')">Terms of Service</a>
            </div>
          </div>
          
          <div class="footer-disclaimer" id="ai-disclaimer">
            <p>¹ Our optimized mobile AI handles most formats, but highly complex receipts may require slight manual corrections to the processed data.</p>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 VaultKeep. 100% Private  Asset Protection.</p>
            <div class="socials">
              <a href="#">TW</a>
              <a href="#">FB</a>
              <a href="#">IG</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .main-footer {
      background: var(--bg-darker);
    }

    .cta-banner {
      padding: 120px 0;
      text-align: center;
      border-bottom: 1px solid var(--glass-border);
      background: radial-gradient(circle at center, rgba(0, 224, 102, 0.03) 0%, transparent 70%);
      
      h2 { font-size: 3.5rem; margin-bottom: 48px; font-weight: 800; }
      
      .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
      }
    }

    .footer-links {
      padding: 100px 0 40px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
      gap: 60px;
      margin-bottom: 80px;
    }

    .footer-brand {
      .logo { font-size: 2rem; margin-bottom: 24px; color: var(--accent-green); font-family: var(--font-heading); font-weight: 800; letter-spacing: 0.1em; }
      p { color: var(--text-muted); max-width: 320px; font-size: 1rem; }
    }

    .link-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
      
      h4 { font-size: 1rem; color: #fff; margin-bottom: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
      a { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
      a:hover { color: var(--accent-green); }
    }

    .footer-disclaimer {
      padding-bottom: 24px;
      color: var(--text-muted);
      font-size: 0.85rem;
      opacity: 0.8;
      line-height: 1.5;
    }

    .footer-bottom {
      border-top: 1px solid var(--glass-border);
      padding-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255,255,255,0.2);
      font-size: 0.9rem;
    }

    .socials {
      display: flex;
      gap: 24px;
      a { color: rgba(255,255,255,0.2); text-decoration: none; font-weight: 800; letter-spacing: 0.05em; transition: color 0.2s; }
      a:hover { color: var(--accent-green); }
    }

    @media (max-width: 900px) {
      .footer-content { grid-template-columns: 1fr 1fr; gap: 40px; }
      .footer-brand { grid-column: span 2; }
      .cta-banner h2 { font-size: 2.5rem; }
      .cta-buttons { flex-direction: column; }
    }
  `,
})
export class Footer {
  @Output() openLegal = new EventEmitter<string>();
}
