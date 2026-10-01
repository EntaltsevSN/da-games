type IconProps = {
  className?: string;
};

export const PlayIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M7.2 5.1a1 1 0 0 0-1.5.86v8.08a1 1 0 0 0 1.5.86l6.7-4.04a1 1 0 0 0 0-1.72L7.2 5.1Z" fill="currentColor" />
  </svg>
);

export const GamepadIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="8" width="18" height="10.5" rx="5.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 11.2v3.6M6.2 13h3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="15.1" cy="12.1" r="0.9" fill="currentColor" />
    <circle cx="17.2" cy="14.2" r="0.9" fill="currentColor" />
  </svg>
);

export const ListIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="4" width="14" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 9h6M9 12.5h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const SparkIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 4.2 13.2 9.4 18.5 10.5 13.2 11.7 12 16.8 10.8 11.7 5.5 10.5 10.8 9.4 12 4.2Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path d="M17.6 4.8v3.2M16 6.4h3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const ClipboardIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="5.5" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <rect x="9" y="3.8" width="6" height="3.2" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9.5 11h5M9.5 14.5h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const GearIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 5.2v1.4M12 17.4v1.4M5.2 12h1.4M17.4 12h1.4M7.2 7.2l1 1M15.8 15.8l1 1M16.8 7.2l-1 1M8.2 15.8l-1 1"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const ChartIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 18.5V14M10 18.5V9.5M15 18.5v-6M20 18.5V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
