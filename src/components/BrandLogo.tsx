type BrandLogoProps = {
  className?: string;
};

export const BrandMark = ({ className }: BrandLogoProps) => (
  <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#ed1c24" />
    <path
      d="M22.2 9.4H13.6c-2.5 0-4.6 2-4.6 4.6v4c0 2.5 2 4.6 4.6 4.6h8.6"
      fill="none"
      stroke="#fff"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

export const BrandLogo = ({ className }: BrandLogoProps) => (
  <span className={className}>
    <BrandMark className="brand-mark" />
    Цифровой офис
  </span>
);
