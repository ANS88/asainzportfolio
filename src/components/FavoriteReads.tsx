import AnimateOnScroll from "./AnimateOnScroll";

const books = [
  { title: "Invisible Women", author: "Caroline Criado Perez", tag: "Health equity", url: "https://www.goodreads.com/book/show/41104077-invisible-women" },
  { title: "Design for Real Life", author: "Eric Meyer & Sara Wachter-Boettcher", tag: "Design", url: "https://www.goodreads.com/book/show/29420123-design-for-real-life" },
  { title: "Anatomy of an AI System", author: "Kate Crawford & Vladan Joler", tag: "AI ethics", url: "https://anatomyof.ai" },
  { title: "Observability Engineering", author: "Charity Majors, Liz Fong-Jones & George Miranda", tag: "Engineering", url: "https://www.goodreads.com/book/show/59039072-observability-engineering" },
  { title: "The Sense of Style", author: "Steven Pinker", tag: "Writing", url: "https://www.goodreads.com/book/show/20821371-the-sense-of-style" },
  { title: "The Society of Mind", author: "Marvin Minsky", tag: "Cognitive science", url: "https://www.goodreads.com/book/show/326790.The_Society_of_Mind" },
  { title: "Behave", author: "Robert Sapolsky", tag: "Biology", url: "https://www.goodreads.com/book/show/31170723-behave" },
  { title: "High Agency", author: "George Mack", tag: "Essay", url: "https://www.highagency.com/" },
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
    </section>
  );
}
