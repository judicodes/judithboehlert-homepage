import clsx from "clsx";

interface Props {
  open: boolean;
  handleClose: () => void;
}

function LegalModal({ open, handleClose }: Props) {
  return (
    <dialog
      id="legal-modal"
      className={clsx("modal bg-blue-100", open && "modal-open")}
    >
      <div className="modal-box bg-neutral-100 dark:bg-neutral-900">
        <form method="dialog">
          <button
            onClick={handleClose}
            type="button"
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-neutral-900 dark:text-neutral-100"
          >
            ✕
          </button>
        </form>

        <div className="text-neutral-900 dark:text-neutral-100">
          <h1 className="mb-2 font-serif text-2xl">Impressum (Legal Notice)</h1>

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
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de/impressum-generator.html">
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default LegalModal;
