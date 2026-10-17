import React from "react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { ShieldCheck, HeartHandshake, Zap, Compass } from "lucide-react";

export const About: React.FC = () => {
  const getPrincipleIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <Zap size={20} className="principle-icon" />;
      case 1:
        return <ShieldCheck size={20} className="principle-icon" />;
      case 2:
        return <HeartHandshake size={20} className="principle-icon" />;
      default:
        return <Compass size={20} className="principle-icon" />;
    }
  };

  return (
    <section className="section about-section" id="about" aria-label="About the Designer">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Personal Narrative */}
          <div className="about-narrative">
            <span className="section-tag">About &bull; Independent Studio</span>
            <h2 className="section-title">{PORTFOLIO_CONFIG.about.headline}</h2>

            <div className="narrative-body">
              {PORTFOLIO_CONFIG.about.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>

            {/* Direct Studio Focus Callout */}
            <div className="profile-editable-callout" role="note">
              <span className="callout-pill">Direct Collaboration</span>
              <p className="callout-text">
                Every project is designed and built personally by Hariom Upadhyay. From initial visual direction to mobile-first coding and domain handover, you work directly with your designer.
              </p>
            </div>
          </div>

          {/* Right Column: Values & Core Philosophy */}
          <div className="about-principles-col">
            <div className="principles-card editorial-card">
              <h3 className="principles-card-title">How I Approach Every Property</h3>

              <div className="principles-list">
                {PORTFOLIO_CONFIG.about.principles.map((pr, idx) => (
                  <div key={idx} className="principle-item">
                    <div className="principle-icon-wrapper">
                      {getPrincipleIcon(idx)}
                    </div>
                    <div className="principle-info">
                      <h4 className="principle-title">{pr.title}</h4>
                      <p className="principle-desc">{pr.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Pill */}
              <div className="studio-status-box">
                <div className="status-indicator">
                  <span className="status-dot-active" aria-hidden="true" />
                  <span className="status-text">{PORTFOLIO_CONFIG.brand.availability}</span>
                </div>
                <span className="status-sub">Based in {PORTFOLIO_CONFIG.brand.location} &bull; Remote PAN-India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
