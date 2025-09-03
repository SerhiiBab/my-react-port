import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // создаем ref для каждой секции
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // функция для прокрутки
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav class="main-nav">
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button> -|-{" "}
        <button onClick={() => scrollToSection(skillsRef)}>Skills</button> -|-{" "}
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>


{/* Section Hero */}
<div class="hero-section">
  <div class="hero-section__left"><p>Hero</p></div>
  <div class="hero-section__right">Text</div>

</div>
      {/* Section Projects */}
      <div ref={projectsRef} style={{ padding: "50px 0" }}>
        <h1>Projects</h1>
        
  
        <p className="serhii">My Test TEXT hurra2!</p>
      </div>

      {/* Section Skills */}
      <div ref={skillsRef} style={{ padding: "50px 0" }}>
        <h1>Skills</h1>
        <p>Здесь можно добавить информацию о навыках.</p>
      </div>

      {/* Section Contact */}
      <div ref={contactRef} style={{ padding: "50px 0" }}>
        <h1>Contact</h1>
        <p>Здесь можно добавить контактную информацию.</p>
      </div>
    </>
  );
}

export default App;

{/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Projects</Link> |{" "}
        <Link to="/about">Skills</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="serhii">My Test TEXT hurra2!</p>
    </BrowserRouter>
  )
}

export default App
*/}