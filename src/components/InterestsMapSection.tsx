export default function InterestsMapSection() {
  return (
    <section>
      <div className="label">Interests map</div>
      <div className="section-title">How my worlds connect</div>
      <div className="map-wrap">
        <svg viewBox="0 0 800 520" style={{ width: "100%", height: "auto", display: "block" }}>
          {/* Connection lines */}
          <g stroke="#e7e5e4" strokeWidth="1.5" fill="none">
            <line x1="400" y1="260" x2="200" y2="130" /><line x1="400" y1="260" x2="600" y2="130" />
            <line x1="400" y1="260" x2="150" y2="320" /><line x1="400" y1="260" x2="650" y2="320" />
            <line x1="400" y1="260" x2="260" y2="450" /><line x1="400" y1="260" x2="540" y2="450" />
            <line x1="200" y1="130" x2="150" y2="320" strokeDasharray="4,4" />
            <line x1="600" y1="130" x2="650" y2="320" strokeDasharray="4,4" />
            <line x1="200" y1="130" x2="600" y2="130" strokeDasharray="4,4" />
            <line x1="150" y1="320" x2="260" y2="450" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="540" y2="450" strokeDasharray="4,4" />
            <line x1="260" y1="450" x2="540" y2="450" strokeDasharray="4,4" />
            {/* Satellites */}
            <line x1="200" y1="130" x2="80" y2="55" stroke="#f0ebe3" /><line x1="200" y1="130" x2="290" y2="45" stroke="#f0ebe3" />
            <line x1="600" y1="130" x2="710" y2="55" stroke="#f0ebe3" /><line x1="600" y1="130" x2="505" y2="50" stroke="#f0ebe3" />
            <line x1="150" y1="320" x2="48" y2="380" stroke="#f0ebe3" /><line x1="150" y1="320" x2="55" y2="240" stroke="#f0ebe3" />
            <line x1="650" y1="320" x2="752" y2="250" stroke="#f0ebe3" /><line x1="650" y1="320" x2="755" y2="385" stroke="#f0ebe3" />
            <line x1="260" y1="450" x2="145" y2="495" stroke="#f0ebe3" />
            <line x1="540" y1="450" x2="645" y2="495" stroke="#f0ebe3" /><line x1="540" y1="450" x2="445" y2="505" stroke="#f0ebe3" />
          </g>
          {/* Satellite nodes */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#a8a29e" textAnchor="middle">
            <circle cx="80" cy="55" r="16" fill="white" stroke="#e7e5e4" /><text x="80" y="58" fill="#78716c">Natera</text>
            <circle cx="290" cy="45" r="16" fill="white" stroke="#e7e5e4" /><text x="290" y="48" fill="#78716c">CCHMC</text>
            <circle cx="505" cy="50" r="16" fill="white" stroke="#e7e5e4" /><text x="505" y="53" fill="#78716c">Claude</text>
            <circle cx="710" cy="55" r="16" fill="white" stroke="#e7e5e4" /><text x="710" y="58" fill="#78716c">Figma</text>
            <circle cx="55" cy="240" r="16" fill="white" stroke="#e7e5e4" /><text x="55" y="243" fill="#78716c">Diary</text>
            <circle cx="48" cy="380" r="16" fill="white" stroke="#e7e5e4" /><text x="48" y="383" fill="#78716c">Oura</text>
            <circle cx="752" cy="250" r="16" fill="white" stroke="#e7e5e4" /><text x="752" y="253" fill="#78716c">Sara A.</text>
            <circle cx="755" cy="385" r="16" fill="white" stroke="#e7e5e4" /><text x="755" y="388" fill="#78716c">Web3</text>
            <circle cx="145" cy="495" r="16" fill="white" stroke="#e7e5e4" /><text x="145" y="498" fill="#78716c">Wine</text>
            <circle cx="445" cy="505" r="16" fill="white" stroke="#e7e5e4" /><text x="445" y="508" fill="#78716c">LatAm</text>
            <circle cx="645" cy="495" r="16" fill="white" stroke="#e7e5e4" /><text x="645" y="498" fill="#78716c">Music</text>
          </g>
          {/* Primary nodes */}
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank"><g>
            <circle cx="200" cy="130" r="34" fill="#fef7ed" stroke="#c2410c" strokeWidth="2" className="node-hover" />
            <text x="200" y="125" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Healthcare</text>
            <text x="200" y="138" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">UX</text>
          </g></a>
          <a href="https://ux-ab-testing-tool-9e3xgawoz47zjwcsdjrzwv.streamlit.app/" target="_blank"><g>
            <circle cx="600" cy="130" r="34" fill="#fef7ed" stroke="#c2410c" strokeWidth="2" className="node-hover" />
            <text x="600" y="125" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">AI +</text>
            <text x="600" y="138" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Building</text>
          </g></a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank"><g>
            <circle cx="150" cy="320" r="34" fill="#fef7ed" stroke="#c2410c" strokeWidth="2" className="node-hover" />
            <text x="150" y="315" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">{"Women's"}</text>
            <text x="150" y="328" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Health</text>
          </g></a>
          <a href="http://rave.ohiolink.edu/etdc/view?acc_num=ucin1746535132778724" target="_blank"><g>
            <circle cx="650" cy="320" r="34" fill="#fef7ed" stroke="#c2410c" strokeWidth="2" className="node-hover" />
            <text x="650" y="315" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Embodied</text>
            <text x="650" y="328" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Design</text>
          </g></a>
          <a href="https://www.athenadao.co/" target="_blank"><g>
            <circle cx="260" cy="450" r="34" fill="#fef7ed" stroke="#c2410c" strokeWidth="2" className="node-hover" />
            <text x="260" y="445" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Community</text>
            <text x="260" y="458" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">+ Life</text>
          </g></a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank"><g>
            <circle cx="540" cy="450" r="34" fill="#fef7ed" stroke="#c2410c" strokeWidth="2" className="node-hover" />
            <text x="540" y="445" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Writing +</text>
            <text x="540" y="458" textAnchor="middle" fill="#c2410c" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">Culture</text>
          </g></a>
          {/* Center node */}
          <circle cx="400" cy="260" r="48" fill="#c2410c" stroke="#991b06" strokeWidth="2.5" />
          <text x="400" y="253" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif">Adriana</text>
          <text x="400" y="270" textAnchor="middle" fill="#fed7aa" fontSize="8.5" fontFamily="JetBrains Mono, monospace">PhD &middot; Builder &middot; SF</text>
        </svg>
      </div>

      {/* Social network cards */}
      <div className="social-grid">
        <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#0a66c2" }}>in</div>
          <div className="sc-body">
            <div className="sc-name">LinkedIn</div>
            <div className="sc-handle">@adrianans</div>
            <div className="sc-desc">Healthcare UX, career, industry connections</div>
          </div>
        </a>
        <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#ff6719" }}>✎</div>
          <div className="sc-body">
            <div className="sc-name">Substack</div>
            <div className="sc-handle">Women&apos;s Health, Computed</div>
            <div className="sc-desc">Academic HCI → accessible health tech analysis</div>
          </div>
        </a>
        <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#4285f4" }}>G</div>
          <div className="sc-body">
            <div className="sc-name">Google Scholar</div>
            <div className="sc-handle">6 papers &middot; 1 patent</div>
            <div className="sc-desc">Peer-reviewed HCI and health research</div>
          </div>
        </a>
        <a href="https://www.athenadao.co/" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#7c3aed" }}>Ξ</div>
          <div className="sc-body">
            <div className="sc-name">AthenaDAO</div>
            <div className="sc-handle">Dealflow Fellow</div>
            <div className="sc-desc">Evaluating women&apos;s health research proposals</div>
          </div>
        </a>
        <a href="mailto:sainz.nag@gmail.com" className="social-card">
          <div className="sc-icon" style={{ background: "#1c1917" }}>@</div>
          <div className="sc-body">
            <div className="sc-name">Email</div>
            <div className="sc-handle">sainz.nag@gmail.com</div>
            <div className="sc-desc">Best way to reach me</div>
          </div>
        </a>
      </div>

      <div style={{ marginTop: "1rem", fontFamily: "var(--hand)", fontSize: "1.05rem", color: "var(--accent)", textAlign: "center" as const }}>
        Click any node to explore. The dashed lines are where the interesting work happens.
      </div>
    </section>
  );
}
