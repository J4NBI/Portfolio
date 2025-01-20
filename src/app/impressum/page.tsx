import React from "react";

const Impressum = () => {
  return (
    <div className="container mt-12">
      <div className="w-full inline-flex flex-col justify-center gap-4 mx-auto">
        <h1>Impressum</h1>
        <h2 id="m46">Diensteanbieter</h2>
        <div>
          <p>Jan Bihl</p>
          <p>Mareschstraße 14</p>
          <p>12055 Berlin</p>
        </div>
        <h2 id="m56">Kontaktmöglichkeiten</h2>
        <p>
          E-Mail-Adresse: <a href="mailto:mail@janbihl.de">mail@janbihl.de</a>
        </p>
        <p className="seal">
          <a
            href="https://datenschutz-generator.de/"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </p>
      </div>
    </div>
  );
};

export default Impressum;
