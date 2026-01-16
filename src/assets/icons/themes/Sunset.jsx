export const SunsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <circle cx="12" cy="12" r="5" fill="url(#sunset)" />
    <path
      d="M12 1V3M12 21V23M23 12H21M3 12H1M20.49 3.51L19.07 4.93M4.93 19.07L3.51 20.49M20.49 20.49L19.07 19.07M4.93 4.93L3.51 3.51"
      stroke="url(#sunset2)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="sunset" x1="7" y1="7" x2="17" y2="17" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97068" />
        <stop offset="1" stopColor="#FFDAB9" />
      </linearGradient>
      <linearGradient id="sunset2" x1="1" y1="1" x2="23" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97068" />
        <stop offset="1" stopColor="#FFDAB9" />
      </linearGradient>
    </defs>
  </svg>
);
