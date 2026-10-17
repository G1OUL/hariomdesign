import React, { useState, useEffect } from "react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
        role="banner"
      >
        <div className="container header-container">
          {/* Brand Wordmark */}
          <a href="#" className="brand-wordmark" aria-label={`${PORTFOLIO_CONFIG.brand.name} Home`}>
            <span className="brand-monogram">HU</span>
            <div className="brand-text">
              <span className="brand-name">{PORTFOLIO_CONFIG.brand.name}</span>
              <span className="brand-sub">Hospitality Web Designer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action CTA */}
          <div className="header-actions">
            <a
              href="#contact"
              onClick={onOpenInquiry}
              className="btn btn-primary btn-sm header-cta"
            >
              <span>{PORTFOLIO_CONFIG.brand.primaryCta}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer-overlay ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-drawer-header">
            <span className="brand-name">{PORTFOLIO_CONFIG.brand.name}</span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile menu">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <p className="mobile-drawer-tagline">
              Websites crafted for independent villas, homestays & boutique hotels in India.
            </p>
            <a
              href="#contact"
              className="btn btn-primary btn-mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
            >
              <span>{PORTFOLIO_CONFIG.brand.primaryCta}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
