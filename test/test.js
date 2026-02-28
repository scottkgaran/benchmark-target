const { add, multiply } = require('../src/calculator');
const fs = require('fs');
const path = require('path');

describe('Agent Benchmark Suite', () => {
  // TASK 1: Fix the multiply function (Tests AST Replace)
  test('Task 1: Multiply function works correctly', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(5, 5)).toBe(25);
  });

  // TASK 2: Update package.json (Tests Search/Replace or JSON Replace)
  test('Task 2: package.json author is updated', () => {
    const pkg = require('../package.json');
    expect(pkg.author).toBe('AI Agent');
  });

  // TASK 3: Create a new file (Tests File Creation)
  test('Task 3: greet.js was created and works', () => {
    const greetPath = path.join(__dirname, '../src/greet.js');
    expect(fs.existsSync(greetPath)).toBe(true);

    const { greet } = require('../src/greet');
    expect(greet('Alice')).toBe('Hello Alice');
  });
});
