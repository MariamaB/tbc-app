import { ITrustBuildCanvas } from '../interfaces/interfaces';

export class TrustBuildCanvasFactory {
  public static createTrustBuildCanvas(): ITrustBuildCanvas {
    return {
      categories: [
        {
          categoryTitle: 'Plattform-Betreiber',
          questions: [
            {
              question: 'Mission',
              answer: ''
            },
            {
              question: 'Werte',
              answer: ''
            },
            {
              question: 'Teammitglieder',
              answer: ''
            },
            {
              question: 'Organisationsform',
              answer: ''
            },
            {
              question: 'Sitz ',
              answer: ''
            },
            {
              question: 'Referenzprojekte',
              answer: ''
            },
            {
              question: 'Zertifizierungen, Qualitätsauszeichnungen',
              answer: ''
            },
            {
              question: 'Bewertungen von Dritten',
              answer: ''
            },
            {
              question: 'Partner',
              answer: ''
            },
          ],
        },
        {
          categoryTitle: 'Applikation',
          questions: [
            {
              question: 'Identifikation / Registrierung',
              answer: ''
            },
            {
              question: 'Matching - Transparenz des Verfahrens',
              answer: ''
            },
            {
              question: 'Transaktion – Überblick Nutzungsprozess',
              answer: ''
            },
            {
              question: 'Nutzungs-/Kaufanreize / Preispolitik',
              answer: ''
            },
            {
              question: 'Interaktion / Kommunikation',
              answer: ''
            },
          ],
        },
        {
          categoryTitle: 'Gesundheit / Therapie',
          questions: [
            {
              question: 'Etablierte Methode',
              answer: ''
            },
            {
              question: 'Wissenschaftliche Studien',
              answer: ''
            },
            {
              question: 'Expertenmeinungen',
              answer: ''
            },
          ],
        },
        {
          categoryTitle: 'Daten',
          questions: [
            {
              question: 'Inhalt / Beiträge',
              answer: ''
            },
            {
              question: 'Datenschutz / Datensicherheit',
              answer: ''
            },
            {
              question: 'Datenspeicher',
              answer: ''
            },
            {
              question: 'Transfer / Datenexport',
              answer: ''
            },
            {
              question: 'Transparenz der Datennutzung',
              answer: ''
            },
          ],
        },
        {
          categoryTitle: 'Infrastruktur',
          questions: [
            {
              question: 'Ort des Daten-Server',
              answer: ''
            },
            {
              question: 'Sicherheit/Schutz vor Hacker-Attacken',
              answer: ''
            },
            {
              question: 'Infrastruktur-Konnektivität / Standards',
              answer: ''
            },
          ],
        },
      ],
    };
  }
}
