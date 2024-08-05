import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";

function LegalModal() {
  return (
    <DialogContent className="no-scrollbar max-h-screen max-w-xs overflow-auto border-none bg-beige-100 text-bluegrey-900 sm:max-w-sm md:max-w-lg dark:bg-bluegrey-900 dark:text-bluegrey-100">
      <DialogHeader>
        <DialogTitle>Impressum (Legal Notice)</DialogTitle>
        <DialogDescription>According to German law.</DialogDescription>
      </DialogHeader>

      <p className="mb-2">
        Judith B&ouml;hlert
        <br />
        Judith B&ouml;hlert - Software Engineering &amp; Consulting
        <br />
        Nazarathkirchstra&szlig;e 43
        <br />
        13347 Berlin
      </p>
      <h2 className="underline">Kontakt: </h2>
      <p className="mb-2">
        Telefon: +4917684879910
        <br />
        E-Mail: hello@judithboehlert.com
      </p>

      <h2 className="underline">Umsatzsteuer-ID:</h2>
      <p className="mb-2">
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
        Umsatzsteuergesetz:
        <br />
        DE363938907
      </p>

      <h2 className="underline">EU-Streitschlichtung:</h2>
      <p className="mb-2">
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="underline">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle:
      </h2>
      <p className="mb-2">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle:{" "}
        <a href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </DialogContent>
  );
}

export default LegalModal;
