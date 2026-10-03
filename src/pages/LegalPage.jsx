import './LegalPage.css';

export default function LegalPage({ title, content }) {
  return (
    <div className="legal-page fade-in container">
      <div className="legal-content mx-auto">
        <h1 className="text-5xl mb-8 text-center">{title}</h1>
        <div className="legal-text text-lg fw-300">
          {content}
        </div>
      </div>
    </div>
  );
}
