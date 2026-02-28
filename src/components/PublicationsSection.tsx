import AnimateOnScroll from "./AnimateOnScroll";

const pubs = [
  { name: "MTXPK.org: A Clinical Decision Support Tool Evaluating High-Dose Methotrexate Pharmacokinetics", where: "CPT", href: "https://ascpt.onlinelibrary.wiley.com/doi/full/10.1002/cpt.1957" },
  { name: "Crafting Digital Experiences for Feminine Stress-care: An Exploratory Approach", where: "CHI EA 2020", href: "https://dl.acm.org/doi/abs/10.1145/3334480.3382997" },
  { name: "Usability of human-computer interaction in neonatal care", where: "Early Human Dev.", href: "https://www.sciencedirect.com/science/article/pii/S1744165X22000749" },
  { name: "Unified Patient Portal: Engaging patients throughout the genetic testing journey", where: "Natera", href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6ec-wJ8AAAAJ&citation_for_view=6ec-wJ8AAAAJ:roLk4NBRz8UC" },
  { name: "Caring through Conversations: Voice User Interfaces For Everyday Stress Care", where: "DIS 2022", href: "https://dl.acm.org/doi/abs/10.1145/3565494.3565495" },
  { name: "Systems and methods for in-flight crew assistance", where: "US Patent US10775793", href: "https://patents.google.com/patent/US10775793" },
  { name: "Women\u2019s Health Digital Interventions in Latin America", where: "DIS 2026 \u2731", href: undefined },
  { name: "HCI for Women\u2019s Health: Digital Interventions for Navigating Menopause", where: "Dissertation", href: "http://rave.ohiolink.edu/etdc/view?acc_num=ucin1746535132778724" },
  { name: "UX in Pediatric Biomedical Informatics", where: "Talk \u00b7 2021", href: "https://youtu.be/XXirvW5lCKY?feature=shared" },
];

export default function PublicationsSection() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Published</div>
        <div className="section-title">Papers, patent, talks</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        {pubs.map((p, i) => (
          <div className="pub" key={i}>
            <span className="pub-name">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
              ) : (
                p.name
              )}
            </span>
            <span className="pub-where">{p.where}</span>
          </div>
        ))}
      </AnimateOnScroll>
    </section>
  );
}
