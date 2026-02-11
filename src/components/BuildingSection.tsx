export default function BuildingSection() {
  return (
    <section>
      <div className="label">Now</div>
      <div className="section-title">What I&apos;m building right now</div>
      <div className="build-grid">
        <div className="build-card">
          <div className="build-card-badge">Live</div>
          <h3>A/B Testing Platform</h3>
          <p>Rapid experimentation tool for UX patterns at Natera. Built with Claude Code + Streamlit. Tests design system changes before shipping to 50+ labs.</p>
          <a href="https://ux-ab-testing-tool-9e3xgawoz47zjwcsdjrzwv.streamlit.app/" target="_blank" rel="noopener noreferrer" className="card-link">Try it ↗</a>
        </div>
        <div className="build-card">
          <div className="build-card-badge">Live</div>
          <h3>Design System Dashboard</h3>
          <p>Pulls component usage from Figma&apos;s API. Shows adoption rates, consistency metrics, time savings. Built to prove UX ROI in numbers execs understand.</p>
        </div>
        <div className="build-card">
          <div className="build-card-badge">Live</div>
          <h3>Women&apos;s Health, Computed</h3>
          <p>My Substack. Academic HCI research translated into accessible analysis. Perimenopause wearables, femtech landscape, whose bodies health tech serves.</p>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer" className="card-link">Read ↗</a>
        </div>
        <div className="build-card">
          <div className="build-card-badge concept">Concept</div>
          <h3>Menopause Companion App</h3>
          <p>Somaesthetic design principles from my PhD → actual product. A digital companion that respects ambiguity instead of optimizing it away. Early stage.</p>
        </div>
      </div>
    </section>
  );
}
