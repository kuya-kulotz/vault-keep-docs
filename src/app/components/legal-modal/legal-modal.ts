import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-modal',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="modal-backdrop" (click)="close.emit()">
      <div class="modal-container glass-card" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="close.emit()">&times;</button>
        <div class="modal-content smooth-content" [innerHTML]="getContent()"></div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: var(--glass-blur);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease-out;
    }

    .modal-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid var(--glass-border);
      color: #fff;
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: background 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .modal-content {
      padding: 40px;
      overflow-y: auto;
      max-height: calc(90vh - 80px);
      color: var(--text-muted);
      line-height: 1.6;
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
    }

    .modal-content h1 {
      font-size: 2.5rem;
      color: #fff;
      margin-bottom: 15px;
      font-family: var(--font-heading);
    }
    
    .modal-content h2 {
      font-size: 1.5rem;
      color: #fff;
      margin-top: 35px;
      margin-bottom: 15px;
      font-family: var(--font-heading);
    }

    .modal-content p, 
    .modal-content ul {
      margin-bottom: 16px;
    }

    .modal-content li {
      margin-bottom: 8px;
    }

    .modal-content strong {
      color: #fff;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 600px) {
      .modal-content {
        padding: 30px 20px;
      }
      .modal-container {
        max-height: 95vh;
      }
      .modal-content {
        max-height: calc(95vh - 80px);
      }
    }
  `]
})
export class LegalModal {
  @Input() contentId: string = '';
  @Output() close = new EventEmitter<void>();

  private docs: Record<string, string> = {
    'privacy': `
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated: April 5, 2026</strong></p>
      <p>At VaultKeep, we believe your financial data is your business and yours alone. This Privacy Policy explains our commitment to your privacy.</p>
      
      <h2>1. 100% Offline - No Data Collection</h2>
      <p>VaultKeep is an <strong>offline-first</strong> application.</p>
      <ul>
        <li><strong>No Cloud Uploads</strong>: Your receipts, asset details, and spending habits are stored exclusively on your device. We do not have servers that collect your data.</li>
        <li><strong>No Analytics/Tracking</strong>: We do not use third-party analytics or tracking tools (like Google Analytics or Facebook Pixel) to monitor your behavior.</li>
        <li><strong>No Personal Information</strong>: We do not collect your name, email address, or phone number. No account registration is required.</li>
      </ul>
      
      <h2>2. On-Device Processing</h2>
      <p>VaultKeep uses advanced machine learning (AI) to help you manage your receipts.</p>
      <ul>
        <li>All AI processing (including Text Recognition and Semantic Understanding) happens <strong>on your device</strong>.</li>
        <li>No receipt images or text data are sent to external servers for processing.</li>
      </ul>
      
      <h2>3. Permissions We Request</h2>
      <p>To provide its features, VaultKeep requires certain permissions on your device:</p>
      <ul>
        <li><strong>Camera</strong>: To scan and take photos of your receipts.</li>
        <li><strong>Storage/Media</strong>: To save your receipt images and to allow you to backup or restore your data.</li>
        <li><strong>Notifications</strong>: To send you reminders when your warranties are about to expire.</li>
      </ul>
      
      <h2>4. Third-Party Services</h2>
      <p>VaultKeep does not share your data with any third-party services. If you choose to use the "Backup" feature, you may choose to save your data to a third-party service (like Google Drive or iCloud), but that is entirely under your control and subject to that service's privacy policy.</p>
      
      <h2>5. Data Security</h2>
      <p>Because your data is stored on your device, its security depends on the security of your phone. We recommend using your device's built-in security features (like PIN, Fingerprint, or Face ID) to protect your information.</p>
      
      <h2>6. Children's Privacy</h2>
      <p>VaultKeep does not knowingly collect any information from children, as it does not collect any information at all.</p>
      
      <h2>7. Changes to This Policy</h2>
      <p>We may update our Privacy Policy if we add new features. However, our commitment to "offline-first" and "privacy-by-default" will remain a core part of the App.</p>
    `,
    'terms': `
      <h1>Terms of Service</h1>
      <p><strong>Last Updated: April 5, 2026</strong></p>
      <p>Welcome to VaultKeep! These Terms of Service ("Terms") govern your use of the VaultKeep mobile application ("App"). By using VaultKeep, you agree to these Terms. If you do not agree, please do not use the App.</p>
      
      <h2>1. Description of Service</h2>
      <p>VaultKeep is an offline-first asset and warranty management application. The App provides tools for scanning receipts, tracking warranties, and visualizing spending data using on-device machine learning and local storage.</p>
      
      <h2>2. No Account or Cloud Storage</h2>
      <p>VaultKeep is designed to operate entirely on your device.</p>
      <ul>
        <li>We do not require you to create an account.</li>
        <li>We do not store your data on our servers.</li>
        <li>Your receipts, asset details, and financial information stay on your device unless you choose to export them manually.</li>
      </ul>
      
      <h2>3. User Responsibility for Data</h2>
      <p>Because VaultKeep is an offline application:</p>
      <ul>
        <li><strong>Backups</strong>: You are solely responsible for creating and maintaining backups of your data. Use the built-in "Backup" feature to export your data to a secure location (e.g., your personal cloud storage or computer).</li>
        <li><strong>Data Loss</strong>: We are not responsible for any loss of data caused by device failure, app uninstallation, or loss of your mobile device.</li>
      </ul>
      
      <h2>4. AI Accuracy & Disclaimer</h2>
      <p>VaultKeep uses on-device artificial intelligence (AI) to parse receipts. While we strive for high accuracy, the AI may occasionally misread or misinterpret information.</p>
      <ul>
        <li>You are responsible for reviewing and verifying the accuracy of all data captured by the App before saving it.</li>
        <li>VaultKeep is provided "as is," and we make no guarantees regarding the accuracy of the information processed.</li>
      </ul>
      
      <h2>5. Privacy</h2>
      <p>Your privacy is our priority. Please review our <strong>Privacy Policy</strong> to understand how we handle (or rather, don't handle) your data.</p>
      
      <h2>6. Prohibited Use</h2>
      <p>You agree not to use VaultKeep for any illegal purposes or to attempt to reverse-engineer, decompile, or interfere with the App's functionality.</p>
      
      <h2>7. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, the developers of VaultKeep shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the App, including but not limited to data loss or financial decisions made based on the App's insights.</p>
      
      <h2>8. Changes to Terms</h2>
      <p>We may update these Terms from time to time. Your continued use of the App after any changes constitutes acceptance of the new Terms.</p>
    `
  };

  getContent() {
    return this.docs[this.contentId] || '<h1>Document Not Found</h1>';
  }
}
