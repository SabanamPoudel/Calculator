import CalculatorButton from './CalculatorButton'

/**
 * ButtonGrid – Renders all calculator buttons in a grid
 * Layout: 3-column grid for numbers, right column for operators
 * 
 * Props:
 * - onNumberClick: Callback when number button is clicked
 * - onOperatorClick: Callback when operator button is clicked
 * - onDecimalClick: Callback when decimal button is clicked
 * - onEquals: Callback when equals is clicked
 * - onClear: Callback when clear is clicked
 * - onDelete: Callback when delete/backspace is clicked
 */
function ButtonGrid({
  onNumberClick,
  onOperatorClick,
  onDecimalClick,
  onEquals,
  onClear,
  onDelete,
}) {
  return (
    <div className="button-grid">
      {/* Row 1: AC, DEL, / */}
      <CalculatorButton
        label="AC"
        onClick={onClear}
        type="action"
      />
      <CalculatorButton
        label="DEL"
        onClick={onDelete}
        type="action"
      />
      <CalculatorButton
        label="/"
        onClick={() => onOperatorClick('/')}
        type="operator"
      />
      <CalculatorButton
        label="*"
        onClick={() => onOperatorClick('*')}
        type="operator"
      />

      {/* Row 2: 7, 8, 9 */}
      <CalculatorButton
        label="7"
        onClick={() => onNumberClick('7')}
        type="number"
      />
      <CalculatorButton
        label="8"
        onClick={() => onNumberClick('8')}
        type="number"
      />
      <CalculatorButton
        label="9"
        onClick={() => onNumberClick('9')}
        type="number"
      />
      <CalculatorButton
        label="-"
        onClick={() => onOperatorClick('-')}
        type="operator"
      />

      {/* Row 3: 6, 5, 4 */}
      <CalculatorButton
        label="6"
        onClick={() => onNumberClick('6')}
        type="number"
      />
      <CalculatorButton
        label="5"
        onClick={() => onNumberClick('5')}
        type="number"
      />
      <CalculatorButton
        label="4"
        onClick={() => onNumberClick('4')}
        type="number"
      />
      <CalculatorButton
        label="+"
        onClick={() => onOperatorClick('+')}
        type="operator"
      />

      {/* Row 4: 1, 2, 3 */}
      <CalculatorButton
        label="1"
        onClick={() => onNumberClick('1')}
        type="number"
      />
      <CalculatorButton
        label="2"
        onClick={() => onNumberClick('2')}
        type="number"
      />
      <CalculatorButton
        label="3"
        onClick={() => onNumberClick('3')}
        type="number"
      />
      <CalculatorButton
        label="="
        onClick={onEquals}
        type="action"
      />

      {/* Row 5: 0 (spans 2), decimal point */}
      <div style={{ gridColumn: 'span 2' }}>
        <CalculatorButton
          label="0"
          onClick={() => onNumberClick('0')}
          type="number"
          style={{ width: '100%' }}
        />
      </div>
      <CalculatorButton
        label="."
        onClick={onDecimalClick}
        type="number"
      />
    </div>
  )
}

export default ButtonGrid
