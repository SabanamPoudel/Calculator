import { formatDisplay } from '../utils/calculatorHelpers'

/**
 * Display – Shows the calculator's current value
 * 
 * Props:
 * - value: The current display value (string or error message)
 */
function Display({ value }) {
  return (
    <div className="display">
      <div className="display-value">
        {formatDisplay(value)}
      </div>
    </div>
  )
}

export default Display
