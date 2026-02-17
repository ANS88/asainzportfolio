import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactBlock() {
  return (
    <>
      <div className="contact-block">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
          <h2>Building something in health and AI? <em style={{ fontFamily: "var(--serif)", color: "var(--accent-soft)" }}>Let&apos;s talk.</em></h2>
          </AnimateOnScroll>
          <div style={{ height: "1.5rem" }}></div>
          <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="contact-links">
            <a href="mailto:sainz.nag@gmail.com">sainz.nag@gmail.com</a>
            <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://calendar.app.google" target="_blank" rel="noopener noreferrer">Calendar ↗</a>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
      <div className="container">
        <div className="footer-note">Made in San Francisco &middot; Built with curiosity and too much coffee &middot; v2.2026</div>
      </div>
    </>
  );
}
