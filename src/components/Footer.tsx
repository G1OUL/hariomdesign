import React from "react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Footer Top Banner */}
        <div className="footer-cta-banner">
          <div className="footer-cta-text">
            <span className="footer-pill">Direct Bookings &bull; Editorial Stays</span>
            <h3 className="footer-banner-heading">
              Ready to give your hospitality property the digital home it deserves?
            </h3>
            <p className="footer-banner-sub">
              Introductory rates starting from ₹3,000. Delivered in days, not months.
            </p>
          </div>

          <div className="footer-cta-actions">
            <a href="#contact" className="btn btn-terracotta">
              <span>{PORTFOLIO_CONFIG.brand.primaryCta}</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-wordmark">
              <span className="brand-monogram">H</span>
              <span className="footer-brand-name">{PORTFOLIO_CONFIG.brand.name}</span>
            </div>
            <p className="footer-desc">
              Independent website designer specializing in villas, homestays, boutique hotels, and
              holiday stays across India.
            </p>
            <span className="footer-location-tag">Based in {PORTFOLIO_CONFIG.brand.location} &bull; Remote PAN-India</span>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#work">Selected Work</a></li>
              <li><a href="#services">Services &amp; Pricing</a></li>
              <li><a href="#process">4-Step Process</a></li>
              <li><a href="#about">About &amp; Philosophy</a></li>
              <li><a href="#contact">Contact &amp; Inquiries</a></li>
            </ul>
          </div>

          {/* Hospitality Concepts */}
          <div className="footer-col">
            <h4 className="footer-heading">Concept Stays</h4>
            <ul className="footer-nav-list">
              {PORTFOLIO_CONFIG.projects.map((proj) => (
                <li key={proj.id}>
                  <a href="#work">{proj.title} ({proj.location})</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="footer-col">
            <h4 className="footer-heading">Inquiries</h4>
            <ul className="footer-nav-list">
              <li>
                <a href={`mailto:${PORTFOLIO_CONFIG.contact.email}`} className="footer-link">
                  {PORTFOLIO_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <span className="footer-note">Response within 24 hours</span>
              </li>
              <li>
                <a href="#contact" className="footer-link-highlight">
                  Build Custom Inquiry &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {CURRENT_YEAR} {PORTFOLIO_CONFIG.brand.name}. All rights reserved. Self-initiated concept projects are marked as concepts.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
