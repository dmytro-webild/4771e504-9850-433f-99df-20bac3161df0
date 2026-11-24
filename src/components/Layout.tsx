import { Outlet } from "react-router-dom";
import NavbarHudBar from "@/components/navbars/NavbarHudBar";
import FooterFieldWordmark from "@/components/sections/footer/FooterFieldWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-particles="finance" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarHudBar
          brand="InvestSelect W. Foisinger"
          navItems={[
            {
              name: "Beratungsthemen",
              href: "#services"
            },
            {
              name: "Über den Berater",
              href: "#about"
            },
            {
              name: "Erfahrung & Zahlen",
              href: "#metrics"
            },
            {
              name: "Häufige Fragen",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Kontakt aufnehmen",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-particles="finance" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterFieldWordmark
          brand="InvestSelect W. Foisinger"
          offices={[
            "Maximilianstraße 12, 80339 München"
          ]}
          columns={[
            {
              title: "Navigation",
              links: [
                {
                  text: "Über uns",
                  href: "#about"
                },
                {
                  text: "Leistungen",
                  href: "#services"
                },
                {
                  text: "Kennzahlen",
                  href: "#metrics"
                },
                {
                  text: "Kontakt",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Beratungsfelder",
              links: [
                {
                  text: "Altersvorsorge",
                  href: "#services"
                },
                {
                  text: "Vermögensaufbau",
                  href: "#services"
                },
                {
                  text: "Unabhängige Finanzberatung",
                  href: "#services"
                }
              ]
            },
            {
              title: "Service",
              links: [
                {
                  text: "Erstgespräch",
                  href: "#contact"
                },
                {
                  text: "Kundenstimmen",
                  href: "#testimonial"
                },
                {
                  text: "Häufige Fragen",
                  href: "#faq"
                }
              ]
            },
            {
              title: "Rechtliches",
              links: [
                {
                  text: "Impressum",
                  href: "#"
                },
                {
                  text: "Datenschutz",
                  href: "#"
                },
                {
                  text: "Erstinformation",
                  href: "#"
                }
              ]
            }
          ]}
          copyright="© 2026 InvestSelect W. Foisinger. Alle Rechte vorbehalten."
          backToTop="Nach oben"
          imageSrc="https://img.b2bpic.net/free-photo/top-view-desktop-with-paper-calculator_23-2148397910.jpg"
          imageAlt="Finanzanalyse und Dokumente auf dem Schreibtisch"
          ariaLabel="Fußzeile der Website"
        />
      </footer>
    </div>
  );
}
