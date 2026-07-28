import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactBlock() {
  return (
    <>
      <div className="contact-block">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <h2>Let&apos;s chat.</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="contact-links">
              <a href="mailto:sainz.nag@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://womenshealthcomputed.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
              <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
              <a href="/adriana-navarro-sainz-resume.pdf" target="_blank" rel="noopener noreferrer">Resume &darr;</a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
