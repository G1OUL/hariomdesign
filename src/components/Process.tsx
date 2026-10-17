import React from "react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Process: React.FC = () => {
  return (
    <section className="section process-section" id="process" aria-label="Working Process">
      <div className="container">
        {/* Section Header */}
        <div className="process-header">
          <div>
            <span className="section-tag">How We Work Together</span>
            <h2 className="section-title">A Simple, 4-Step Process</h2>
          </div>
          <p className="section-subtitle">
            Designed for busy property owners. You won't need to learn any technical jargon,
            write complex code, or manage servers — I handle the entire digital process from concept
            to live launch.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="process-grid">
          {PORTFOLIO_CONFIG.process.map((step, index) => (
            <div key={step.step} className="process-card">
              <div className="process-step-indicator">
                <span className="step-num">{step.step}</span>
                {index < PORTFOLIO_CONFIG.process.length - 1 && (
                  <div className="step-connector" aria-hidden="true" />
                )}
              </div>

              <div className="process-card-content">
                <span className="process-sub">{step.subtitle}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>

                <div className="step-deliverables-pill-group">
                  <span className="step-deliverables-label">Key Output:</span>
                  <div className="step-pills">
                    {step.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="step-pill">
                        <CheckCircle2 size={12} className="step-pill-icon" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Reassurance Banner */}
        <div className="process-reassurance-box">
          <div className="reassurance-text">
            <h4>No technical experience required on your end</h4>
            <p>
              Simply share your photos, property highlights, and room rates over WhatsApp or email.
              I will organize the content, optimize the photos, and present a working preview for your feedback.
            </p>
          </div>
          <a href="#contact" className="btn btn-secondary btn-sm">
            <span>Start Step 01 Today</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
