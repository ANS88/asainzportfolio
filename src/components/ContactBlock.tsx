export default function ContactBlock() {
  return (
    <>
      <div className="contact-block">
        <div className="container">
          <h2>I&apos;m looking for the next hard problem.<br />Preferably one involving <em style={{ fontFamily: "var(--serif)", color: "var(--accent-soft)" }}>health, AI, or both.</em></h2>
          <div style={{ height: "1.5rem" }}></div>
          <div className="contact-links">
            <a href="mailto:sainz.nag@gmail.com">sainz.nag@gmail.com</a>
            <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack ↗</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-note">Made in San Francisco &middot; Built with curiosity and too much coffee &middot; v2.2026</div>
      </div>
    </>
  );
}
