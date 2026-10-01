export const CtaVisual = () => (
  <svg className="cta-visual" viewBox="0 0 460 300" aria-hidden="true">
    <defs>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="#000" floodOpacity="0.28" />
      </filter>
    </defs>
    <rect x="28" y="56" width="12" height="12" rx="2" fill="#ed1c24" />
    <rect x="392" y="38" width="10" height="10" rx="2" fill="#ed1c24" />
    <rect x="418" y="168" width="14" height="14" rx="3" fill="#3a3a3a" />
    <rect x="404" y="228" width="9" height="9" rx="2" fill="#ececec" />
    <rect x="236" y="24" width="8" height="8" rx="1.5" fill="#3a3a3a" />
    <rect x="268" y="214" width="8" height="8" rx="1.5" fill="#ed1c24" />

    <g filter="url(#soft)" transform="translate(18 168) rotate(-18)">
      <rect x="0" y="8" width="108" height="108" rx="22" fill="#d9d9d9" />
      <rect x="0" y="0" width="108" height="108" rx="22" fill="#fff" />
    </g>

    <g filter="url(#soft)" transform="translate(318 86) rotate(16)">
      <rect x="0" y="7" width="86" height="86" rx="18" fill="#d4d4d4" />
      <rect x="0" y="0" width="86" height="86" rx="18" fill="#fff" />
    </g>

    <g filter="url(#soft)" transform="translate(128 34) rotate(-16)">
      <rect x="0" y="12" width="188" height="188" rx="32" fill="#1a1a1a" />
      <rect x="0" y="0" width="188" height="188" rx="32" fill="#fff" />
      <path
        d="M132 58H78c-14 0-25 11-25 25v42c0 14 11 25 25 25h54"
        fill="none"
        stroke="#ed1c24"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
