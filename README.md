# Calculator App

A modern, fully-functional calculator built with React and Vite. This project demonstrates clean code, state management, and responsive UI design suitable for a professional portfolio.

## Features

✨ **Core Features**
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Decimal point support with validation (prevents multiple decimals)
- Delete/Backspace button to remove the last entered digit
- Clear All (AC) button to reset the calculator
- Chained operations (e.g., 5 + 3 * 2 = performs operations in sequence)
- Division by zero handling with user-friendly error message
- Leading zero prevention (e.g., entering 0 then 5 becomes 5, not 05)

💅 **UI/UX**
- Clean, modern interface with gradient background
- Distinct button types with clear visual hierarchy
- Smooth animations and hover effects
- Large, readable display with proper number formatting
- Fully responsive design for desktop, tablet, and mobile
- Accessible button labels for screen readers

🎯 **Code Quality**
- Functional components with React hooks
- Separated concerns: calculation logic (helpers), UI components, and styles
- Clear state management with descriptive variable names
- Input validation to prevent invalid expressions
- Production-ready, beginner-friendly code

## Tech Stack

- **React** 18.2.0 – UI library with hooks
- **Vite** 5.0.0 – Fast build tool and dev server
- **JavaScript** (ES6+) – No TypeScript, plain vanilla JS
- **CSS3** – No frameworks, hand-crafted styling with responsive design

## Installation

### Prerequisites
- Node.js (v14 or higher) and npm

### Setup

```bash
# Clone or download the project
cd Calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Calculator.jsx       # Main component with state & logic
│   ├── Display.jsx          # Shows current input/result
│   ├── ButtonGrid.jsx       # Grid layout of all buttons
│   └── CalculatorButton.jsx # Reusable button component
├── styles/
│   ├── app.css              # Global styles
│   └── calculator.css       # Calculator-specific styles
├── utils/
│   └── calculatorHelpers.js # Calculation logic & validators
├── App.jsx                  # Root component
└── main.jsx                 # React entry point
```

## How It Works

### State Management

The Calculator component manages four pieces of state:

- **`currentValue`**: The number currently displayed or being typed
- **`previousValue`**: The first operand before an operator is clicked
- **`operation`**: The current operator (+, -, *, /)
- **`shouldResetDisplay`**: Flag to reset the display on the next number input

### Calculation Flow

1. **User enters a number**: Digits are appended to `currentValue`
2. **User clicks an operator**:
   - `previousValue` is set to the current number
   - `operation` is set to the chosen operator
   - `shouldResetDisplay` flag tells the next number input to start fresh
3. **User enters the second number**: Appended to a fresh `currentValue`
4. **User clicks equals**:
   - The `calculate()` function runs with `previousValue`, `operation`, and `currentValue`
   - Result replaces `currentValue`
   - State resets for the next calculation
5. **Chained operations**: If the user clicks another operator before equals, the pending calculation is performed first

### Input Validation

- **Decimals**: Only one decimal allowed per number (checked with `hasDecimal()`)
- **Leading zeros**: Typing 0 then 5 results in 5, not 05
- **Empty operations**: If the user hasn't entered a number before an operator, nothing happens
- **Division by zero**: Returns a friendly error message instead of crashing

### Error Handling

Division by zero is caught in the `calculate()` function and returns the string `"Cannot divide by zero"` instead of Infinity. This is displayed to the user and clears on the next input.

## Usage Examples

### Basic Calculation
1. Press `7` → Display: 7
2. Press `+` → Display: 7
3. Press `3` → Display: 3
4. Press `=` → Display: 10

### Chained Calculation
1. Press `10` → Display: 10
2. Press `+` → Display: 10
3. Press `5` → Display: 5
4. Press `-` → Result 15 is calculated internally, then `-` is set as new operator. Display: 15
5. Press `3` → Display: 3
6. Press `=` → Display: 12

### Decimal Support
1. Press `2` → Display: 2
2. Press `.` → Display: 2.
3. Press `5` → Display: 2.5
4. Pressing `.` again does nothing (validation prevents multiple decimals)

### Error Handling
1. Press `5` → Display: 5
2. Press `/` → Display: 5
3. Press `0` → Display: 0
4. Press `=` → Display: "Cannot divide by zero"
5. Press any number → Clears error and starts fresh calculation

## Future Improvements

- **Keyboard support**: Add event listeners for number and operator keys
- **History**: Display previous calculations
- **Percentage button**: Calculate percentages
- **Square root and power buttons**: Advanced operations
- **Toggle theme**: Light/dark mode toggle
- **Sound feedback**: Audio on button clicks
- **LocalStorage**: Save last calculation history
- **Unit tests**: Jest tests for helper functions
- **PWA support**: Make it installable as a web app

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses standard CSS and JavaScript features.

## License

Open source – feel free to use, modify, and distribute.

## Screenshots

[Screenshot section placeholder – use the app in your browser and take screenshots of:
1. Desktop view with full calculator visible
2. Mobile view showing responsive layout
3. Calculator with a calculation in progress
4. Result display]

---

Built with ❤️ for learners and developers.
