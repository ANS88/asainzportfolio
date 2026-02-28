import AnimateOnScroll from "./AnimateOnScroll";

const books = [
  { title: "Designing for the Digital Age", author: "Kim Goodwin", tag: "Design", url: "https://www.goodreads.com/book/show/3880458-designing-for-the-digital-age" },
  { title: "The Design of Everyday Things", author: "Don Norman", tag: "Design", url: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things" },
  { title: "Technically Wrong", author: "Sara Wachter-Boettcher", tag: "Tech ethics", url: "https://www.goodreads.com/book/show/38212110-technically-wrong" },
  { title: "Invisible Women", author: "Caroline Criado Perez", tag: "Health equity", url: "https://www.goodreads.com/book/show/41104077-invisible-women" },
  { title: "Doing Things with Words", author: "J.L. Austin", tag: "Philosophy", url: "https://www.goodreads.com/book/show/333832.How_to_Do_Things_with_Words" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", tag: "Psychology", url: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow" },
];

const articles = [
  { title: "The Moral Economy of Tech", author: "Maciej Ceglowski", tag: "Essay", url: "https://idlewords.com/talks/sase_panel.htm" },
  { title: "Research as Ceremony", author: "Shawn Wilson", tag: "Methodology", url: "https://www.goodreads.com/book/show/5396504-research-is-ceremony" },
  { title: "Somaesthetic Appreciation Design", author: "Kristina Höök", tag: "HCI", url: "https://doi.org/10.1145/3025453.3025728" },
  { title: "The Oregon Experiment", author: "Christopher Alexander", tag: "Systems", url: "https://www.goodreads.com/book/show/616875.The_Oregon_Experiment" },
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
            <a
              key={i}
              className="read-item"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", display: "flex" }}
            >
              <div className="read-main">
                <span className="read-title">{item.title}</span>
                <span className="read-author">{item.author}</span>
              </div>
              <span className="read-tag">{item.tag}</span>
            </a>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="reads-group" style={{ marginTop: "1.5rem" }}>
          <div className="reads-heading">Articles &amp; essays</div>
          {articles.map((item, i) =>
            item.url ? (
              <a
                key={i}
                className="read-item"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", display: "flex" }}
              >
                <div className="read-main">
                  <span className="read-title">{item.title}</span>
                  <span className="read-author">{item.author}</span>
                </div>
                <span className="read-tag">{item.tag}</span>
              </a>
            ) : (
              <div key={i} className="read-item">
                <div className="read-main">
                  <span className="read-title">{item.title}</span>
                  <span className="read-author">{item.author}</span>
                </div>
                <span className="read-tag">{item.tag}</span>
              </div>
            )
          )}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
