import AnimateOnScroll from "./AnimateOnScroll";

interface Metric {
  value: string;
}

interface Finding {
  title: string;
  description: string;
}

interface DesignDecision {
  title: string;
  description: string;
}

interface Persona {
  role: string;
  description: string;
}

export interface CaseStudyData {
  // The Hook
  title: string;
  stakes: string;
  role: string;
  timeline: string;
  metrics: Metric[];
  heroImage?: string;

  // Context & Challenge
  problem: string;
  whyItMatters: string;
  constraint: string;

  // Research Approach
  whatIDid: string;
  methods: string[];
  methodologyNote?: { title: string; description: string };
  artifacts?: string[];

  // Key Findings
  findings: Finding[];

  // Design Strategy
  designPrinciple: string;
  whatWeBuilt: string;
  designDecisions: DesignDecision[];
  personas?: Persona[];

  // Validation & Iteration
  testingApproach: string;
  whatWeLearned: string;
  uatResults?: string;

  // Impact & Outcomes
  quantitativeImpact: string[];
  qualitativeImpact: string[];
  whatThisMeansForAI?: string;

  // Reflection
  whatILearned: string;
  whatIdDoDifferently: string;
  nextSteps?: string;

  // Footer
  team: string;
  myRole: string;
  timelineDetail: string;
}

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <div className="case-study">
      {/* ── THE HOOK ── */}
      <header className="cs-hook">
        <AnimateOnScroll animation="fade-in">
          <div className="label">Case Study</div>
          <h1 className="cs-title">{data.title}</h1>
          <p className="cs-stakes">{data.stakes}</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="cs-meta">
            <span>{data.role}</span>
            <span className="cs-meta-dot">&middot;</span>
            <span>{data.timeline}</span>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="cs-metrics">
            {data.metrics.map((m, i) => (
              <div key={i} className="cs-metric">
                <span className="cs-metric-check">&check;</span>
                <span>{m.value}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </header>

      {/* ── CONTEXT & CHALLENGE ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Context</div>
          <div className="section-title">The challenge</div>
        </AnimateOnScroll>
        <div className="cs-prose">
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>The clinical problem</h3>
              <p>{data.problem}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>Why this matters</h3>
              <p>{data.whyItMatters}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>The constraint</h3>
              <p>{data.constraint}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── RESEARCH APPROACH ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Research</div>
          <div className="section-title">Approach</div>
        </AnimateOnScroll>
        <div className="cs-prose">
          <AnimateOnScroll animation="fade-up">
            <p>{data.whatIDid}</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-method-list">
              {data.methods.map((m, i) => (
                <div key={i} className="cs-method-item">
                  <span className="cs-method-bullet" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          {data.methodologyNote && (
            <AnimateOnScroll animation="fade-up">
              <div className="cs-callout">
                <h4>{data.methodologyNote.title}</h4>
                <p>{data.methodologyNote.description}</p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* ── KEY FINDINGS ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Synthesis</div>
          <div className="section-title">Key findings</div>
        </AnimateOnScroll>
        <div className="cs-findings">
          {data.findings.map((f, i) => (
            <AnimateOnScroll key={i} animation="fade-up">
              <div className="cs-finding">
                <div className="cs-finding-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── DESIGN STRATEGY ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Design</div>
          <div className="section-title">Strategy</div>
        </AnimateOnScroll>
        <div className="cs-prose">
          <AnimateOnScroll animation="fade-up">
            <div className="cs-callout cs-callout-accent">
              <p>{data.designPrinciple}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <p>{data.whatWeBuilt}</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-decisions">
              {data.designDecisions.map((d, i) => (
                <div key={i} className="cs-decision">
                  <span className="cs-decision-num">{i + 1}.</span>
                  <div>
                    <strong>{d.title}</strong>
                    <span className="cs-decision-sep"> &mdash; </span>
                    <span>{d.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          {data.personas && data.personas.length > 0 && (
            <AnimateOnScroll animation="fade-up">
              <div className="cs-personas">
                <h4>Personas</h4>
                {data.personas.map((p, i) => (
                  <div key={i} className="cs-persona">
                    <strong>{p.role}:</strong> {p.description}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* ── VALIDATION ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Validation</div>
          <div className="section-title">Testing &amp; iteration</div>
        </AnimateOnScroll>
        <div className="cs-prose">
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>Testing approach</h3>
              <p>{data.testingApproach}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>What we learned</h3>
              <p>{data.whatWeLearned}</p>
            </div>
          </AnimateOnScroll>
          {data.uatResults && (
            <AnimateOnScroll animation="fade-up">
              <div className="cs-block">
                <h3>UAT results</h3>
                <p>{data.uatResults}</p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* ── IMPACT ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Impact</div>
          <div className="section-title">Outcomes</div>
        </AnimateOnScroll>
        <div className="cs-impact-grid">
          <AnimateOnScroll animation="fade-up">
            <div className="cs-impact-col">
              <h3>Quantitative</h3>
              {data.quantitativeImpact.map((q, i) => (
                <div key={i} className="cs-impact-item">
                  <span className="cs-metric-check">&check;</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-impact-col">
              <h3>Qualitative</h3>
              {data.qualitativeImpact.map((q, i) => (
                <div key={i} className="cs-impact-item">
                  <span className="cs-metric-check">&check;</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
        {data.whatThisMeansForAI && (
          <AnimateOnScroll animation="fade-up">
            <div className="cs-callout" style={{ marginTop: "1.5rem" }}>
              <h4>What this means for AI</h4>
              <p>{data.whatThisMeansForAI}</p>
            </div>
          </AnimateOnScroll>
        )}
      </section>

      {/* ── REFLECTION ── */}
      <hr className="section-line" />
      <section>
        <AnimateOnScroll>
          <div className="label">Reflection</div>
          <div className="section-title">Looking back</div>
        </AnimateOnScroll>
        <div className="cs-prose">
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>What I learned</h3>
              <p>{data.whatILearned}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="cs-block">
              <h3>What I&apos;d do differently</h3>
              <p>{data.whatIdDoDifferently}</p>
            </div>
          </AnimateOnScroll>
          {data.nextSteps && (
            <AnimateOnScroll animation="fade-up">
              <div className="cs-block">
                <h3>Next steps</h3>
                <p>{data.nextSteps}</p>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <hr className="section-line" />
      <AnimateOnScroll animation="fade-up">
        <footer className="cs-footer">
          <div className="cs-footer-item">
            <div className="cs-footer-label">Team</div>
            <div>{data.team}</div>
          </div>
          <div className="cs-footer-item">
            <div className="cs-footer-label">My role</div>
            <div>{data.myRole}</div>
          </div>
          <div className="cs-footer-item">
            <div className="cs-footer-label">Timeline</div>
            <div>{data.timelineDetail}</div>
          </div>
        </footer>
      </AnimateOnScroll>
    </div>
  );
}
