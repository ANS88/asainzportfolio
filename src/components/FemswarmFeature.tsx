import AnimateOnScroll from "./AnimateOnScroll";
import { asset } from "@/lib/asset";

const AGENTS = ["Trota", "Elion", "Lamarr", "Walker", "Wells"];

export default function FemswarmFeature() {
  return (
    <section className="femswarm-feature">
      <AnimateOnScroll animation="fade-up">
        <a
          href={asset("/femswarm")}
          target="_blank"
          rel="noopener noreferrer"
          className="femswarm-card"
        >
          <div className="femswarm-media">
            <img
              src={asset("/images/playground/femswarm-preview.png")}
              alt="femswarm: five illustrated AI research agents, Trota, Elion, Lamarr, Walker, and Wells"
              loading="lazy"
            />
          </div>
          <div className="femswarm-body">
            <div className="label">Now running &middot; AI agents</div>
            <h3 className="femswarm-title">femswarm</h3>
            <p className="femswarm-desc">
              A swarm of AI research agents, each named for a woman who changed history, that
              scouts new papers, clinical trials, product launches, and funding in women&rsquo;s
              health every week for my Substack, <em>Women&rsquo;s Health, Computed</em>.
            </p>
            <ul className="femswarm-agents" aria-label="The agents">
              {AGENTS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <span className="view-all-link">Read this week&rsquo;s edition &rarr;</span>
          </div>
        </a>
      </AnimateOnScroll>
    </section>
  );
}
