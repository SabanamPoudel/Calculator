/**
 * CalculatorButton – Reusable button component
 * 
 * Props:
 * - label: Text to display on the button
 * - onClick: Function to call when clicked
 * - type: 'number' | 'operator' | 'action' (changes styling)
 * - style: Optional inline styles
 */
function CalculatorButton({ label, onClick, type = 'number', style }) {
  return (
    <button
      className={`calc-button calc-button-${type}`}
      onClick={onClick}
      aria-label={`${label} button`}
      style={style}
    >
      {label}
    </button>
  )
}

export default CalculatorButton
