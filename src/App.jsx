import { useState, useEffect } from 'react';
import profile from './assets/data/profile';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);

function toggleTheme() {
  setTheme(theme === 'light' ? 'dark' : 'light');
}

  return (
    <>
      <Navbar name={profile.name} theme={theme} onToggleTheme={toggleTheme} />

<main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact email={profile.email} />
      </main>
      <Footer name={profile.name} socials={profile.socials} />
    </>
  );
}

export default App;