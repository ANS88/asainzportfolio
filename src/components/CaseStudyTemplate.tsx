import AnimateOnScroll from "./AnimateOnScroll";
import type {
  CaseStudy,
  CaseStudySection as SectionType,
  CaseStudySectionContent,
} from "@/types/case-study";

/* ── Content Block Renderer ── */
function ContentBlock({ content }: { content: CaseStudySectionContent }) {
  switch (content.type) {
    case "text":
      return (
        <div
          className="cs-text-block"
          dangerouslySetInnerHTML={{ __html: content.data }}
        />
      );

    case "image":
      return (
        <figure className="cs-image-block">
          <img
            src={content.data.src}
            alt={content.data.alt}
            loading="lazy"
          />
          {content.data.caption && (
            <figcaption>{content.data.caption}</figcaption>
          )}
        </figure>
      );

    case "images":
      return (
        <div className="cs-images-grid">
          {content.data.map((img, i) => (
            <figure key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="cs-list-block">
          {content.data.title && <h4>{content.data.title}</h4>}
          <ul>
            {content.data.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );

    case "quote":
      return (
        <blockquote className="cs-quote-block">
          <p>{content.data.text}</p>
          {content.data.attribution && (
            <cite>{content.data.attribution}</cite>
          )}
        </blockquote>
      );

    case "metric":
      return (
        <div className="cs-inline-metric">
          <span className="cs-inline-metric-value">
            {content.data.value}
          </span>
          <span className="cs-inline-metric-label">
            {content.data.label}
          </span>
        </div>
      );

    case "video":
      return (
        <figure className="cs-video-block">
          {content.data.autoplay ? (
            <video
              src={content.data.src}
              autoPlay
              muted
              loop
              playsInline
              className="cs-video-autoplay"
            />
          ) : (
            <div className="cs-video-wrapper">
              <iframe
                src={content.data.src}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                loading="lazy"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          )}
          {content.data.caption && (
            <figcaption>{content.data.caption}</figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

/* ── Section Renderer ── */
function CaseStudySection({ section }: { section: SectionType }) {
  return (
    <>
      <hr className="section-line" />
      <section id={section.id} className={`cs-section cs-section-${section.type}`}>
        <AnimateOnScroll>
          <div className="section-title">{section.title}</div>
        </AnimateOnScroll>
        <div className="cs-section-body">
          {section.content.map((content, i) => (
            <AnimateOnScroll key={i} animation="fade-up">
              <ContentBlock content={content} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}

/* ── Main Template ── */
export default function CaseStudyTemplate({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <article className="case-study">
      {/* ── HERO ── */}
      <header className="cs-hook">
        <AnimateOnScroll animation="fade-in">
          <div className="label">Case Study</div>
          <h1 className="cs-title">{caseStudy.title}</h1>
          {caseStudy.shortTitle && (
            <p className="cs-subtitle">{caseStudy.shortTitle}</p>
          )}
          <p className="cs-stakes">{caseStudy.stakesLine}</p>
          {caseStudy.judgment && (
            <p className="cs-judgment">{caseStudy.judgment}</p>
          )}
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="cs-meta">
            <span>{caseStudy.role}</span>
            <span className="cs-meta-dot">&middot;</span>
            <span>{caseStudy.timeline}</span>
            <span className="cs-meta-dot">&middot;</span>
            <span>{caseStudy.company}</span>
          </div>
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div className="cs-hero-tags">
              {caseStudy.tags.map((tag) => (
                <span key={tag} className="cs-hero-tag">{tag}</span>
              ))}
            </div>
          )}
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="cs-impact-hero">
            {caseStudy.impact.map((item, i) => (
              <div key={i} className="cs-impact-hero-item">
                <div className="cs-impact-hero-value">{item.value}</div>
                <div className="cs-impact-hero-label">{item.metric}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {caseStudy.heroImage && (
          <AnimateOnScroll animation="fade-up" delay={300}>
            <figure className="cs-hero-image">
              <img
                src={caseStudy.heroImage.src}
                alt={caseStudy.heroImage.alt}
                loading="lazy"
              />
              {caseStudy.heroImage.caption && (
                <figcaption>{caseStudy.heroImage.caption}</figcaption>
              )}
            </figure>
          </AnimateOnScroll>
        )}
      </header>

      {/* ── DYNAMIC SECTIONS ── */}
      {caseStudy.sections.map((section) => (
        <CaseStudySection key={section.id} section={section} />
      ))}

      {/* ── FOOTER ── */}
      <hr className="section-line" />
      <AnimateOnScroll animation="fade-up">
        <footer className="cs-footer">
          {caseStudy.team && (
            <div className="cs-footer-item">
              <div className="cs-footer-label">Team</div>
              <div>{caseStudy.team.join(", ")}</div>
            </div>
          )}
          {caseStudy.myRole && (
            <div className="cs-footer-item">
              <div className="cs-footer-label">My role</div>
              <div>{caseStudy.myRole}</div>
            </div>
          )}
          {caseStudy.owned && (
            <div className="cs-footer-item">
              <div className="cs-footer-label">Ownership boundary</div>
              <div>{caseStudy.owned}</div>
            </div>
          )}
          <div className="cs-footer-item">
            <div className="cs-footer-label">Timeline</div>
            <div>{caseStudy.timeline}</div>
          </div>
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div className="cs-footer-item cs-footer-tags">
              <div className="cs-footer-label">Tags</div>
              <div className="cs-tag-list">
                {caseStudy.tags.map((tag) => (
                  <span key={tag} className="cs-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </footer>
      </AnimateOnScroll>
    </article>
  );
}
