import HeroParticleIsland from "@/components/sections/hero/HeroParticleIsland";
import AboutParticleMast from "@/components/sections/about/AboutParticleMast";
import ServicesFieldCards from "@/components/sections/features/ServicesFieldCards";
import MetricsParticleField from "@/components/sections/metrics/MetricsParticleField";
import TestimonialCaseSlider from "@/components/sections/testimonial/TestimonialCaseSlider";
import FaqNumberedRows from "@/components/sections/faq/FaqNumberedRows";
import ContactTickForm from "@/components/sections/contact/ContactTickForm";
import LoaderSignalDot from "@/components/loaders/LoaderSignalDot";

export default function HomePage() {
  return (
    <>
      <LoaderSignalDot
        readout="100% Unabhängig"
        brand="InvestSelect W. Foisinger"
        introDelay={1.4}
      />

      <div id="hero" data-webild-section="HeroParticleIsland" data-webild-section-id="HeroParticleIsland-1" data-section="hero" data-scene>
        <HeroParticleIsland
          title="Unabhängige Beratung für Ihr Vermögen"
          description="Maßgeschneiderte Konzepte für Vorsorge und Vermögen. Transparent, objektiv und persönlich für Ihre Zukunft."
          primaryButton={{
            text: "Erstgespräch",
            href: "#contact"
          }}
          readoutValue={100}
          readoutUnit="%"
          readoutCaption="100% unabhängig, 15+ Jahre Erfahrung"
          scrollHint="Mehr erfahren"
          introDelay={1.4}
        />
      </div>

      <div id="about" data-webild-section="AboutParticleMast" data-webild-section-id="AboutParticleMast-1" data-section="about">
        <AboutParticleMast
          label="Über InvestSelect"
          title="Persönliche Beratung ohne Bankenbindung"
          items={[
            {
              title: "Objektive Empfehlungen durch 100% echte Unabhängigkeit"
            },
            {
              title: "Über 15 Jahre Erfahrung in Vorsorge und Vermögensaufbau"
            },
            {
              title: "Maßgeschneiderte Konzepte für Ihre persönliche Vorsorge"
            },
            {
              title: "Transparente Beratung mit messbarem Mehrwert für Kunden"
            },
            {
              title: "Persönliche Betreuung direkt durch Wolfgang Foisinger"
            }
          ]}
          scanLabel="Erfahrung"
          scanMeta="15+ Jahre"
          meterValue={100}
          meterUnit="%"
          readout={{
            label: "Betreute Mandanten",
            value: 500,
            suffix: "+"
          }}
        />
      </div>

      <div id="services" data-webild-section="ServicesFieldCards" data-webild-section-id="ServicesFieldCards-1" data-section="services">
        <ServicesFieldCards
          tag="Unsere Leistungen"
          title="Klarheit für Ihr Vermögen"
          items={[
            {
              label: "Analyse",
              title: "Systematische Finanzanalyse",
              imageSrc: "https://img.b2bpic.net/free-photo/eyeglasses-diary-laptop-pen-coffee-cup-budget-plan-office-desk_23-2148178562.jpg",
              imageAlt: "Eyeglasses on diary,laptop,pen,coffee cup and budget plan on office desk",
              description: "Systematische Bestandsaufnahme aller Einnahmen, Verträge und Vermögenswerte für maximale Übersicht."
            },
            {
              label: "Planung",
              title: "Vorsorge für den Ruhestand",
              imageSrc: "https://img.b2bpic.net/free-photo/working-office_1150-121.jpg",
              imageAlt: "Working at the office",
              description: "Vorausschauende Konzepte für Ihren finanziell abgesicherten und unbeschwerten Lebensabend."
            },
            {
              label: "Anlage",
              title: "Strategie für Ihr Vermögen",
              imageSrc: "https://img.b2bpic.net/free-photo/young-team-coworkers-working-project_273609-15664.jpg",
              imageAlt: "Young team of coworkers working on project",
              description: "Unabhängiger Vermögensaufbau abgestimmt auf Ihre persönlichen Ziele und Ihre Risikobereitschaft."
            },
            {
              label: "Steuer",
              title: "Optimierung von Steuern",
              imageSrc: "https://img.b2bpic.net/free-photo/business-partners-sitting-cafe_1157-16978.jpg",
              imageAlt: "Business partners sitting in a cafe",
              description: "Gestaltungsmöglichkeiten nutzen und Abgaben im Rahmen Ihrer Geldanlage nachhaltig senken."
            }
          ]}
        />
      </div>

      <div id="metrics" data-webild-section="MetricsParticleField" data-webild-section-id="MetricsParticleField-1" data-section="metrics">
        <MetricsParticleField
          label="Zahlen & Fakten"
          title="Messbare Kennzahlen"
          items={[
            {
              value: 15,
              suffix: "+",
              label: "Jahre Erfahrung"
            },
            {
              value: 100,
              suffix: "%",
              label: "Unabhängigkeit"
            },
            {
              value: 500,
              suffix: "+",
              label: "Betreute Mandanten"
            },
            {
              value: 0,
              suffix: "%",
              label: "Versteckte Kosten"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialCaseSlider" data-webild-section-id="TestimonialCaseSlider-1" data-section="testimonial">
        <TestimonialCaseSlider
          tag="Erfahrungen"
          title="Stimmen unserer Mandanten"
          items={[
            {
              quote: "Exzellente Beratung, sehr bodenständig und auf den Punkt. Meine Anliegen wurden direkt verstanden.",
              name: "Laura Fischer",
              role: "Unternehmerin",
              label: "Mandantenstimme",
              imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-writes-notebook-while-working-analysis-business-data-office_1150-1470.jpg",
              imageAlt: "Young businessman writes in a notebook while working analysis business data in office."
            },
            {
              quote: "Endlich verstehe ich meine Altersvorsorge im Detail. Alles wurde sehr verständlich erklärt.",
              name: "Lukas Wagner",
              role: "Angestellter",
              label: "Mandantenstimme",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-desktop-with-paper-calculator_23-2148397910.jpg",
              imageAlt: "laptop and financial chart on desk"
            },
            {
              quote: "Die Strukturierung meiner Geldanlage hat mir sehr geholfen. Ich fühle mich bestens betreut.",
              name: "Lisa Richter",
              role: "Freiberuflerin",
              label: "Mandantenstimme",
              imageSrc: "https://img.b2bpic.net/free-photo/young-agent-mature-customer-meeting-cup-coffee-co-working-sitting-table-holding-documents_74855-10456.jpg",
              imageAlt: "Young agent and mature customer meeting over cup of coffee at co-working, sitting at table, holding documents, "
            },
            {
              quote: "Sehr verlässlicher Partner bei Finanzfragen. Die Unabhängigkeit überzeugt mich absolut.",
              name: "Felix Becker",
              role: "Privatier",
              label: "Mandantenstimme",
              imageSrc: "https://img.b2bpic.net/free-photo/glasses-pen-report_23-2148148367.jpg",
              imageAlt: "financial charts and glasses on desk"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqNumberedRows" data-webild-section-id="FaqNumberedRows-1" data-section="faq">
        <FaqNumberedRows
          tag="FAQ"
          title="Häufige Fragen"
          items={[
            {
              title: "Wie läuft ein Erstgespräch ab?",
              description: "Im ersten unverbindlichen Gespräch analysieren wir Ihre aktuelle Finanzsituation und besprechen Ihre persönlichen Ziele."
            },
            {
              title: "Kostet die Beratung Geld?",
              description: "Transparenz ist unsere Grundlage. Über eventuelle Vergütungsmodelle oder Honorare informieren wir Sie vollständig vor Beginn der Beratung."
            },
            {
              title: "Sind Sie an Banken gebunden?",
              description: "Nein, wir agieren völlig frei von Konzernvorgaben und wählen Angebote ausschließlich in Ihrem Interesse aus."
            },
            {
              title: "Welche Unterlagen sollte ich mitbringen?",
              description: "Bringen Sie gerne vorhandene Verträge, Übersichten zum Vermögensaufbau sowie Ihre aktuellen Renteninformationen zum Ersttermin mit."
            },
            {
              title: "Wie unterscheidet sich die freie Beratung?",
              description: "Hausbanken vertreiben eigene Produkte. Als unabhängiger Berater vergleichen wir den Markt objektiv für Ihre beste Lösung."
            },
            {
              title: "Wo findet die Beratung statt?",
              description: "Wir beraten Sie persönlich in der Maximilianstraße 12 in München oder auf Wunsch auch direkt flexibel per Video."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactTickForm" data-webild-section-id="ContactTickForm-1" data-section="contact">
        <ContactTickForm
          title="Erstgespräch vereinbaren"
          submitText="Anfrage senden"
          successText="Vielen Dank, wir melden uns innerhalb eines Werktages bei Ihnen."
          readout="80339 München"
          labels={{
            name: "Ihr Name",
            email: "E-Mail-Adresse",
            company: "Anliegen oder Thema",
            message: "Ihre Nachricht"
          }}
        />
      </div>
    </>
  );
}
