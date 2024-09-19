import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

function processInput(input: number | string | boolean): number | string | boolean {
  if (typeof input === 'number') {
    return input * input;
  } else if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'boolean') {
    return !input;
  }
  return input;
}

console.log(processInput(4));         // Output: 16
console.log(processInput("hello"));   // Output: "HELLO"
console.log(processInput(true));      // Output: false