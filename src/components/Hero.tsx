import React from "react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left Column: Editorial Positioning & Copy */}
        <div className="hero-content">
          {/* Subtle Independent Designer Badge */}
          <div className="hero-badge">
            <span className="badge-pulse" aria-hidden="true"></span>
            <span className="badge-text">
              Independent Web Designer &bull; {PORTFOLIO_CONFIG.brand.location}
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="hero-headline">
            Digital homes for <span className="italic-accent">unforgettable stays.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-subheadline">
            {PORTFOLIO_CONFIG.brand.subheadline}
          </p>

          {/* Call to Actions */}
          <div className="hero-ctas">
            <a
              href="#contact"
              onClick={onOpenInquiry}
              className="btn btn-primary hero-btn-primary"
            >
              <span>{PORTFOLIO_CONFIG.brand.primaryCta}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            <a href="#work" className="btn btn-secondary hero-btn-secondary">
              <span>{PORTFOLIO_CONFIG.brand.secondaryCta}</span>
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Personality / Craft Detail (No fake claims) */}
          <div className="hero-meta-strip">
            <div className="meta-item">
              <Compass size={16} className="meta-icon" aria-hidden="true" />
              <div className="meta-text">
                <span className="meta-label">Specialization</span>
                <span className="meta-val">Villas &bull; Homestays &bull; Boutique Stays</span>
              </div>
            </div>

            <div className="meta-divider" aria-hidden="true" />

            <div className="meta-item">
              <Sparkles size={16} className="meta-icon" aria-hidden="true" />
              <div className="meta-text">
                <span className="meta-label">Approach</span>
                <span className="meta-val">Direct Bookings &bull; Mobile-First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Property Image Composition */}
        <div className="hero-visual">
          <div className="hero-visual-frame">
            <div className="main-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
                alt="Colonial-style boutique villa retreat veranda overlooking lush estate gardens"
                className="hero-main-img"
                loading="eager"
              />
              <div className="image-overlay-caption">
                <span className="caption-tag">Estate Identity</span>
                <span className="caption-title">Serein Stays, Coorg</span>
              </div>
            </div>

            {/* Overlapping Architectural Vignette Card */}
            <div className="hero-floating-card">
              <div className="floating-card-header">
                <span className="floating-card-dot" aria-hidden="true"></span>
                <span className="floating-card-badge">DIRECT BOOKING DESIGN</span>
              </div>
              <p className="floating-card-title">
                Crafted for guest trust & fast mobile inquiries.
              </p>
              <div className="floating-card-stats">
                <span className="stat-highlight">Direct Guest Inquiries</span>
                <span className="stat-sub">Frictionless WhatsApp &amp; email channels</span>
              </div>
            </div>

            {/* Secondary Accent Detail */}
            <div className="hero-stamp" aria-hidden="true">
              <span className="stamp-text">INDEPENDENT HOSPITALITY WEB DESIGN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
