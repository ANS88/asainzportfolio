"use client";

import { useState } from "react";
import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactBlock from "@/components/ContactBlock";

const R = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="essay-ref">{children}</a>
);

const essays: { label: string; title: string; paragraphs: React.ReactNode[] }[] = [
  {
    label: "Position",
    title: "On AI health products",
    paragraphs: [
      "The current generation of AI health tools has a confidence problem. Not overconfidence in the product sense, but a design failure at the specific moment when the system's certainty and the user's uncertainty collide.",
      "Think about what it feels like to receive a confident recommendation from someone who won't show their work. A financial advisor who hands you a portfolio allocation without explaining their assumptions. A contractor who gives you a quote with no line items. Confidence without transparency doesn't build trust. It creates dependency. In healthcare, that dependency can cost someone their life.",
      <>This is not new territory. <R href="https://journals.sagepub.com/doi/10.1518/001872097778543886">Parasuraman and Riley's foundational work on automation and human performance (1997)</R> established that trust in a system is calibrated not by its accuracy but by how it communicates failure. Thirty years later, clinical AI products are still getting this wrong. A recommendation surfaced without a confidence interval, without training data context, without edge case behavior, is not a clinical tool. It's a guess in a clean UI. A weather app that says "it will rain" without telling you it's only 40% likely isn't giving you information. It's making your decision for you.</>,
      <><R href="https://dl.acm.org/doi/10.1145/3290605.3300234">Cai et al. (2019)</R> showed that clinicians want AI to behave like a colleague, not an oracle. To show its reasoning, acknowledge its limits, and leave room for disagreement. Think of how a good consultant works: they don't just hand you an answer, they walk you through how they got there and where they're less sure. Most health AI does the opposite. It presents conclusions. The interaction design work that matters most right now is not the chat interface. It's the handoff. How does an AI recommendation become a clinical decision? What does the designer owe the user at that moment?</>,
      "These are not rhetorical questions. They are the actual design brief that most health AI teams are not writing.",
    ],
  },
  {
    label: "Position",
    title: "On femtech",
    paragraphs: [
      "Most femtech is built on a category error. It treats women's health data as something to be collected, aggregated, and returned as insight. The actual need is for tools that help women make sense of their own experience, not tools that surveil that experience and call it empowerment.",
      <><R href="https://www.politybooks.com/bookdetail?book_slug=the-quantified-self--9781509500598">Lupton's work on the quantified self (2016)</R> is useful here: self-tracking technologies tend to reflect the values of their designers, not their users. In femtech, that gap is particularly visible. It's the difference between a travel app that tracks everywhere you've been and one that helps you figure out where you actually want to go. The symptom tracker that asks you to rate a hot flash on a scale of 1 to 10 is not a health tool. It's a data extraction interface with a wellness aesthetic.</>,
      "The field also has a literacy problem that it rarely acknowledges. Most femtech products are designed around the assumption that women want more data about their bodies. Some do. But what four years of diary study research with perimenopausal women taught me is that what most women actually want is context. Not a graph of their symptom frequency, but a way to understand what the pattern means, whether it's typical, whether it's changing, and what they might do about it. The difference between data and meaning is enormous. A training log that tells you your pace dropped doesn't tell you that you were fighting a headwind. The number is accurate. The picture is incomplete.",
      "My own research found that the most valued moments in symptom tracking were not data capture but sense-making, when a tool helped a woman connect an experience to a pattern she hadn't named yet. That is a design opportunity the field has largely ignored. I am not anti-technology in women's health. I am pro-technology that is honest about what it is and rigorous about what it does.",
    ],
  },
  {
    label: "Research",
    title: "On somaesthetic design",
    paragraphs: [
      "Somaesthetic design treats the body's felt experience as a site of knowledge, not just a source of data. In health technology, this distinction is almost never operationalized.",
      <><R href="https://academic.oup.com/jaac/article-abstract/57/3/299/6342209">Richard Shusterman</R>, whose philosophical framework underlies the approach, argues that the body is not simply an instrument we use to interact with the world. It is the medium through which we know the world. In design terms, this means that how an interface feels to use shapes what a person is able to express through it. A clinical intake form and a reflective journal can ask the same question and get completely different answers, not because the person changed, but because the container did.</>,
      <>The implication for interface design is significant. A symptom tracking interface that feels clinical and extractive will produce different data than one designed to feel like reflection, the same way a debrief conversation after a hard ride produces different insight than a spreadsheet of your splits. The form shapes what you're able to say. <R href="https://direct.mit.edu/books/monograph/4131/Designing-with-the-BodySomaesthetic-Interaction">Hook's work on somaesthetic interaction design (2018)</R> begins to bridge this gap, but application to health technology remains thin. Most digital health products are still designed as if the body is an input device and the interface is a form.</>,
      "My dissertation extended these frameworks into perimenopause symptom tracking, developing design principles grounded in embodied experience rather than behavioral logging. The core finding was that when the interface invited reflection rather than reporting, participants generated richer, more clinically useful descriptions of their symptoms and felt more agency over their own health narrative. The findings are currently being prepared for publication at DIS 2026.",
      "The short version: if the interface treats the body as an input device, it will miss most of what matters. A map is not the territory. A symptom log is not the symptom.",
    ],
  },
  {
    label: "Position",
    title: "On clinical decision support systems and UX",
    paragraphs: [
      "Clinical decision support systems are one of the oldest promises in health technology and one of its most consistent disappointments. The idea is sound: give clinicians the right information at the right moment, and they make better decisions. The execution is where things fall apart, and it falls apart almost entirely for design reasons, not clinical ones.",
      <>The central failure is alert fatigue. <R href="https://pubmed.ncbi.nlm.nih.gov/22269625/">On average, clinicians in a primary care setting receive over 56 alerts per day and spend nearly 49 minutes responding to them.</R> Think about what that means in practice. A clinician who gets interrupted 56 times a day by a system crying wolf eventually stops hearing it. <R href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1447540/">Studies report that between 33% and 96% of clinical alerts are ignored.</R> That is not a clinician problem. That is a design problem that has been handed to clinicians to absorb.</>,
      "The analogy that comes to mind is a car alarm in a city neighborhood. The first time you hear one, you look up. By the hundredth, it registers as background noise, even if one time in a hundred there actually is a thief. The alarm has trained you to ignore it. CDSS alerts, designed without care for frequency, timing, or relevance, do exactly the same thing. And the stakes are not a stolen car.",
      "Research comparing interruptive and noninterruptive clinical decision support has shown that CDS impact is often diminished by poor usability and insufficient integration into workflow, not by the quality of the underlying clinical knowledge. The knowledge is often good. The container is broken. A noninterruptive alert, surfaced in context rather than thrown across a clinician's workflow like a roadblock, performs differently precisely because it respects the work rather than fighting it.",
      <>This is where UX and patient safety converge in ways that are hard to overstate. Alert fatigue has been recognized as a major unintended consequence of EHR systems and a significant patient safety concern, with <R href="https://archive.boston.com/news/local/massachusetts/articles/2011/02/13/patient_alarms_often_unheard_unheeded/">one investigation finding that failure to attend to monitoring alarms contributed to more than 200 deaths over five years.</R> Design decisions that seem minor, when to interrupt, how to phrase a recommendation, what to show versus hide, are in practice decisions about whether a clinician notices something that matters.</>,
      "A systematic review of HCI elements in CDSS identifies twelve distinct interface factors that influence whether a system actually supports decision-making or simply adds noise. Visibility, explainability, user control, ease of use. These are not features. They are the difference between a system that augments clinical judgment and one that erodes it.",
      "What frustrates me about the field is that this is not new knowledge. We have known for decades how to design alerts that work. The problem is institutional, not technical: CDSS are often built by teams without UX research embedded in the process, deployed into workflows that were never mapped, and evaluated on adoption metrics rather than on whether clinicians trusted and used them well. The system ships. The alert fires. Nobody follows up on what happens at the moment of decision.",
      "That moment is where the work actually lives. Everything before it is preparation. Everything after it is consequence.",
    ],
  },
];

export default function Thinking() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Essays</div>
            <h1 className="page-title">Thinking</h1>
            <p className="page-desc">Working positions on healthcare design, clinical AI, and femtech &mdash; grounded in research and a decade of practice.</p>
          </AnimateOnScroll>
        </div>

        {essays.map((essay, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <hr className="section-line" />
              <section>
                <button
                  className="essay-toggle"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className="essay-toggle-left">
                    <div className="label">{essay.label}</div>
                    <div className="section-title">{essay.title}</div>
                  </div>
                  <span className={`essay-chevron${isOpen ? " essay-chevron--open" : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className={`essay-body-wrap${isOpen ? " essay-body-wrap--open" : ""}`}>
                  <div className="essay-body">
                    {essay.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
      <ContactBlock />
    </>
  );
}
