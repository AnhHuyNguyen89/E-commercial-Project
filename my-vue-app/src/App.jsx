//import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./Header";
import "tailwindcss";
import { Hero } from "./Banner";
import { AboutSection } from "./About";
import { ContactSection } from "./Contact";
import { Footer } from "./Footer";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
