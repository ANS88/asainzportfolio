const fs = require('fs');
const path = require('path');

// Shared template elements
const W = 400, H = 500;
const PERF_R = 7, PERF_STEP = 20;

function perfCircles() {
  let circles = '';
  // Top & bottom
  for (let x = 0; x <= W; x += PERF_STEP) {
    circles += `<circle cx="${x}" cy="0" r="${PERF_R}" fill="black"/>`;
    circles += `<circle cx="${x}" cy="${H}" r="${PERF_R}" fill="black"/>`;
  }
  // Left & right
  for (let y = PERF_STEP; y < H; y += PERF_STEP) {
    circles += `<circle cx="0" cy="${y}" r="${PERF_R}" fill="black"/>`;
    circles += `<circle cx="${W}" cy="${y}" r="${PERF_R}" fill="black"/>`;
  }
  return circles;
}

function stamp({ city, country, denomination, seriesYear, illustration, grainSeed }) {
  const seed = grainSeed || 1;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <mask id="perf">
      <rect width="${W}" height="${H}" fill="white"/>
      ${perfCircles()}
    </mask>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="${seed}" stitchTiles="stitch" result="n"/>
      <feColorMatrix type="saturate" values="0" in="n" result="m"/>
      <feBlend mode="soft-light" in="SourceGraphic" in2="m"/>
    </filter>
    <clipPath id="art-clip">
      <rect x="32" y="32" width="336" height="332" rx="1"/>
    </clipPath>
  </defs>
  <g mask="url(#perf)">
    <rect width="${W}" height="${H}" fill="#f5f0e8"/>
    <rect x="28" y="28" width="344" height="340" fill="#ddd8cc" rx="2"/>
    <g clip-path="url(#art-clip)" filter="url(#grain)">
      <rect x="32" y="32" width="336" height="332" fill="#aaa"/>
      ${illustration}
    </g>
    <rect x="30" y="30" width="340" height="336" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="0.75" rx="1"/>
    <!-- City name - converted to paths would happen in production; using web-safe fonts -->
    <text x="200" y="410" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="32" fill="#2a2a2a" letter-spacing="3" font-weight="700">${city.toUpperCase()}</text>
    <text x="200" y="434" text-anchor="middle" font-family="'Libre Franklin', Arial, sans-serif" font-size="12" fill="#777" letter-spacing="4" font-weight="400">${country.toUpperCase()}</text>
    <text x="370" y="470" text-anchor="end" font-family="'Playfair Display', Georgia, serif" font-size="22" fill="#2a2a2a" font-weight="700">${denomination}</text>
    <text x="200" y="486" text-anchor="middle" font-family="'Libre Franklin', Arial, sans-serif" font-size="9" fill="#aaa" letter-spacing="2.5" font-weight="400">CITIES SERIES &#xB7; ${seriesYear}</text>
  </g>
</svg>`;
}

// --- CITY ILLUSTRATIONS ---

const guadalajara = `
  <!-- Sky -->
  <rect x="32" y="32" width="336" height="332" fill="#1a3a5c"/>
  <!-- Sun rays -->
  <g opacity="0.15">
    <polygon points="200,120 140,32 160,32" fill="#e8a832"/>
    <polygon points="200,120 170,32 190,32" fill="#e8a832"/>
    <polygon points="200,120 210,32 230,32" fill="#e8a832"/>
    <polygon points="200,120 240,32 260,32" fill="#e8a832"/>
  </g>
  <!-- Sun disc -->
  <circle cx="200" cy="100" r="35" fill="#e8a832" opacity="0.9"/>
  <circle cx="200" cy="100" r="28" fill="#f0c040"/>
  <!-- Distant hills -->
  <path d="M32,280 Q100,240 170,260 Q240,230 310,255 Q350,240 368,250 L368,364 L32,364Z" fill="#2a4f3a" opacity="0.4"/>
  <!-- Cathedral body -->
  <path d="M130,340 L130,220 L145,220 L145,180 L155,155 L165,135 L175,155 L185,180 L185,220 L215,220 L215,180 L225,155 L235,135 L245,155 L255,180 L255,220 L270,220 L270,340Z" fill="#c4572a"/>
  <path d="M130,340 L130,220 L145,220 L145,180 L155,155 L165,135 L175,155 L185,180 L185,220 L215,220 L215,180 L225,155 L235,135 L245,155 L255,180 L255,220 L270,220 L270,340" fill="none" stroke="#8a3218" stroke-width="1.5"/>
  <!-- Dome between towers -->
  <path d="M185,230 Q200,195 215,230" fill="#d4683a" stroke="#8a3218" stroke-width="1"/>
  <line x1="200" y1="188" x2="200" y2="198" stroke="#f0c040" stroke-width="2"/>
  <line x1="196" y1="192" x2="204" y2="192" stroke="#f0c040" stroke-width="2"/>
  <!-- Spire crosses -->
  <line x1="165" y1="122" x2="165" y2="135" stroke="#f0c040" stroke-width="2.5"/>
  <line x1="160" y1="127" x2="170" y2="127" stroke="#f0c040" stroke-width="2.5"/>
  <line x1="235" y1="122" x2="235" y2="135" stroke="#f0c040" stroke-width="2.5"/>
  <line x1="230" y1="127" x2="240" y2="127" stroke="#f0c040" stroke-width="2.5"/>
  <!-- Bell tower arches -->
  <path d="M152,195 Q165,180 178,195" fill="#1a3a5c" stroke="#8a3218" stroke-width="1"/>
  <path d="M222,195 Q235,180 248,195" fill="#1a3a5c" stroke="#8a3218" stroke-width="1"/>
  <!-- Facade windows -->
  <circle cx="155" cy="250" r="8" fill="#1a3a5c" stroke="#8a3218" stroke-width="1"/>
  <circle cx="200" cy="245" r="10" fill="#e8a832" opacity="0.3" stroke="#8a3218" stroke-width="1"/>
  <circle cx="245" cy="250" r="8" fill="#1a3a5c" stroke="#8a3218" stroke-width="1"/>
  <!-- Rectangular windows -->
  <rect x="148" y="270" width="12" height="20" rx="2" fill="#1a3a5c" stroke="#8a3218" stroke-width="0.8"/>
  <rect x="194" y="270" width="12" height="20" rx="2" fill="#1a3a5c" stroke="#8a3218" stroke-width="0.8"/>
  <rect x="240" y="270" width="12" height="20" rx="2" fill="#1a3a5c" stroke="#8a3218" stroke-width="0.8"/>
  <!-- Entrance arches -->
  <path d="M170,340 Q185,315 200,340" fill="#1a3a5c" stroke="#8a3218" stroke-width="1"/>
  <path d="M200,340 Q215,315 230,340" fill="#1a3a5c" stroke="#8a3218" stroke-width="1"/>
  <!-- Horizontal facade lines -->
  <line x1="130" y1="240" x2="270" y2="240" stroke="#8a3218" stroke-width="0.8" opacity="0.6"/>
  <line x1="130" y1="265" x2="270" y2="265" stroke="#8a3218" stroke-width="0.8" opacity="0.5"/>
  <line x1="130" y1="300" x2="270" y2="300" stroke="#8a3218" stroke-width="0.8" opacity="0.5"/>
  <!-- Side buildings -->
  <rect x="60" y="285" width="55" height="79" fill="#b04e28" opacity="0.7"/>
  <rect x="68" y="295" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="84" y="295" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="68" y="318" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="84" y="318" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="285" y="290" width="50" height="74" fill="#b04e28" opacity="0.7"/>
  <rect x="293" y="300" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="309" y="300" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="293" y="322" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <rect x="309" y="322" width="10" height="14" rx="1" fill="#1a3a5c" opacity="0.7"/>
  <!-- Agave plants -->
  <g fill="#2a6b3a" stroke="#1a4a28" stroke-width="0.8">
    <path d="M55,364 Q60,334 65,364 Q60,328 55,364"/>
    <path d="M48,364 Q60,322 72,364"/>
    <path d="M340,364 Q345,334 350,364 Q345,328 340,364"/>
    <path d="M333,364 Q345,322 357,364"/>
  </g>
  <!-- Papel picado banner -->
  <path d="M50,160 Q120,175 200,162 Q280,148 350,168" fill="none" stroke="#e8a832" stroke-width="1.5" opacity="0.7"/>
  <g fill="#e8a832" opacity="0.6">
    <rect x="80" y="162" width="12" height="16" rx="1"/>
    <rect x="100" y="165" width="12" height="16" rx="1"/>
    <rect x="120" y="164" width="12" height="16" rx="1"/>
    <rect x="180" y="160" width="12" height="16" rx="1"/>
    <rect x="200" y="162" width="12" height="16" rx="1"/>
    <rect x="260" y="156" width="12" height="16" rx="1"/>
    <rect x="280" y="158" width="12" height="16" rx="1"/>
    <rect x="300" y="162" width="12" height="16" rx="1"/>
  </g>
  <!-- Ground -->
  <rect x="32" y="340" width="336" height="24" fill="#c4935a" opacity="0.5"/>
  <line x1="32" y1="340" x2="368" y2="340" stroke="#8a6840" stroke-width="1" opacity="0.5"/>
`;

const valencia = `
  <!-- Sky gradient -->
  <rect x="32" y="32" width="336" height="332" fill="#3a8cc4"/>
  <rect x="32" y="32" width="336" height="120" fill="#5aaae0" opacity="0.5"/>
  <!-- Clouds -->
  <g fill="white" opacity="0.3">
    <ellipse cx="90" cy="70" rx="35" ry="12"/>
    <ellipse cx="110" cy="68" rx="25" ry="10"/>
    <ellipse cx="310" cy="85" rx="30" ry="10"/>
    <ellipse cx="330" cy="83" rx="20" ry="8"/>
  </g>
  <!-- Sun -->
  <circle cx="320" cy="65" r="28" fill="#f0a830" opacity="0.85"/>
  <circle cx="320" cy="65" r="22" fill="#f8c848"/>
  <!-- Water/reflection pool -->
  <rect x="32" y="260" width="336" height="104" fill="#2a6898"/>
  <!-- Hemisfèric (eye building) -->
  <path d="M70,230 Q200,120 330,230" fill="#e8e4dc" stroke="#ccc8bc" stroke-width="1.5"/>
  <path d="M70,230 Q200,310 330,230" fill="#ddd8cc" stroke="#ccc8bc" stroke-width="1.5"/>
  <!-- Structural ribs -->
  <path d="M100,230 Q200,148 300,230" fill="none" stroke="#ccc8bc" stroke-width="0.8" opacity="0.5"/>
  <path d="M130,230 Q200,170 270,230" fill="none" stroke="#ccc8bc" stroke-width="0.6" opacity="0.4"/>
  <!-- Glass facade panels -->
  <g opacity="0.5">
    <rect x="150" y="195" width="14" height="40" rx="2" fill="#8ab8d8" stroke="#6898b8" stroke-width="0.6"/>
    <rect x="168" y="188" width="14" height="47" rx="2" fill="#8ab8d8" stroke="#6898b8" stroke-width="0.6"/>
    <rect x="186" y="185" width="14" height="50" rx="2" fill="#9ac8e0" stroke="#6898b8" stroke-width="0.6"/>
    <rect x="204" y="185" width="14" height="50" rx="2" fill="#8ab8d8" stroke="#6898b8" stroke-width="0.6"/>
    <rect x="222" y="188" width="14" height="47" rx="2" fill="#8ab8d8" stroke="#6898b8" stroke-width="0.6"/>
    <rect x="240" y="195" width="14" height="40" rx="2" fill="#8ab8d8" stroke="#6898b8" stroke-width="0.6"/>
  </g>
  <!-- Entrance arch -->
  <path d="M180,250 Q200,220 220,250" fill="#6898b8" opacity="0.6" stroke="#5888a8" stroke-width="0.8"/>
  <!-- Reflection in pool -->
  <path d="M90,270 Q200,300 310,270" fill="#e8e4dc" opacity="0.12"/>
  <path d="M100,285 Q200,310 300,285" fill="#e8e4dc" opacity="0.08"/>
  <!-- Water ripples -->
  <path d="M50,290 Q120,285 200,292 Q280,298 350,290" fill="none" stroke="#5aafdb" stroke-width="0.6" opacity="0.4"/>
  <path d="M50,310 Q130,305 200,312 Q270,318 350,310" fill="none" stroke="#5aafdb" stroke-width="0.6" opacity="0.3"/>
  <path d="M50,330 Q140,324 200,330 Q260,336 350,330" fill="none" stroke="#5aafdb" stroke-width="0.5" opacity="0.25"/>
  <path d="M50,348 Q150,342 200,348 Q250,354 350,348" fill="none" stroke="#5aafdb" stroke-width="0.5" opacity="0.2"/>
  <!-- Walkway -->
  <rect x="32" y="252" width="336" height="10" fill="#d8d0c0" opacity="0.6"/>
  <line x1="32" y1="262" x2="368" y2="262" stroke="#b0a890" stroke-width="0.8"/>
`;

const montreal = `
  <!-- Night sky -->
  <rect x="32" y="32" width="336" height="332" fill="#1a2438"/>
  <rect x="32" y="32" width="336" height="140" fill="#243050" opacity="0.6"/>
  <!-- Stars -->
  <g fill="white">
    <circle cx="80" cy="55" r="1.5" opacity="0.7"/>
    <circle cx="140" cy="42" r="1" opacity="0.5"/>
    <circle cx="270" cy="58" r="1.2" opacity="0.6"/>
    <circle cx="320" cy="45" r="1.5" opacity="0.7"/>
    <circle cx="350" cy="72" r="1" opacity="0.5"/>
    <circle cx="100" cy="78" r="0.8" opacity="0.4"/>
    <circle cx="240" cy="38" r="1.3" opacity="0.6"/>
    <circle cx="180" cy="52" r="1" opacity="0.5"/>
  </g>
  <!-- Moon -->
  <circle cx="310" cy="68" r="18" fill="#e8dcc8" opacity="0.9"/>
  <circle cx="318" cy="62" r="16" fill="#1a2438"/>
  <!-- Distant mountain -->
  <path d="M32,250 Q100,190 180,220 Q250,175 320,210 Q360,200 368,215 L368,364 L32,364Z" fill="#3a4860" opacity="0.5"/>
  <!-- Mount Royal -->
  <path d="M60,310 L120,195 L160,220 L195,185 L230,210 L280,200 L340,310Z" fill="#4a6080" opacity="0.8"/>
  <path d="M60,310 L120,195 L160,220 L195,185 L230,210 L280,200 L340,310" fill="none" stroke="#5a7898" stroke-width="1"/>
  <!-- Trees on mountain -->
  <g fill="#3a5068" opacity="0.6">
    <polygon points="90,290 96,270 102,290"/>
    <polygon points="108,275 114,252 120,275"/>
    <polygon points="130,260 136,240 142,260"/>
    <polygon points="252,265 258,242 264,265"/>
    <polygon points="275,275 282,255 289,275"/>
    <polygon points="300,288 306,268 312,288"/>
  </g>
  <!-- Snow on peak -->
  <path d="M185,195 L195,185 L205,192" fill="white" fill-opacity="0.2"/>
  <!-- Illuminated cross -->
  <line x1="195" y1="165" x2="195" y2="185" stroke="white" stroke-width="4" opacity="0.95"/>
  <line x1="186" y1="173" x2="204" y2="173" stroke="white" stroke-width="4" opacity="0.95"/>
  <!-- Cross glow -->
  <circle cx="195" cy="175" r="25" fill="white" opacity="0.06"/>
  <circle cx="195" cy="175" r="14" fill="white" opacity="0.08"/>
  <!-- Old Montreal rooftops -->
  <g fill="#8a4a38">
    <!-- Row of buildings -->
    <path d="M45,364 L45,295 L55,285 L65,295 L65,300 L75,300 L75,290 L85,280 L95,290 L95,300 L105,300 L105,364"/>
    <path d="M105,364 L105,305 L115,295 L125,305 L125,310 L135,310 L135,295 L145,285 L155,295 L155,364"/>
    <path d="M245,364 L245,300 L255,290 L265,300 L265,305 L275,305 L275,290 L285,280 L295,290 L295,300 L305,300 L305,364"/>
    <path d="M305,364 L305,298 L315,288 L325,298 L325,305 L340,305 L340,295 L352,288 L360,298 L360,364"/>
  </g>
  <!-- Windows in buildings -->
  <g fill="#e8c868" opacity="0.7">
    <rect x="50" y="302" width="6" height="8" rx="1"/>
    <rect x="58" y="302" width="6" height="8" rx="1"/>
    <rect x="80" y="296" width="6" height="8" rx="1"/>
    <rect x="88" y="296" width="6" height="8" rx="1"/>
    <rect x="50" y="320" width="6" height="8" rx="1"/>
    <rect x="58" y="320" width="6" height="8" rx="1"/>
    <rect x="110" y="312" width="6" height="8" rx="1"/>
    <rect x="118" y="312" width="6" height="8" rx="1"/>
    <rect x="140" y="302" width="6" height="8" rx="1"/>
    <rect x="148" y="302" width="6" height="8" rx="1"/>
    <rect x="252" y="308" width="6" height="8" rx="1"/>
    <rect x="260" y="308" width="6" height="8" rx="1"/>
    <rect x="280" y="298" width="6" height="8" rx="1"/>
    <rect x="288" y="298" width="6" height="8" rx="1"/>
    <rect x="312" y="304" width="6" height="8" rx="1"/>
    <rect x="345" y="302" width="6" height="8" rx="1"/>
    <rect x="353" y="302" width="6" height="8" rx="1"/>
  </g>
  <!-- Spiral staircase -->
  <g stroke="#6a3828" stroke-width="1.5" fill="none">
    <path d="M165,364 L165,300"/>
    <path d="M175,364 L175,300"/>
    <path d="M165,310 Q170,305 175,310"/>
    <path d="M165,320 Q170,315 175,320"/>
    <path d="M165,330 Q170,325 175,330"/>
    <path d="M165,340 Q170,335 175,340"/>
    <path d="M165,350 Q170,345 175,350"/>
  </g>
  <!-- Maple leaf accent -->
  <g transform="translate(195,320) scale(0.9)" fill="#c84030" opacity="0.85">
    <path d="M0,-15 L3,-8 L10,-10 L7,-4 L14,-2 L8,2 L10,8 L4,6 L0,14 L-4,6 L-10,8 L-8,2 L-14,-2 L-7,-4 L-10,-10 L-3,-8Z"/>
    <line x1="0" y1="14" x2="0" y2="22" stroke="#c84030" stroke-width="1.5"/>
  </g>
  <!-- Snow on ground -->
  <rect x="32" y="356" width="336" height="8" fill="white" opacity="0.15"/>
`;

const portland = `
  <!-- Sky -->
  <rect x="32" y="32" width="336" height="332" fill="#a8b8c0"/>
  <rect x="32" y="32" width="336" height="180" fill="#c0ccd4" opacity="0.6"/>
  <!-- Mist layers -->
  <ellipse cx="200" cy="220" rx="200" ry="30" fill="white" opacity="0.1"/>
  <ellipse cx="200" cy="250" rx="220" ry="25" fill="white" opacity="0.08"/>
  <!-- Sun through mist -->
  <circle cx="280" cy="80" r="30" fill="white" opacity="0.25"/>
  <circle cx="280" cy="80" r="20" fill="#f0d0b0" opacity="0.3"/>
  <!-- Distant range -->
  <path d="M32,290 Q80,265 140,275 Q180,260 220,270 Q300,250 368,268 L368,364 L32,364Z" fill="#6a8078" opacity="0.3"/>
  <!-- Mt Hood -->
  <path d="M110,320 L165,175 L180,198 L200,160 L210,145 L220,160 L240,195 L255,180 L290,320Z" fill="#7a98a0"/>
  <path d="M110,320 L165,175 L180,198 L200,160 L210,145 L220,160 L240,195 L255,180 L290,320" fill="none" stroke="#5a7880" stroke-width="1.2"/>
  <!-- Snow cap -->
  <path d="M165,175 L180,198 L200,160 L210,145 L220,160 L240,195 L255,180" fill="white" fill-opacity="0.6"/>
  <path d="M170,185 L182,200 L202,168 L210,155 L218,165 L238,198 L250,188" fill="none" stroke="#b0c0c8" stroke-width="0.8" opacity="0.6"/>
  <!-- Mountain ridges -->
  <path d="M150,240 L210,175 L270,240" fill="none" stroke="#5a7880" stroke-width="0.5" opacity="0.4"/>
  <!-- River -->
  <path d="M32,330 Q100,322 160,335 Q220,348 280,330 Q330,318 368,328" fill="none" stroke="#5a8898" stroke-width="8" opacity="0.5"/>
  <path d="M32,330 Q100,322 160,335 Q220,348 280,330 Q330,318 368,328" fill="none" stroke="#7ab0c0" stroke-width="4" opacity="0.3"/>
  <!-- Bridge -->
  <line x1="135" y1="310" x2="265" y2="310" stroke="#7a6858" stroke-width="4"/>
  <rect x="155" y="290" width="6" height="22" fill="#7a6858"/>
  <rect x="240" y="290" width="6" height="22" fill="#7a6858"/>
  <path d="M155,292 Q200,310 245,292" fill="none" stroke="#7a6858" stroke-width="2"/>
  <!-- Pine forest - back row -->
  <g fill="#3a6848" opacity="0.6">
    <polygon points="50,320 58,278 66,320"/>
    <polygon points="68,320 76,272 84,320"/>
    <polygon points="84,320 94,265 104,320"/>
    <polygon points="296,320 304,275 312,320"/>
    <polygon points="312,320 322,268 332,320"/>
    <polygon points="330,320 338,280 346,320"/>
  </g>
  <!-- Pine forest - front row -->
  <g fill="#2a5838">
    <polygon points="38,360 50,305 62,360"/>
    <polygon points="56,360 68,298 80,360"/>
    <polygon points="74,360 88,288 102,360"/>
    <polygon points="98,360 110,300 122,360"/>
    <polygon points="298,360 310,295 322,360"/>
    <polygon points="316,360 328,290 340,360"/>
    <polygon points="335,360 346,300 357,360"/>
  </g>
  <!-- Rose accent (Portland = City of Roses) -->
  <g transform="translate(200, 340)" opacity="0.65">
    <circle r="8" fill="#d88090"/>
    <circle r="4" fill="#c06878"/>
    <path d="M0,8 L-3,18" stroke="#3a6848" stroke-width="1.5"/>
    <path d="M-3,14 Q-8,10 -5,8" stroke="#3a6848" stroke-width="1" fill="#4a7858" opacity="0.7"/>
  </g>
  <!-- Ground -->
  <rect x="32" y="352" width="336" height="12" fill="#5a7860" opacity="0.3"/>
`;

const cincinnati = `
  <!-- Sky -->
  <rect x="32" y="32" width="336" height="332" fill="#e8dcc8"/>
  <rect x="32" y="32" width="336" height="160" fill="#d8c8a8" opacity="0.5"/>
  <!-- Warm sun -->
  <circle cx="200" cy="72" r="40" fill="#f0d8a0" opacity="0.6"/>
  <circle cx="200" cy="72" r="28" fill="#f8e8c0" opacity="0.7"/>
  <!-- Clouds -->
  <g fill="white" opacity="0.4">
    <ellipse cx="100" cy="68" rx="30" ry="10"/>
    <ellipse cx="120" cy="65" rx="20" ry="8"/>
    <ellipse cx="310" cy="80" rx="28" ry="9"/>
  </g>
  <!-- Background skyline -->
  <g fill="#8a6858" opacity="0.4">
    <rect x="80" y="200" width="18" height="60"/>
    <rect x="102" y="210" width="14" height="50"/>
    <rect x="55" y="215" width="20" height="45"/>
    <rect x="280" y="205" width="16" height="55"/>
    <rect x="300" y="210" width="20" height="50"/>
    <rect x="325" y="218" width="14" height="42"/>
  </g>
  <!-- River -->
  <rect x="32" y="300" width="336" height="64" fill="#4a8898"/>
  <!-- River highlights -->
  <path d="M32,320 Q100,315 200,322 Q300,328 368,318" fill="none" stroke="#6ab0c4" stroke-width="1" opacity="0.4"/>
  <path d="M32,338 Q120,332 200,340 Q280,346 368,336" fill="none" stroke="#6ab0c4" stroke-width="0.8" opacity="0.3"/>
  <!-- Roebling Bridge -->
  <!-- Towers -->
  <rect x="120" y="205" width="20" height="115" fill="#8a6848"/>
  <rect x="260" y="205" width="20" height="115" fill="#8a6848"/>
  <!-- Gothic arch tops -->
  <path d="M120,205 L130,185 L140,205" fill="#8a6848" stroke="#6a4838" stroke-width="1"/>
  <path d="M260,205 L270,185 L280,205" fill="#8a6848" stroke="#6a4838" stroke-width="1"/>
  <!-- Finials -->
  <line x1="130" y1="178" x2="130" y2="185" stroke="#6a4838" stroke-width="2"/>
  <line x1="270" y1="178" x2="270" y2="185" stroke="#6a4838" stroke-width="2"/>
  <!-- Tower arch openings -->
  <path d="M125,225 Q130,215 135,225" fill="#e8dcc8" stroke="#6a4838" stroke-width="0.8"/>
  <path d="M125,245 Q130,235 135,245" fill="#e8dcc8" stroke="#6a4838" stroke-width="0.8"/>
  <path d="M265,225 Q270,215 275,225" fill="#e8dcc8" stroke="#6a4838" stroke-width="0.8"/>
  <path d="M265,245 Q270,235 275,245" fill="#e8dcc8" stroke="#6a4838" stroke-width="0.8"/>
  <!-- Tower outlines -->
  <rect x="120" y="205" width="20" height="115" fill="none" stroke="#6a4838" stroke-width="1.5"/>
  <rect x="260" y="205" width="20" height="115" fill="none" stroke="#6a4838" stroke-width="1.5"/>
  <!-- Main cables -->
  <path d="M130,190 Q200,275 270,190" fill="none" stroke="#6a4838" stroke-width="3"/>
  <!-- Suspender cables -->
  <line x1="155" y1="218" x2="155" y2="300" stroke="#6a4838" stroke-width="0.8" opacity="0.6"/>
  <line x1="175" y1="235" x2="175" y2="300" stroke="#6a4838" stroke-width="0.8" opacity="0.6"/>
  <line x1="200" y1="248" x2="200" y2="300" stroke="#6a4838" stroke-width="0.8" opacity="0.6"/>
  <line x1="225" y1="235" x2="225" y2="300" stroke="#6a4838" stroke-width="0.8" opacity="0.6"/>
  <line x1="245" y1="218" x2="245" y2="300" stroke="#6a4838" stroke-width="0.8" opacity="0.6"/>
  <!-- Bridge deck -->
  <rect x="80" y="296" width="240" height="8" fill="#8a6848"/>
  <line x1="80" y1="296" x2="320" y2="296" stroke="#6a4838" stroke-width="1"/>
  <line x1="80" y1="304" x2="320" y2="304" stroke="#6a4838" stroke-width="0.8"/>
  <!-- Railing detail -->
  <g stroke="#6a4838" stroke-width="0.6" opacity="0.5">
    <line x1="90" y1="296" x2="90" y2="300"/><line x1="100" y1="296" x2="100" y2="300"/>
    <line x1="110" y1="296" x2="110" y2="300"/><line x1="150" y1="296" x2="150" y2="300"/>
    <line x1="160" y1="296" x2="160" y2="300"/><line x1="190" y1="296" x2="190" y2="300"/>
    <line x1="210" y1="296" x2="210" y2="300"/><line x1="240" y1="296" x2="240" y2="300"/>
    <line x1="250" y1="296" x2="250" y2="300"/><line x1="290" y1="296" x2="290" y2="300"/>
    <line x1="300" y1="296" x2="300" y2="300"/><line x1="310" y1="296" x2="310" y2="300"/>
  </g>
  <!-- Riverbank -->
  <path d="M32,300 Q55,295 80,300" fill="#6a8050" opacity="0.4"/>
  <path d="M320,300 Q345,295 368,300" fill="#6a8050" opacity="0.4"/>
`;

const sanfrancisco = `
  <!-- Sky/fog -->
  <rect x="32" y="32" width="336" height="332" fill="#8898a8"/>
  <rect x="32" y="32" width="336" height="130" fill="#a8b4c0" opacity="0.5"/>
  <!-- Sun through fog -->
  <circle cx="300" cy="72" r="32" fill="white" opacity="0.2"/>
  <circle cx="300" cy="72" r="20" fill="#f8e0b0" opacity="0.25"/>
  <!-- Bay water -->
  <rect x="32" y="268" width="336" height="96" fill="#4a7898"/>
  <!-- Water highlights -->
  <path d="M32,290 Q100,285 200,292 Q300,298 368,288" fill="none" stroke="#6898b8" stroke-width="0.8" opacity="0.4"/>
  <path d="M32,310 Q120,305 200,312 Q280,318 368,308" fill="none" stroke="#6898b8" stroke-width="0.7" opacity="0.3"/>
  <path d="M32,330 Q140,324 200,332 Q260,338 368,328" fill="none" stroke="#6898b8" stroke-width="0.6" opacity="0.25"/>
  <path d="M32,348 Q150,342 200,350 Q250,356 368,345" fill="none" stroke="#6898b8" stroke-width="0.5" opacity="0.2"/>
  <!-- Hills -->
  <path d="M32,268 Q80,235 140,250 Q200,230 260,248 Q320,235 368,255 L368,268 L32,268Z" fill="#7a8878" opacity="0.5"/>
  <!-- Distant city on hills -->
  <g fill="#6a7868" opacity="0.35">
    <rect x="55" y="242" width="8" height="26"/><rect x="66" y="248" width="6" height="20"/>
    <rect x="120" y="240" width="6" height="28"/><rect x="130" y="244" width="8" height="24"/>
    <rect x="248" y="238" width="6" height="30"/><rect x="258" y="242" width="8" height="26"/>
    <rect x="310" y="240" width="6" height="28"/>
    <!-- Transamerica hint -->
    <polygon points="145,224 148,268 142,268"/>
  </g>
  <!-- Golden Gate towers -->
  <rect x="108" y="108" width="18" height="198" fill="#c4452a"/>
  <rect x="274" y="108" width="18" height="198" fill="#c4452a"/>
  <!-- Tower caps -->
  <rect x="105" y="100" width="24" height="12" rx="1" fill="#c4452a"/>
  <rect x="271" y="100" width="24" height="12" rx="1" fill="#c4452a"/>
  <!-- Tower outlines -->
  <rect x="108" y="108" width="18" height="198" fill="none" stroke="#a03520" stroke-width="1.5"/>
  <rect x="274" y="108" width="18" height="198" fill="none" stroke="#a03520" stroke-width="1.5"/>
  <!-- Cross braces -->
  <g stroke="#a03520" stroke-width="1.2">
    <line x1="108" y1="145" x2="126" y2="145"/><line x1="108" y1="180" x2="126" y2="180"/>
    <line x1="108" y1="215" x2="126" y2="215"/><line x1="108" y1="250" x2="126" y2="250"/>
    <line x1="274" y1="145" x2="292" y2="145"/><line x1="274" y1="180" x2="292" y2="180"/>
    <line x1="274" y1="215" x2="292" y2="215"/><line x1="274" y1="250" x2="292" y2="250"/>
  </g>
  <!-- Main cables -->
  <path d="M48,105 Q117,175 200,188 Q283,175 352,105" fill="none" stroke="#c4452a" stroke-width="4"/>
  <path d="M48,105 Q117,175 200,188 Q283,175 352,105" fill="none" stroke="#d86848" stroke-width="1.5"/>
  <!-- Suspender cables -->
  <g stroke="#a03520" stroke-width="0.8" opacity="0.6">
    <line x1="75" y1="128" x2="75" y2="300"/>
    <line x1="92" y1="140" x2="92" y2="300"/>
    <line x1="145" y1="160" x2="145" y2="300"/>
    <line x1="165" y1="172" x2="165" y2="300"/>
    <line x1="185" y1="182" x2="185" y2="300"/>
    <line x1="200" y1="188" x2="200" y2="300"/>
    <line x1="215" y1="182" x2="215" y2="300"/>
    <line x1="235" y1="172" x2="235" y2="300"/>
    <line x1="255" y1="160" x2="255" y2="300"/>
    <line x1="308" y1="140" x2="308" y2="300"/>
    <line x1="325" y1="128" x2="325" y2="300"/>
  </g>
  <!-- Road deck -->
  <rect x="40" y="296" width="320" height="10" fill="#c4452a"/>
  <line x1="40" y1="296" x2="360" y2="296" stroke="#a03520" stroke-width="1.2"/>
  <line x1="40" y1="306" x2="360" y2="306" stroke="#a03520" stroke-width="0.8"/>
  <!-- Road markings -->
  <line x1="40" y1="301" x2="360" y2="301" stroke="#d86848" stroke-width="0.5" stroke-dasharray="8,5" opacity="0.5"/>
  <!-- Fog rolling through -->
  <g fill="white" opacity="0.15">
    <ellipse cx="120" cy="240" rx="60" ry="18"/>
    <ellipse cx="200" cy="248" rx="50" ry="14"/>
    <ellipse cx="300" cy="235" rx="55" ry="16"/>
  </g>
  <g fill="white" opacity="0.1">
    <ellipse cx="80" cy="180" rx="40" ry="12"/>
    <ellipse cx="180" cy="165" rx="45" ry="10"/>
    <ellipse cx="320" cy="178" rx="38" ry="11"/>
  </g>
  <!-- Cable car -->
  <g transform="translate(195, 348)">
    <rect x="-12" y="-10" width="24" height="14" rx="2" fill="#c4452a" stroke="#a03520" stroke-width="1"/>
    <rect x="-10" y="-8" width="6" height="8" rx="1" fill="#e8dcc8" opacity="0.6"/>
    <rect x="-2" y="-8" width="6" height="8" rx="1" fill="#e8dcc8" opacity="0.6"/>
    <rect x="6" y="-8" width="4" height="8" rx="1" fill="#e8dcc8" opacity="0.6"/>
    <line x1="-14" y1="4" x2="14" y2="4" stroke="#6a4838" stroke-width="1.5"/>
    <circle cx="-8" cy="6" r="2" fill="#6a4838"/>
    <circle cx="8" cy="6" r="2" fill="#6a4838"/>
  </g>
`;

// --- GENERATE ALL ---

const cities = [
  { city: 'Guadalajara', country: 'Mexico', denomination: '$12', illustration: guadalajara, grainSeed: 1, file: 'guadalajara' },
  { city: 'Valencia', country: 'Spain', denomination: '0,85€', illustration: valencia, grainSeed: 2, file: 'valencia' },
  { city: 'Montreal', country: 'Canada', denomination: '$1.20', illustration: montreal, grainSeed: 3, file: 'montreal' },
  { city: 'Portland', country: 'Oregon, USA', denomination: '68¢', illustration: portland, grainSeed: 4, file: 'portland' },
  { city: 'Cincinnati', country: 'Ohio, USA', denomination: '55¢', illustration: cincinnati, grainSeed: 5, file: 'cincinnati' },
  { city: 'San Francisco', country: 'California, USA', denomination: '78¢', illustration: sanfrancisco, grainSeed: 6, file: 'san-francisco' },
];

const dir = path.dirname(__filename);
cities.forEach(c => {
  const svg = stamp({ ...c, seriesYear: 2026 });
  fs.writeFileSync(path.join(dir, `${c.file}.svg`), svg);
  console.log(`  wrote ${c.file}.svg`);
});

console.log('\nDone. Run render script to generate PNGs.');
