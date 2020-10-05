import { ITrustBuildCanvas } from '../interfaces/interfaces';

export class TrustBuildCanvasFactory {
  public static createTrustBuildCanvas(): ITrustBuildCanvas {
    return {
      categories: [
        {
          category: 'Plattform-Betreiber',
          questions: [
            {
              question: 'Mission',
              answer: '',
            },
            {
              question: 'Werte',
              answer: '',
            },
            {
              question: 'Teammitglieder',
              answer: '',
            },
            {
              question: 'Organisationsform',
              answer: '',
            },
            {
              question: 'Sitz ',
              answer: '',
            },
            {
              question: 'Referenzprojekte',
              answer: '',
            },
            {
              question: 'Zertifizierungen, Qualitätsauszeichnungen',
              answer: '',
            },
            {
              question: 'Bewertungen von Dritten',
              answer: '',
            },
            {
              question: 'Partner',
              answer: '',
            },
          ],
        },
        {
          category: 'Applikation',
          questions: [
            {
              question: 'Identifikation / Registrierung',
              answer: '',
            },
            {
              question: 'Matching - Transparenz des Verfahrens',
              answer: '',
            },
            {
              question: 'Transaktion – Überblick Nutzungsprozess',
              answer: '',
            },
            {
              question: 'Nutzungs-/Kaufanreize / Preispolitik',
              answer: '',
            },
            {
              question: 'Interaktion / Kommunikation',
              answer: '',
            },
          ],
        },
        {
          category: 'Gesundheit / Therapie',
          questions: [
            {
              question: 'Etablierte Methode',
              answer: '',
            },
            {
              question: 'Wissenschaftliche Studien',
              answer: '',
            },
            {
              question: 'Expertenmeinungen',
              answer: '',
            },
          ],
        },
        {
          category: 'Daten',
          questions: [
            {
              question: 'Inhalt / Beiträge',
              answer: '',
            },
            {
              question: 'Datenschutz / Datensicherheit',
              answer: '',
            },
            {
              question: 'Datenspeicher',
              answer: '',
            },
            {
              question: 'Transfer / Datenexport',
              answer: '',
            },
            {
              question: 'Transparenz der Datennutzung',
              answer: '',
            },
          ],
        },
        {
          category: 'Infrastruktur',
          questions: [
            {
              question: 'Ort des Daten-Server',
              answer: '',
            },
            {
              question: 'Sicherheit/Schutz vor Hacker-Attacken',
              answer: '',
            },
            {
              question: 'Infrastruktur-Konnektivität / Standards',
              answer: '',
            },
          ],
        },
      ],
    };
  }
}
