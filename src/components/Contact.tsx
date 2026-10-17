import React, { useState } from "react";
import { PORTFOLIO_CONFIG, type ServicePackage } from "../config/portfolio";
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  HelpCircle,
} from "lucide-react";

interface ContactProps {
  preselectedService?: ServicePackage | null;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("Private Villa");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [userSelectedService, setUserSelectedService] = useState<string | null>(null);
  const [timeline, setTimeline] = useState("Within 1–2 weeks");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedService =
    userSelectedService ??
    preselectedService?.title ??
    PORTFOLIO_CONFIG.services[0].title;

  // Construct structured inquiry text
  const inquiryMessage = `Hello ${PORTFOLIO_CONFIG.brand.name},

I'm inquiring about a website for my hospitality property:
• Property Name: ${propertyName.trim() ? propertyName.trim() : "[Not specified]"}
• Property Type: ${propertyType}
• Location: ${propertyLocation.trim() ? propertyLocation.trim() : "[Not specified]"}
• Desired Service: ${selectedService}
• Target Timeline: ${timeline}
${notes.trim() ? `• Additional Details: ${notes.trim()}\n` : ""}
Looking forward to discussing your thoughts and availability.`;

  const emailSubject = `Website Inquiry: ${propertyName.trim() || propertyType} — ${selectedService}`;

  // Generate mailto link
  const mailtoLink = `mailto:${PORTFOLIO_CONFIG.contact.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(inquiryMessage)}`;

  // Generate direct WhatsApp link
  const whatsappUrl = `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappCleanNumber}?text=${encodeURIComponent(
    inquiryMessage
  )}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(inquiryMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section contact-section" id="contact" aria-label="Contact and Inquiries">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <div>
            <span className="section-tag">Start a Conversation</span>
            <h2 className="section-title">Let's Discuss Your Stay's Website</h2>
          </div>
          <p className="section-subtitle">
            Whether you are opening a new homestay or modernizing an established private villa,
            I would love to learn about your property. Select your requirements below to create an
            instant email or WhatsApp inquiry.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Interactive Inquiry Builder */}
          <div className="inquiry-builder-card editorial-card">
            <div className="builder-header">
              <div className="builder-badge">
                <Sparkles size={14} />
                <span>Interactive Inquiry Assistant</span>
              </div>
              <h3 className="builder-title">Tell Me About Your Property</h3>
              <p className="builder-sub">
                Fill in the details below to generate a pre-formatted inquiry ready to send directly.
              </p>
            </div>

            <form
              className="inquiry-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoLink;
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="prop-name" className="form-label">
                    Property Name (Optional)
                  </label>
                  <input
                    id="prop-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Cloud Valley Homestay"
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="prop-type" className="form-label">
                    Property Type
                  </label>
                  <select
                    id="prop-type"
                    className="form-select"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="Private Villa">Private Villa / Pool House</option>
                    <option value="Boutique Homestay">Heritage / Plantation Homestay</option>
                    <option value="Holiday Cottage">Boutique Cottage / Cabin</option>
                    <option value="Boutique Hotel">Boutique Hotel / B&amp;B</option>
                    <option value="Glamping & Nature Stay">Eco / Glamping Sanctuary</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="prop-location" className="form-label">
                    Location / Destination
                  </label>
                  <input
                    id="prop-location"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Coorg, Alibaug, Munnar, Goa..."
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="prop-service" className="form-label">
                    Service Package
                  </label>
                  <select
                    id="prop-service"
                    className="form-select"
                    value={selectedService}
                    onChange={(e) => setUserSelectedService(e.target.value)}
                  >
                    {PORTFOLIO_CONFIG.services.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title} ({svc.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="prop-timeline" className="form-label">
                  Desired Timeline
                </label>
                <select
                  id="prop-timeline"
                  className="form-select"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                >
                  <option value="Ready to start immediately">Ready to start immediately (Urgent)</option>
                  <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                  <option value="Within 1 month">Within the next month</option>
                  <option value="Just planning ahead / Exploring">Just planning ahead / Exploring options</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="prop-notes" className="form-label">
                  Additional Details or Existing Links (Optional)
                </label>
                <textarea
                  id="prop-notes"
                  className="form-textarea"
                  rows={3}
                  placeholder="Tell me about your property, current booking link (Airbnb/Instagram), or specific requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {/* Action Buttons: Direct Email, WhatsApp & Copy */}
              <div className="inquiry-actions-row">
                <a
                  href={mailtoLink}
                  className="btn btn-primary form-action-btn"
                  title="Open in your default email client"
                >
                  <Mail size={17} />
                  <span>Send via Email Client</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-terracotta form-action-btn"
                  title="Discuss on WhatsApp"
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="btn btn-secondary form-copy-btn"
                  title="Copy pre-composed message to clipboard"
                  aria-label="Copy inquiry message"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? "Copied!" : "Copy Text"}</span>
                </button>
              </div>

              <p className="form-footnote">
                No third-party forms or spam. Clicking above creates a ready-to-send draft directly in your preferred app.
              </p>
            </form>
          </div>

          {/* Right Column: Direct Contact Info & Setup Notice */}
          <div className="contact-details-col">
            {/* Direct Info Card */}
            <div className="contact-info-card editorial-card">
              <h3 className="contact-info-title">Direct Contact Information</h3>
              <p className="contact-info-sub">
                Reach out directly via email or WhatsApp to check my availability for your property.
              </p>

              <div className="direct-links-list">
                <div className="direct-link-item">
                  <div className="direct-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="direct-link-content">
                    <span className="direct-link-label">Direct Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}
                      className="direct-link-val link-underline"
                    >
                      {PORTFOLIO_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="direct-link-item">
                  <div className="direct-icon-box">
                    <MessageCircle size={18} />
                  </div>
                  <div className="direct-link-content">
                    <span className="direct-link-label">WhatsApp (Chat Only)</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="direct-link-val link-underline"
                    >
                      {PORTFOLIO_CONFIG.contact.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="direct-link-item">
                  <div className="direct-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="direct-link-content">
                    <span className="direct-link-label">Location</span>
                    <span className="direct-link-val">{PORTFOLIO_CONFIG.contact.location}</span>
                  </div>
                </div>

                <div className="direct-link-item">
                  <div className="direct-icon-box">
                    <Clock size={18} />
                  </div>
                  <div className="direct-link-content">
                    <span className="direct-link-label">Response Time</span>
                    <span className="direct-link-val">Within 24 business hours</span>
                  </div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="social-links-section">
                <span className="social-section-label">Professional Profiles</span>
                <div className="social-links-row">
                  {Object.entries(PORTFOLIO_CONFIG.contact.socialLinks).map(([network, url]) => {
                    if (!url) return null;
                    const displayName = network === "github" ? "GitHub" : network === "linkedin" ? "LinkedIn" : network;
                    return (
                      <a
                        key={network}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-pill"
                        aria-label={`Visit ${PORTFOLIO_CONFIG.brand.name} on ${displayName}`}
                        title={`${displayName} Profile`}
                      >
                        <span className="social-name">{displayName}</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direct Client Guarantee */}
            <div className="contact-helper-box" role="note">
              <div className="helper-box-header">
                <HelpCircle size={17} />
                <h4>Direct Collaboration Guarantee</h4>
              </div>
              <p>
                All inquiries reach Hariom Upadhyay directly. You receive a personalized reply within 24 hours with transparent pricing and clear deliverables—no agencies, automated bots, or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
