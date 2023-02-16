import { useState } from 'preact/hooks'
import heroLogo from './assets/herocoders.svg'
import './app.css'

export function App() {
  return (
    <>
      <h1>
        <img src={heroLogo} class="logo herocoders" alt="HeroCoders" />
      </h1>

      <div class="card">
        We are the <strong>heroes</strong> your code needs!
      </div>

      <ul class="list-unstyled">
        <li><code>Ruby on Rails</code></li>
        <li><code>React</code></li>
        <li><code>Web development</code></li>
      </ul>
    </>
  )
}
