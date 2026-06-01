export default function DiagonalCut({ from = '#1A1A1A', to = '#FFFFFF' }) {
  return (
    <div className="diagonal-cut" aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <polygon points="0,90 1440,0 1440,90" fill={to} />
        <polygon points="0,90 1440,0 0,86" fill={from} />
        <line x1="0" y1="90" x2="1440" y2="0" stroke="#CC1212" strokeWidth="3" />
      </svg>
    </div>
  )
}
