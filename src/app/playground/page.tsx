import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactBlock from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Playground, Adriana Navarro Sainz",
  description:
    "Experiments, side projects, and things I'm building outside of work.",
  openGraph: {
    description:
      "Experiments, side projects, and things I'm building outside of work.",
  },
  twitter: {
    description:
      "Experiments, side projects, and things I'm building outside of work.",
  },
};

const experiments = [
  {
    title: "Menopause Is Hot Now",
    description: "An interactive exploration of posting activity in the menopause subreddit.",
    url: "https://menopauseishotnow.vercel.app/",
    image: "/images/playground/menopause-demo-640.gif",
    tags: ["Data viz", "Reddit", "Menopause"],
  },
];

export default function Playground() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Experiments</div>
            <h1 className="page-title">Playground</h1>
            <p className="page-desc">Side projects, prototypes, and ideas I'm exploring outside of client work.</p>
          </AnimateOnScroll>
        </div>
        <hr className="section-line" />

        <section>
          <div className="playground-grid">
            {experiments.map((exp) => (
              <AnimateOnScroll key={exp.title} animation="fade-up">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playground-card"
                >
                  {exp.image && (
                    <div className="playground-card-image">
                      <img src={exp.image} alt={exp.title} loading="lazy" />
                    </div>
                  )}
                  <div className="playground-card-body">
                    <div className="playground-card-title">{exp.title}</div>
                    <p className="playground-card-desc">{exp.description}</p>
                    <div className="playground-card-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="playground-tag">{tag}</span>
                      ))}
                    </div>
                    <span className="playground-card-link">View experiment &rarr;</span>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </div>
      <ContactBlock />
    </>
  );
}
