/**
 * Performs a calculation based on previous value, operator, and current value
 * Returns the result or error message if division by zero
 */
export function calculate(prev, operator, current) {
  const prevNum = parseFloat(prev)
  const currentNum = parseFloat(current)

  // Safety check: both values must be valid numbers
  if (isNaN(prevNum) || isNaN(currentNum)) {
    return null
  }

  let result

  switch (operator) {
    case '+':
      result = prevNum + currentNum
      break
    case '-':
      result = prevNum - currentNum
      break
    case '*':
      result = prevNum * currentNum
      break
    case '/':
      // Handle division by zero
      if (currentNum === 0) {
        return 'Cannot divide by zero'
      }
      result = prevNum / currentNum
      break
    default:
      return null
  }

  // Round to avoid floating point precision issues
  // Keep up to 10 decimal places
  return Math.round(result * 10000000000) / 10000000000
}

/**
 * Checks if a string is a valid number (including decimals)
 */
export function isValidNumber(str) {
  // Empty string is not valid
  if (str === '') return false
  // Regex: optional minus sign, digits with at most one decimal point
  return /^-?\d*\.?\d+$/.test(str)
}

/**
 * Checks if a string already contains a decimal point
 */
export function hasDecimal(str) {
  return str.includes('.')
}

/**
 * Removes the last character from a string
 */
export function removeLastChar(str) {
  return str.slice(0, -1)
}

/**
 * Formats a number for display (removes trailing zeros after decimal if it's a whole number)
 */
export function formatDisplay(value) {
  if (value === null || value === '') return '0'
  
  // If it's an error message, return as is
  if (typeof value === 'string' && isNaN(parseFloat(value))) {
    return value
  }

  const num = parseFloat(value)
  
  // If it's a whole number, don't show decimal places
  if (Number.isInteger(num)) {
    return num.toString()
  }

  // Otherwise, show the number as is (browser handles formatting)
  return num.toString()
}
