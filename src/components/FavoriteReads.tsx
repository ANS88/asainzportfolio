import AnimateOnScroll from "./AnimateOnScroll";

const books = [
  { title: "Designing for the Digital Age", author: "Kim Goodwin", tag: "Design" },
  { title: "The Design of Everyday Things", author: "Don Norman", tag: "Design" },
  { title: "Technically Wrong", author: "Sara Wachter-Boettcher", tag: "Tech ethics" },
  { title: "Invisible Women", author: "Caroline Criado Perez", tag: "Health equity" },
  { title: "Doing Things with Words", author: "J.L. Austin", tag: "Philosophy" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", tag: "Psychology" },
];

const articles = [
  { title: "The Moral Economy of Tech", author: "Maciej Ceglowski", tag: "Essay" },
  { title: "Research as Ceremony", author: "Shawn Wilson", tag: "Methodology" },
  { title: "Somaesthetic Appreciation Design", author: "Kristina Höök", tag: "HCI" },
  { title: "The Oregon Experiment", author: "Christopher Alexander", tag: "Systems" },
  { title: "Who Gets to Be Healthy?", author: "Virginia Eubanks", tag: "Health equity" },
];

export default function FavoriteReads() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Reading</div>
        <div className="section-title">Books and articles that shaped how I think</div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="reads-group">
          <div className="reads-heading">Books</div>
          {books.map((item, i) => (
            <div key={i} className="read-item">
              <div className="read-main">
                <span className="read-title">{item.title}</span>
                <span className="read-author">{item.author}</span>
              </div>
              <span className="read-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="reads-group" style={{ marginTop: "1.5rem" }}>
          <div className="reads-heading">Articles &amp; essays</div>
          {articles.map((item, i) => (
            <div key={i} className="read-item">
              <div className="read-main">
                <span className="read-title">{item.title}</span>
                <span className="read-author">{item.author}</span>
              </div>
              <span className="read-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
