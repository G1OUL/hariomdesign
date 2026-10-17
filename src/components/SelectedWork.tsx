import React from "react";
import { PORTFOLIO_CONFIG, type ProjectCaseStudy } from "../config/portfolio";
import { ArrowUpRight, MapPin, Eye } from "lucide-react";

interface SelectedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section className="section work-section" id="work" aria-label="Selected Work">
      <div className="container">
        {/* Section Header */}
        <div className="work-header">
          <div>
            <span className="section-tag">Portfolio &bull; Concept Projects</span>
            <h2 className="section-title">Selected Concept Stays</h2>
          </div>
          <p className="section-subtitle">
            Self-initiated design concepts exploring how independent Indian villas, boutique stays,
            and heritage homestays can elevate their digital presence and drive direct reservations.
          </p>
        </div>

        {/* Note on Concept Projects */}
        <div className="concept-notice-banner" role="note">
          <span className="notice-pill">Transparency Note</span>
          <p className="notice-text">
            These are self-initiated concept design case studies created to showcase visual direction,
            information architecture, and mobile booking experiences. They are not paid client commissions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {PORTFOLIO_CONFIG.projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card editorial-card"
              onClick={() => onSelectProject(project)}
            >
              {/* Image Frame */}
              <div className="project-image-box">
                <img
                  src={project.thumbnailImage}
                  alt={`${project.title} — ${project.propertyType} in ${project.location}`}
                  className="project-img"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="project-image-overlay">
                  <span className="project-view-pill">
                    <Eye size={15} />
                    <span>Explore Case Study</span>
                  </span>
                </div>
                <div className="project-badges-strip">
                  <span className="concept-badge">{project.badge}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-category">{project.propertyType}</span>
                  <div className="project-location">
                    <MapPin size={13} aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                {/* Palette Sneak Peek */}
                <div className="card-palette-row">
                  <span className="palette-label">Palette:</span>
                  <div className="swatch-dots" aria-label="Brand colors preview">
                    {project.designDirection.palette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="swatch-dot"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="project-footer-action">
                  <button
                    type="button"
                    className="btn-text-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    aria-label={`View full case study for ${project.title}`}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
