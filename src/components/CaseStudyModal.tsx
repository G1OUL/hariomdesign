import React, { useState, useEffect, useRef } from "react";
import { type ProjectCaseStudy } from "../config/portfolio";
import {
  X,
  MapPin,
  Smartphone,
  Monitor,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "preview" | "decisions">("overview");
  const [devicePreviewMode, setDevicePreviewMode] = useState<"desktop" | "mobile">("desktop");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  // Focus trap / focus management
  useEffect(() => {
    if (project && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="concept-badge">{project.badge}</span>
            <span className="modal-prop-type">{project.propertyType}</span>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close case study details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="modal-hero">
          <div className="modal-hero-img-container">
            <img
              src={project.heroImage}
              alt={`${project.title} property showcase`}
              className="modal-hero-img"
            />
            <div className="modal-hero-overlay" />
          </div>

          <div className="modal-hero-content">
            <div className="modal-location-tag">
              <MapPin size={15} />
              <span>{project.location}</span>
            </div>
            <h2 id="case-study-title" className="modal-title">
              {project.title}
            </h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "overview"}
            className={`modal-tab ${activeTab === "overview" ? "is-active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Project Overview & Goals
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "preview"}
            className={`modal-tab ${activeTab === "preview" ? "is-active" : ""}`}
            onClick={() => setActiveTab("preview")}
          >
            Interactive Presentation
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "decisions"}
            className={`modal-tab ${activeTab === "decisions" ? "is-active" : ""}`}
            onClick={() => setActiveTab("decisions")}
          >
            Design Decisions & Rationale
          </button>
        </div>

        {/* Modal Body Based on Active Tab */}
        <div className="modal-body">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="tab-pane">
              <div className="overview-grid">
                <div className="overview-main">
                  <h3 className="section-subheading">Project Summary</h3>
                  <p className="body-text">{project.overview}</p>

                  <div className="goals-box">
                    <h4 className="box-title">Key Design Goals</h4>
                    <ul className="goals-list">
                      {project.goals.map((goal, idx) => (
                        <li key={idx} className="goal-item">
                          <CheckCircle2 size={18} className="goal-icon" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="section-subheading" style={{ marginTop: "32px" }}>
                    Intended Audience
                  </h3>
                  <p className="body-text">{project.intendedAudience}</p>
                </div>

                <div className="overview-sidebar">
                  <div className="spec-card">
                    <h4 className="spec-title">Design Direction</h4>

                    <div className="spec-group">
                      <span className="spec-label">Typography</span>
                      <p className="spec-value">{project.designDirection.typography}</p>
                    </div>

                    <div className="spec-group">
                      <span className="spec-label">Art Direction</span>
                      <p className="spec-value">{project.designDirection.artDirection}</p>
                    </div>

                    <div className="spec-group">
                      <span className="spec-label">Brand Color Palette</span>
                      <div className="palette-preview">
                        {project.designDirection.palette.map((color, idx) => (
                          <div key={idx} className="color-swatch-item">
                            <span
                              className="color-swatch"
                              style={{ backgroundColor: color.hex }}
                              title={`${color.name}: ${color.hex}`}
                            />
                            <span className="color-label">{color.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="modal-features-section">
                <h3 className="section-subheading">Included Hospitality Features</h3>
                <div className="features-grid">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="feature-card">
                      <div className="feature-icon-wrapper">
                        <Sparkles size={16} />
                      </div>
                      <h4 className="feature-title">{feat.title}</h4>
                      <p className="feature-desc">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="gallery-section">
                <h3 className="section-subheading">Property Visual Vignettes</h3>
                <div className="gallery-grid">
                  {project.galleryImages.map((imgUrl, idx) => (
                    <div key={idx} className="gallery-item">
                      <img
                        src={imgUrl}
                        alt={`${project.title} atmosphere detail ${idx + 1}`}
                        loading="lazy"
                        className="gallery-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PRESENTATION */}
          {activeTab === "preview" && (
            <div className="tab-pane">
              <div className="preview-controls">
                <span className="preview-label">Simulate Experience:</span>
                <div className="device-switcher" role="group" aria-label="Device view toggle">
                  <button
                    type="button"
                    className={`device-btn ${devicePreviewMode === "desktop" ? "is-active" : ""}`}
                    onClick={() => setDevicePreviewMode("desktop")}
                    aria-label="Desktop preview mode"
                  >
                    <Monitor size={16} />
                    <span>Desktop Layout</span>
                  </button>
                  <button
                    type="button"
                    className={`device-btn ${devicePreviewMode === "mobile" ? "is-active" : ""}`}
                    onClick={() => setDevicePreviewMode("mobile")}
                    aria-label="Mobile preview mode"
                  >
                    <Smartphone size={16} />
                    <span>Mobile Screen (375px)</span>
                  </button>
                </div>
              </div>

              {/* Simulated Device Frame */}
              <div className={`simulator-stage mode-${devicePreviewMode}`}>
                <div className="simulator-window">
                  {/* Browser chrome simulation */}
                  <div className="browser-chrome">
                    <div className="browser-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="browser-address">
                      <span>https://stays.{project.slug}.example.com</span>
                    </div>
                  </div>

                  {/* Rendered Mockup Content */}
                  <div className="simulator-content">
                    <div className="mockup-hero" style={{ backgroundImage: `url(${project.heroImage})` }}>
                      <div className="mockup-hero-veil">
                        <div className="mockup-badge">{project.propertyType}</div>
                        <h4 className="mockup-headline">{project.mockupPreview.desktopViewHeadline}</h4>
                        <p className="mockup-sub">{project.mockupPreview.desktopViewSubheadline}</p>
                        <div className="mockup-cta-row">
                          <span className="mockup-btn primary">Inquire on WhatsApp</span>
                          <span className="mockup-btn outline">View Cottages</span>
                        </div>
                      </div>
                    </div>

                    <div className="mockup-body-preview">
                      <div className="mockup-section-header">
                        <span className="mockup-eyebrow">Structured Information Architecture</span>
                        <h5 className="mockup-subheading">Core Website Modules</h5>
                      </div>

                      <div className="mockup-modules-list">
                        {project.mockupPreview.keySections.map((sec, idx) => (
                          <div key={idx} className="mockup-module-card">
                            <span className="module-idx">0{idx + 1}</span>
                            <span className="module-name">{sec}</span>
                          </div>
                        ))}
                      </div>

                      {devicePreviewMode === "mobile" && (
                        <div className="mobile-spec-callout">
                          <Smartphone size={18} />
                          <div>
                            <strong>Mobile Advantage:</strong> {project.mockupPreview.mobileHighlight}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DESIGN DECISIONS */}
          {activeTab === "decisions" && (
            <div className="tab-pane">
              <div className="decisions-intro">
                <h3 className="section-subheading">Strategic Rationale Behind This Concept</h3>
                <p className="body-text">
                  Great hospitality web design is never just decoration; it directly addresses guest
                  hesitation, reduces host support friction, and increases direct booking revenue.
                </p>
              </div>

              <div className="decisions-flow">
                {project.designDecisions.map((dec, idx) => (
                  <div key={idx} className="decision-card">
                    <div className="decision-num">0{idx + 1}</div>
                    <div className="decision-details">
                      <div className="decision-block">
                        <span className="decision-tag challenge">Identified Challenge</span>
                        <p className="decision-text">{dec.challenge}</p>
                      </div>

                      <div className="decision-block">
                        <span className="decision-tag solution">Design Solution</span>
                        <p className="decision-text">{dec.decision}</p>
                      </div>

                      <div className="decision-block">
                        <span className="decision-tag impact">Business Impact</span>
                        <p className="decision-text impact-text">{dec.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="modal-footer">
          <div className="modal-footer-info">
            <span className="footer-label">Want a similar website for your stay?</span>
            <span className="footer-sub">
              Delivered in 3–7 days with zero commissions on bookings.
            </span>
          </div>

          <button
            type="button"
            className="btn btn-terracotta btn-sm modal-cta-btn"
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
          >
            <span>Inquire About This Design</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
