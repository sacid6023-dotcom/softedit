import './About.css';
import FAQ from '../components/FAQ';

export default function About() {
  return (
    <div className="about-page fade-in">
      <section className="about-hero flex items-center justify-center">
        <div className="about-hero-text text-center text-white">
          <h1 className="text-6xl">Our Story</h1>
        </div>
      </section>
      
      <section className="about-content container grid items-center">
        <div className="about-text flex-col gap-6">
          <h2 className="text-5xl">The Philosophy of Soft Edit</h2>
          <p className="text-xl text-light fw-300">
            Founded in Moradabad, India, Soft Edit Cosmetics is born from a desire to create a modern beauty identity that feels luxurious, minimal, and deeply personal. We believe makeup shouldn't mask who you are, but softly edit your features to highlight your natural elegance.
          </p>
          <p className="text-xl text-light fw-300">
            Every product we launch is carefully curated—an "edit" of essential shades and formulas designed to integrate seamlessly into your everyday life.
          </p>
        </div>
        <div className="about-image img-hover-zoom">
          <img src="/products/Martini/Martini.PNG" alt="Soft Edit Philosophy" />
        </div>
      </section>

      <FAQ />

    </div>
  );
}
