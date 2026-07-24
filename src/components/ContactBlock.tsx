import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactBlock() {
  return (
    <>
      <div className="contact-block">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <h2>Let&apos;s talk.</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="contact-links">
              <a href="mailto:sainz.nag@gmail.com">sainz.nag@gmail.com</a>
              <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
