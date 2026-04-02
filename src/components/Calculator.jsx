import { useState } from 'react'
import Display from './Display'
import ButtonGrid from './ButtonGrid'
import {
  calculate,
  isValidNumber,
  hasDecimal,
  removeLastChar,
} from '../utils/calculatorHelpers'

/**
 * Calculator – Main component managing all calculator state and logic
 * 
 * State:
 * - currentValue: What's currently displayed or being typed
 * - previousValue: The value from before an operator was clicked
 * - operation: The current operator (+, -, *, /)
 * - shouldResetDisplay: Flag to reset display on next number input
 */
function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

  /**
   * Handle number button click
   * Appends digit to current display value
   */
  const handleNumberClick = (num) => {
    // If display should reset (e.g., after equals or operator), start fresh
    if (shouldResetDisplay) {
      setCurrentValue(num)
      setShouldResetDisplay(false)
      return
    }

    // Prevent leading zeros (e.g., "01" → "1")
    if (currentValue === '0') {
      setCurrentValue(num)
    } else {
      setCurrentValue(currentValue + num)
    }
  }

  /**
   * Handle decimal point button
   * Only add decimal if there isn't one already in current value
   */
  const handleDecimalClick = () => {
    // If display is empty or should reset, start with "0."
    if (shouldResetDisplay || currentValue === '') {
      setCurrentValue('0.')
      setShouldResetDisplay(false)
      return
    }

    // Only add decimal if one doesn't exist
    if (!hasDecimal(currentValue)) {
      setCurrentValue(currentValue + '.')
    }
  }

  /**
   * Handle operator button click (+, -, *, /)
   * Stores current value and prepares for next number
   */
  const handleOperatorClick = (op) => {
    const inputValue = currentValue

    // If there's already a pending operation and user entered a number, calculate it
    if (previousValue !== null && operation !== null && !shouldResetDisplay) {
      const result = calculate(previousValue, operation, inputValue)
      
      // Handle error (division by zero)
      if (typeof result === 'string') {
        setCurrentValue(result)
        setShouldResetDisplay(true)
        return
      }

      setCurrentValue(result.toString())
      setPreviousValue(result)
    } else {
      // First operator click or replacing an operator
      setPreviousValue(parseFloat(inputValue))
    }

    // Set the new operator and prepare to accept next number
    setOperation(op)
    setShouldResetDisplay(true)
  }

  /**
   * Handle equals button
   * Calculates result and displays it
   */
  const handleEquals = () => {
    // Only calculate if we have a complete expression
    if (previousValue === null || operation === null) {
      return
    }

    const result = calculate(previousValue, operation, currentValue)

    // Handle error message (division by zero)
    if (typeof result === 'string') {
      setCurrentValue(result)
    } else {
      setCurrentValue(result.toString())
    }

    // Reset state for next calculation
    setPreviousValue(null)
    setOperation(null)
    setShouldResetDisplay(true)
  }

  /**
   * Handle clear/AC button
   * Resets everything to initial state
   */
  const handleClear = () => {
    setCurrentValue('0')
    setPreviousValue(null)
    setOperation(null)
    setShouldResetDisplay(false)
  }

  /**
   * Handle delete/backspace button
   * Removes last character from current value
   */
  const handleDelete = () => {
    // Can't delete from error message
    if (typeof currentValue === 'string' && isNaN(parseFloat(currentValue))) {
      return
    }

    if (currentValue.length === 1) {
      setCurrentValue('0')
    } else {
      setCurrentValue(removeLastChar(currentValue))
    }
  }

  return (
    <div className="calculator">
      <Display value={currentValue} />
      <ButtonGrid
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onDecimalClick={handleDecimalClick}
        onEquals={handleEquals}
        onClear={handleClear}
        onDelete={handleDelete}
      />
      <div className="calculator-footer">
        Developed by Sabanam Poudel
      </div>
    </div>
  )
}

export default Calculator
