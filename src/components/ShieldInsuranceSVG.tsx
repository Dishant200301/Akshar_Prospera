const ShieldInsuranceSVG = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 1000 1000" // Adjust viewBox to fit your SVG content
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/*
      This is a simplified, illustrative SVG to match the style (outline, teal color).
      For a perfect replica, you would need to export the original illustration
      as an SVG and paste its path data here, adjusting colors as needed.
      The stroke color '#50878c' (accent-teal) is used for outlines.
    */}

    {/* Warrior 1 (top-left, holding flag) */}
    <g transform="translate(100, 150)">
      <path d="M 0 0 L 0 400 L 100 400 L 100 0 Z" stroke="#50878c" strokeWidth="15" /> {/* Pole */}
      <path d="M 100 0 L 250 50 L 250 200 L 100 150 Z" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Flag */}
      <path d="M 150 75 A 50 50 0 1 0 150 175 A 50 50 0 1 0 150 75 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Shield-like logo on flag */}
      <path d="M 0 400 L 50 550 L -50 550 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Cape base */}
      <path d="M 0 400 L 0 600 L 150 650 L 150 450 Z" stroke="#50878c" strokeWidth="8" /> {/* Body outline */}
      <path d="M 20 450 L 80 450 L 80 500 L 20 500 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Arm */}
      <path d="M 10 550 C 30 570, 70 570, 90 550" stroke="#50878c" strokeWidth="8" /> {/* Bottom of tunic */}
      <path d="M 150 450 C 180 400, 220 400, 250 450" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Shoulder */}
    </g>

    {/* Warrior 2 (top-right, spear) */}
    <g transform="translate(450, 50)">
      <path d="M 100 0 L 100 400" stroke="#50878c" strokeWidth="15" /> {/* Spear handle */}
      <path d="M 100 0 L 120 -30 L 80 -30 Z" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Spearhead */}
      <path d="M 50 250 L 150 250 L 150 450 L 50 450 Z" stroke="#50878c" strokeWidth="8" /> {/* Body */}
      <path d="M 60 280 L 140 280 L 140 330 L 60 330 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Arm */}
      <path d="M 70 350 L 130 350 L 130 400 L 70 400 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* ID badge/pocket */}
      <path d="M 50 450 C 70 500, 130 500, 150 450" stroke="#50878c" strokeWidth="8" /> {/* Bottom of shirt */}
      <path d="M 60 150 C 80 100, 120 100, 140 150" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Helmet top */}
      <path d="M 50 150 L 50 200 A 50 50 0 0 0 150 200 L 150 150 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Helmet visor */}
    </g>

    {/* Warrior 3 (bottom-left, helmeted) */}
    <g transform="translate(150, 400)">
      <path d="M 0 0 L 0 300 L 100 300 L 100 0 Z" stroke="#50878c" strokeWidth="8" /> {/* Body */}
      <path d="M 10 30 L 90 30 L 90 80 L 10 80 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Helmet visor */}
      <path d="M 0 0 C 20 -50, 80 -50, 100 0" stroke="#50878c" strokeWidth="8" /> {/* Helmet crest */}
      <path d="M 50 0 C 70 20, 70 80, 50 100" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Cape top */}
      <path d="M -20 100 L -20 250 L 0 300 L 0 150 Z" stroke="#50878c" strokeWidth="8" /> {/* Cape */}
      <path d="M 100 100 L 100 250 L 120 300 L 120 150 Z" stroke="#50878c" strokeWidth="8" /> {/* Cape other side */}
    </g>

    {/* Warrior 4 (bottom-center, female with mic) */}
    <g transform="translate(300, 470)">
      <path d="M 0 0 L 0 250 L 100 250 L 100 0 Z" stroke="#50878c" strokeWidth="8" /> {/* Body */}
      <path d="M 10 30 L 90 30 L 90 80 L 10 80 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Face */}
      <path d="M 50 0 C 70 -20, 70 -50, 50 -70 C 30 -50, 30 -20, 50 0 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Hair */}
      <path d="M 80 50 L 120 50 L 120 70 L 80 70 Z" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Mic arm */}
      <circle cx="120" cy="60" r="10" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Mic */}
      <path d="M -20 100 L -20 200 L 0 250 L 0 150 Z" stroke="#50878c" strokeWidth="8" /> {/* Cape */}
      <path d="M 100 100 L 100 200 L 120 250 L 120 150 Z" stroke="#50878c" strokeWidth="8" /> {/* Cape other side */}
      <circle cx="10" cy="200" r="40" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Shield 1 */}
      <path d="M -5 190 L 5 190 L 5 210 L -5 210 L -5 190 Z" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Icon on shield 1 */}
    </g>

    {/* Warrior 5 (bottom-right, female with shield) */}
    <g transform="translate(600, 450)">
      <path d="M 0 0 L 0 280 L 100 280 L 100 0 Z" stroke="#50878c" strokeWidth="8" /> {/* Body */}
      <path d="M 10 30 L 90 30 L 90 80 L 10 80 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Face */}
      <path d="M 50 0 C 70 -20, 70 -50, 50 -70 C 30 -50, 30 -20, 50 0 Z" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Hair */}
      <path d="M 80 150 L 120 150 L 120 170 L 80 170 Z" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Belt */}
      <circle cx="100" cy="200" r="80" fill="none" stroke="#50878c" strokeWidth="8" /> {/* Shield 2 */}
      <path d="M 70 190 L 80 210 L 90 190 L 100 210 L 110 190 Z" fill="none" stroke="#50878c" strokeWidth="5" /> {/* Icon on shield 2 */}
    </g>

  </svg>
);

export default ShieldInsuranceSVG;