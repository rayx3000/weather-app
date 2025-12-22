export const weatherSvg = {
    sun: `<svg viewBox="0 0 100 100" width="64">
                                    <circle cx="50" cy="50" r="18" fill="#FFC107"/>
                                    <g stroke="#FFC107" stroke-width="4" stroke-linecap="round">
                                        <line x1="50" y1="5" x2="50" y2="20"/>
                                        <line x1="50" y1="80" x2="50" y2="95"/>
                                        <line x1="5" y1="50" x2="20" y2="50"/>
                                        <line x1="80" y1="50" x2="95" y2="50"/>
                                        <line x1="18" y1="18" x2="28" y2="28"/>
                                        <line x1="72" y1="72" x2="82" y2="82"/>
                                        <line x1="18" y1="82" x2="28" y2="72"/>
                                        <line x1="72" y1="28" x2="82" y2="18"/>
                                    </g>
                                    </svg>`,
    partlyCloudy: `<svg viewBox="0 0 64 64" aria-label="Partly cloudy" role="img">
        <!-- sun behind -->
        <circle cx="18" cy="18" r="8" fill="#FFC107"/>
        <g>
          <path d="M12 34c-4 0-6-4-2-8 2-6 10-6 14-2 8-2 16 2 14 10 6 0 10 4 6 8H12z"
                fill="#E0E0E0"/>
          <path d="M16 34c-3 0-5-3-2-6 1-4 8-4 11-1 6-1 12 2 11 7 5 0 8 3 5 6H16z"
                fill="#EEEEEE"/>
        </g>
      </svg>`,
    cloudy: `
      <svg viewBox="0 0 64 64" aria-label="Cloudy" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#E0E0E0"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#EEEEEE"/>
      </svg>`,
      overcast:`
        <svg viewBox="0 0 64 64" aria-label="Overcast" role="img">
        <path d="M10 38 C6 38 4 34 8 30 C10 24 18 22 24 26 C34 22 44 26 42 34 C48 34 52 38 48 42 H12 C10 42 10 38 10 38 Z"
              fill="#BDBDBD"/>
        <path d="M14 39 C10 39 8 35 12 32 C14 26 22 24 28 28 C36 24 44 28 42 36 C46 36 50 40 46 44 H14 C12 44 14 40 14 39 Z"
              fill="#E0E0E0"/>
      </svg>
      `,
      drizzle: `
      <svg viewBox="0 0 64 64" aria-label="Drizzle" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#CFD8DC"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#EEEEEE"/>
        <g>
          <rect x="22" y="44" width="3" height="8" rx="1.5" fill="#4FC3F7"/>
          <rect x="30" y="46" width="3" height="8" rx="1.5" fill="#4FC3F7"/>
          <rect x="38" y="44" width="3" height="8" rx="1.5" fill="#4FC3F7"/>
        </g>
      </svg>
      `,
      rain: `<svg viewBox="0 0 64 64" aria-label="Rain" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#CFD8DC"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#ECEFF1"/>
        <g>
          <rect x="20" y="44" width="3" height="10" rx="1.5" fill="#4FC3F7"/>
          <rect x="28" y="46" width="3" height="10" rx="1.5" fill="#4FC3F7"/>
          <rect x="36" y="44" width="3" height="10" rx="1.5" fill="#4FC3F7"/>
          <rect x="44" y="46" width="3" height="10" rx="1.5" fill="#4FC3F7"/>
        </g>
      </svg>`,
      heavyRain: `<svg viewBox="0 0 64 64" aria-label="Heavy rain" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#CFD8DC"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#ECEFF1"/>
        <g>
          <rect x="18" y="44" width="4" height="12" rx="2" fill="#1E88E5"/>
          <rect x="26" y="46" width="4" height="12" rx="2" fill="#1E88E5"/>
          <rect x="34" y="44" width="4" height="12" rx="2" fill="#1E88E5"/>
          <rect x="42" y="46" width="4" height="12" rx="2" fill="#1E88E5"/>
          <rect x="50" y="44" width="4" height="12" rx="2" fill="#1E88E5"/>
        </g>
      </svg>`,
      thunderstorm: `<svg viewBox="0 0 64 64" aria-label="Thunderstorm" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#E0E0E0"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#EEEEEE"/>
        <path d="M30 44 L22 60 L30 56 L26 70 L42 48 L34 50 Z" fill="#FFD54F" transform="translate(-4,-6)"/>
      </svg>`,
      snow: `
        <svg viewBox="0 0 64 64" aria-label="Snow" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#E0E0E0"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#EEEEEE"/>
        <g>
          <g transform="translate(18,46)">
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#B3E5FC" stroke-width="2" stroke-linecap="round"/>
            <line x1="-4" y1="0" x2="4" y2="0" stroke="#B3E5FC" stroke-width="2" stroke-linecap="round"/>
          </g>
          <g transform="translate(30,46)">
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#B3E5FC" stroke-width="2" stroke-linecap="round"/>
            <line x1="-4" y1="0" x2="4" y2="0" stroke="#B3E5FC" stroke-width="2" stroke-linecap="round"/>
          </g>
          <g transform="translate(42,46)">
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#B3E5FC" stroke-width="2" stroke-linecap="round"/>
            <line x1="-4" y1="0" x2="4" y2="0" stroke="#B3E5FC" stroke-width="2" stroke-linecap="round"/>
          </g>
        </g>
      </svg>
      `,
      sleet: `
        <svg viewBox="0 0 64 64" aria-label="Hail" role="img">
        <path d="M18 42 C10 42 8 34 14 30 C16 22 26 20 32 24 C38 20 48 24 48 32 C56 32 58 42 50 42 Z"
              fill="#E0E0E0"/>
        <path d="M22 42 C16 42 14 36 18 33 C20 28 28 28 32 30 C36 28 44 30 44 36 C48 36 50 42 44 42 Z"
              fill="#EEEEEE"/>
        <g fill="var(--hail)">
          <circle cx="20" cy="52" r="2"/>
          <circle cx="30" cy="54" r="2"/>
          <circle cx="40" cy="52" r="2"/>
        </g>
      </svg>
      `,
      mist: `<svg viewBox="0 0 64 64" aria-label="Fog" role="img">
        <path d="M18 36 C10 36 8 30 14 26 C16 20 26 18 32 22 C38 18 48 22 48 30 C56 30 58 36 50 36 Z"
              fill="#E0E0E0"/>
        <g opacity="0.9">
          <rect x="8" y="42" width="48" height="3" rx="1.5" fill="#CFD8DC"/>
          <rect x="14" y="48" width="36" height="3" rx="1.5" fill="#CFD8DC"/>
          <rect x="10" y="54" width="44" height="3" rx="1.5" fill="#CFD8DC"/>
        </g>
      </svg>`,
      wind: `<svg viewBox="0 0 64 64" aria-label="Windy" role="img">
        <g fill="none" stroke="#90A4AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 30 C14 22 24 22 32 30 C40 38 54 36 58 30"/>
          <path d="M8 40 C20 34 36 36 46 40"/>
          <path d="M10 50 C26 46 40 48 50 52"/>
        </g>
      </svg>`,
      nightClear: `<svg viewBox="0 0 64 64" aria-label="Clear night" role="img">
        <defs>
          <mask id="c1">
            <rect width="64" height="64" fill="white"/>
            <circle cx="42" cy="26" r="14" fill="black"/>
          </mask>
        </defs>
        <circle cx="26" cy="32" r="18" fill="#FFF59D" mask="url(#c1)"/>
      </svg>`,
      nightPartlyCloudy: `<svg viewBox="0 0 64 64" aria-label="Night partly cloudy" role="img">
        <defs>
          <mask id="c2">
            <rect width="64" height="64" fill="white"/>
            <circle cx="42" cy="22" r="12" fill="black"/>
          </mask>
        </defs>
        <circle cx="26" cy="26" r="12" fill="#FFF59D" mask="url(#c2)"/>
        <path d="M14 38c-4 0-6-4-2-8 2-6 10-6 14-2 8-2 16 2 14 10 6 0 10 4 6 8H14z"
              fill="#E0E0E0"/>
        <path d="M18 38c-3 0-5-3-2-6 1-4 8-4 11-1 6-1 12 2 11 7 5 0 8 3 5 6H18z"
              fill="#EEEEEE"/>
      </svg>`,
      tornado: ` <svg viewBox="0 0 64 64" aria-label="Tornado" role="img">
        <g fill="none" stroke="#90A4AE" stroke-width="2" stroke-linecap="round">
          <path d="M10 12 H54"/>
          <path d="M16 22 H48"/>
          <path d="M22 32 H42"/>
          <path d="M26 42 H38"/>
          <path d="M30 52 H34"/>
        </g>
      </svg>`
}