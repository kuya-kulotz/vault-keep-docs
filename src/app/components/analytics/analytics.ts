import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { gsap } from 'gsap';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="analytics" class="analytics-section">
      <div class="section-container">
        <div class="analytics-grid">
          <div class="analytics-content reveal-scroll">
            <h2 class="section-title">Deep <span class="text-gradient-green">Local Insights</span></h2>
            <p class="section-description">
              VaultKeep's AI engine doesn't just scan; it understands. Analyze your spending, track depreciation, and optimize your asset portfolio — 100% on-device.
            </p>
            
            <div class="insight-cards">
              <div class="insight-mini-card glass-card">
                <span class="label">Hardware Efficiency</span>
                <span class="value text-gradient-green">98.4%</span>
              </div>
              <div class="insight-mini-card glass-card">
                <span class="label">Privacy Score</span>
                <span class="value text-gradient-green">A+</span>
              </div>
            </div>
          </div>

          <div class="analytics-visual reveal-scroll">
            <div class="glass-card dashboard-mock">
              <div class="dash-header">
                <div class="dash-title">Offline Intelligence Dashboard</div>
                <div class="dash-controls">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
              </div>
              <!-- <div class="charts-container">
                <div class="chart-box">
                  <canvas #lineChart></canvas>
                </div>
                <div class="chart-box doughnut">
                  <canvas #doughnutChart></canvas>
                </div>
              </div>-->
              <div class="dashboard-image">              
                <img src="assets/vaultkeep_4.jpg" alt="VaultKeep App Mockup" width="100%">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .analytics-section {
      background: var(--bg-darker);
      overflow: hidden;
      padding: 140px 0;
    }

    .analytics-grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 80px;
      
    }

    .section-title {
      font-size: 3.5rem;
      margin-bottom: 32px;
      font-weight: 800;
    }

    .section-description {
      font-size: 1.15rem;
      color: var(--text-muted);
      margin-bottom: 48px;
      line-height: 1.7;
    }

    .insight-cards {
      display: flex;
      gap: 20px;
    }

    .insight-mini-card {
      flex: 1;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      .label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; }
      .value { font-size: 1.8rem; font-weight: 800; font-family: var(--font-heading); }
    }

    .dashboard-mock {
      padding: 24px;
      background: rgba(0, 0, 0, 0.4);
      border-color: rgba(0, 224, 102, 0.15);
      
      .dash-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--glass-border);
      }
      
      .dash-title { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
      .dash-controls {
        display: flex;
        gap: 6px;
        .dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.5; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
      }
    }

    .charts-container {
      display: grid;
      grid-template-columns: 1.4fr 0.6fr;
      gap: 24px;
      min-width: 0;
    }

    .chart-box {
      background: rgba(255, 255, 255, 0.015);
      border-radius: 12px;
      padding: 20px;
      height: 280px;
      border: 1px solid rgba(255, 255, 255, 0.03);
      position: relative;
      min-width: 0;
      width: 100%;
    }

    @media (max-width: 1024px) {
      .analytics-grid { grid-template-columns: 1fr; gap: 60px; }
      .section-title { font-size: 2.8rem; }
      .charts-container { grid-template-columns: 1fr; }
      .chart-box { height: 240px; }
    }
  `,
})
export class Analytics implements AfterViewInit {
  @ViewChild('lineChart') lineChartRef!: ElementRef;
  @ViewChild('doughnutChart') doughnutChartRef!: ElementRef;

  ngAfterViewInit() {
  }

  private initDoughnutChart() {
    new Chart(this.doughnutChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Electronics', 'Home', 'Gadgets'],
        datasets: [{
          data: [45, 25, 30],
          backgroundColor: ['#00e066', '#03ffb7', '#00b3ff'],
          borderWidth: 0,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: { legend: { display: false } }
      }
    });
  }
}
