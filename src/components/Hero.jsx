// Import React hooks for state, lifecycle, and memoized callbacks
import { useState, useEffect, useCallback } from "react";

// Import component-specific styling
import "./Hero.css";

// ─── Import Clinic Images ─────────────────────────────────────
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";

// ─── Slides Data Configuration ────────────────────────────────
// Each object represents one slide in the hero carousel
const SLIDES = [
  {
    image: doctor1, // Slide background image
    title: ["Restoring Movement,", "Healing & Confidence"], // Multi-line heading
    description:
      "Krishna Healthcare delivers advanced physiotherapy and orthopaedic solutions designed to improve mobility, reduce pain, and restore quality of life through personalised clinical care.",
    button: "Book a Consultation", // CTA button text
  },
  {
    image: doctor2,
    title: ["Krishna Health Care", "& Physiotherapy Centre"],
    description:
      "State-of-the-art facility at Sindhora Road, Varanasi. Our expert team of physiotherapists and orthopaedic specialists are here to help you heal and recover faster.",
    button: "Visit Our Centre",
  },
  {
    image: doctor3,
    title: ["Advanced Gait Training", "& Rehabilitation"],
    description:
      "Using modern Gait Trainer equipment and evidence-based techniques, we help patients regain walking ability, balance, and independence with expert supervision.",
    button: "View Services",
  },
];

// ─── SVG Icon Components (Reusable UI Elements) ───────────────

// Arrow icon used inside CTA button
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path
      d="M2 7.5h11M8.5 3l4.5 4.5L8.5 12"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Left navigation arrow
const ChevLeft = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M11 3.5L5.5 9l5.5 5.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Right navigation arrow
const ChevRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M7 3.5L12.5 9 7 14.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Hero() {

  // State to track current slide index
  const [index, setIndex] = useState(0);

  // State to trigger exit animation before changing slide
  const [leaving, setLeaving] = useState(false);

  // Function to navigate to a specific slide
  // Wrapped in useCallback to prevent unnecessary re-renders
  const goTo = useCallback((next) => {
    setLeaving(true); // Trigger exit animation

    setTimeout(() => {
      // Update slide index safely using modulo logic
      setIndex((next + SLIDES.length) % SLIDES.length);
      setLeaving(false); // Trigger entry animation
    }, 350); // Animation duration sync
  }, []);

  // Move to next slide
  const nextSlide = useCallback(
    () => goTo(index + 1),
    [index, goTo]
  );

  // Move to previous slide
  const prevSlide = () => goTo(index - 1);

  // Auto-slide effect (runs every 5 seconds)
  useEffect(() => {
    const t = setInterval(nextSlide, 5000);

    // Cleanup interval to avoid memory leaks
    return () => clearInterval(t);
  }, [nextSlide]);

  // Current slide object
  const s = SLIDES[index];

  return (
    <section className="hero">

      {/* Background Decorative Elements */}
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-cross bc-tl" />
        <div className="bg-cross bc-bl" />
        <div className="bg-cross bc-mid" />
        <div className="bg-cross bc-br" />
        <div className="bg-ring br-1" />
        <div className="bg-ring br-2" />
        <div className="bg-ring br-3" />
      </div>

      {/* LEFT CONTENT SECTION */}
      <div className="hero-left">

        {/* Title with animation class toggle */}
        <h1 className={`h1${leaving ? " tx-out" : " tx-in"}`}>
          {s.title.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h1>

        {/* Call-to-Action Button */}
        <button className="cta-btn">
          <span className="cta-text">{s.button}</span>
          <span className="cta-icon"><ArrowIcon /></span>
        </button>

        {/* Glass-style description card */}
        <div className={`glass-desc${leaving ? " tx-out" : " tx-in"}`}>
          <p>{s.description}</p>
        </div>

        {/* Slide Indicator Dots */}
        <div className="dot-row">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot-btn${i === index ? " dot-on" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="hero-right">
        <div className="img-box">

          {/* Key forces image re-render for animation */}
          <img
            key={index}
            src={s.image}
            alt={s.title[0]}
            className={`hero-img${leaving ? " img-out" : " img-in"}`}
          />

          {/* Overlay vignette effect */}
          <div className="img-vignette" />

          {/* Navigation Arrows */}
          <div className="nav-arrows">
            <button className="nav-arr" onClick={prevSlide} aria-label="Previous">
              <ChevLeft />
            </button>
            <button className="nav-arr" onClick={nextSlide} aria-label="Next">
              <ChevRight />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;
