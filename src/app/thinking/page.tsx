import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactBlock from "@/components/ContactBlock";

const essays = [
  {
    label: "Position",
    title: "On AI health products",
    paragraphs: [
      "The current generation of AI health tools has a confidence problem. Not overconfidence in the product sense \u2014 though that\u2019s real \u2014 but a design failure at the specific moment when the system\u2019s certainty and the user\u2019s uncertainty collide.",
      "Clinical decision support research has known for decades that clinician trust in a tool is not determined by the tool\u2019s accuracy. It\u2019s determined by how the tool communicates its uncertainty. An AI system that presents a recommendation without surfacing its confidence interval, its training data limitations, or its edge case behavior is not a well-designed clinical tool.",
      "The interaction design work that matters most in AI health right now is not the chat interface. It\u2019s the handoff. How does an AI recommendation become a clinical decision? What does the designer owe the user at that moment?",
    ],
  },
  {
    label: "Position",
    title: "On femtech",
    paragraphs: [
      "Most femtech is built on a category error. It treats women\u2019s health data as something to be collected, aggregated, and returned as insight. The actual need \u2014 which four years of research with perimenopausal women made clear \u2014 is for tools that help women make sense of their own experience, not tools that surveil that experience and call it empowerment.",
      "The symptom tracker that asks you to rate your hot flash on a scale of 1 to 10 is not a health tool. It\u2019s a data extraction interface with a wellness aesthetic.",
      "I am not anti-technology in women\u2019s health. I am pro-technology that is honest about what it is and rigorous about what it does.",
    ],
  },
  {
    label: "Research",
    title: "On somaesthetic design",
    paragraphs: [
      "Somaesthetic design treats the user\u2019s felt experience \u2014 not their reported behavior, not their logged data \u2014 as the primary design material. In health technology, this is almost never done.",
      "A symptom tracking interface that feels clinical and extractive will produce different data than one designed to feel like reflection. The difference matters diagnostically.",
      "I developed somaesthetic design principles during my dissertation research that I believe have direct application to AI health product design. Currently preparing for publication at DIS 2026.",
    ],
  },
];

export default function Thinking() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Essays</div>
            <h1 className="page-title">Thinking</h1>
            <p className="page-desc">Working positions on healthcare design, AI health products, and femtech. Updated when the evidence changes.</p>
          </AnimateOnScroll>
        </div>

        {essays.map((essay, i) => (
          <div key={i}>
            <hr className="section-line" />
            <section>
              <AnimateOnScroll>
                <div className="label">{essay.label}</div>
                <div className="section-title">{essay.title}</div>
              </AnimateOnScroll>
              <div className="essay-body">
                {essay.paragraphs.map((p, j) => (
                  <AnimateOnScroll key={j} animation="fade-up">
                    <p>{p}</p>
                  </AnimateOnScroll>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>
      <ContactBlock />
    </>
  );
}
