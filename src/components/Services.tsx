import React from "react";
import { PORTFOLIO_CONFIG, type ServicePackage } from "../config/portfolio";
import { Check, ArrowRight, Info, Sparkles, Clock } from "lucide-react";

interface ServicesProps {
  onSelectService: (service: ServicePackage) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="section services-section" id="services" aria-label="Services and Pricing">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div>
            <span className="section-tag">Services &bull; Transparent Offerings</span>
            <h2 className="section-title">Designed for Independent Hosts</h2>
          </div>
          <p className="section-subtitle">
            Every package is structured specifically for Indian hospitality businesses — avoiding
            bloated agency retainers while delivering fast, mobile-friendly websites that convert
            visitors into direct inquiries.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="services-grid">
          {PORTFOLIO_CONFIG.services.map((pkg) => (
            <div
              key={pkg.id}
              className={`service-card editorial-card ${pkg.isPopular ? "is-featured" : ""}`}
            >
              {pkg.isPopular && (
                <div className="featured-ribbon">
                  <Sparkles size={14} />
                  <span>Most Requested by Homestays</span>
                </div>
              )}

              <div className="service-card-body">
                <div className="service-title-wrap">
                  <h3 className="service-title">{pkg.title}</h3>
                  <p className="service-tagline">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="service-price-box">
                  <div className="price-main">
                    <span className="price-currency">{pkg.startingPrice}</span>
                    <span className="price-suffix">/ starting estimate</span>
                  </div>
                  <span className="price-note">{pkg.priceNote}</span>
                </div>

                <p className="service-description">{pkg.description}</p>

                {/* Best For & Timeline */}
                <div className="service-quick-meta">
                  <div className="meta-badge-item">
                    <span className="meta-badge-label">Best for:</span>
                    <span className="meta-badge-value">{pkg.bestFor}</span>
                  </div>
                  <div className="meta-badge-item">
                    <Clock size={14} className="meta-badge-icon" />
                    <span className="meta-badge-value">{pkg.timeline}</span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="service-deliverables">
                  <h4 className="deliverables-heading">What is included:</h4>
                  <ul className="deliverables-list">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="deliverable-item">
                        <Check size={16} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Action Button */}
              <div className="service-card-footer">
                <button
                  type="button"
                  className={`btn ${pkg.isPopular ? "btn-terracotta" : "btn-primary"} btn-service`}
                  onClick={() => onSelectService(pkg)}
                  aria-label={`Inquire about ${pkg.title}`}
                >
                  <span>Select {pkg.title}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Pricing Disclaimer Box */}
        <div className="pricing-disclaimer-box" role="note">
          <div className="disclaimer-icon-wrapper">
            <Info size={20} />
          </div>
          <div className="disclaimer-content">
            <h4 className="disclaimer-title">Fair & Honest Pricing Policy</h4>
            <p className="disclaimer-text">{PORTFOLIO_CONFIG.pricingDisclaimer.note}</p>
            <p className="disclaimer-exclusions">{PORTFOLIO_CONFIG.pricingDisclaimer.exclusions}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
