import { useState } from 'preact/hooks'
import heroLogo from './assets/herocoders.svg'
import './app.css'

export function App() {
  return (
    <>
      <div>
        <img src={heroLogo} class="logo herocoders" alt="HeroCoders logo" />
      </div>

      <h1>HeroCoders</h1>

      <div class="card">
        <marquee>
          Coming <code>soon</code>!
        </marquee>
      </div>

      <ul class="read-the-docs">
        <li><code>Ruby on Rails</code></li>
        <li><code>React</code></li>
        <li><code>Web development</code></li>
      </ul>
    </>
  )
}
