export const GoldenTwilightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 2C12 2 10 7 10 12C10 17 12 22 12 22C12 22 14 17 14 12C14 7 12 2 12 2Z"
      fill="url(#golden1)"
    />
    <path
      d="M2 12C2 12 7 10 12 10C17 10 22 12 22 12C22 12 17 14 12 14C7 14 2 12 2 12Z"
      fill="url(#golden2)"
    />
    <defs>
      <linearGradient id="golden1" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffc300" />
        <stop offset="1" stopColor="#ffd60a" />
      </linearGradient>
      <linearGradient id="golden2" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffc300" />
        <stop offset="1" stopColor="#ffd60a" />
      </linearGradient>
    </defs>
  </svg>
);
