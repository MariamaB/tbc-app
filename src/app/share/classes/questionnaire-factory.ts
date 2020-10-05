import { IQQuestion, ITrustBuildCategory } from '../interfaces/interfaces';

export class QuestionnaireFactory {
  public static createBusinessQuestionnaire(): ITrustBuildCategory[] {
    return [
      {
        category: 'Plattform-Betreiber',
        questions: [
          {
            question: 'Welche Mission hat das Unternehmen',
            answer:
              'z.B. Online-Psychotherapie für GKV-Versicherte mit großer Nachhaltigkeit',
          },
          {
            question: 'Welches sind die Werte des Unternehmens?',
            answer:
              'z.B. Wertschätzung, Vielfalt, Toleranz, Teamgeist, Innovation, unternehmerisches Denken',
          },
          {
            question: 'Wer sind relevante Teammitglieder?',
            answer:
              'z.B. Psychotherapeutin, Software-Entwicklerin, BWL-Experte, UX-Experte',
          },
          {
            question: 'Welche Organisationsform besitzt die Plattform?',
            answer:
              'z.B. Optionen: GmbH, gGmbH, UG, AG, Genossenschaft, Verein, Sonstige',
          },
          {
            question: 'Wo ist der Sitz der Unternehmung (Region, Land)?',
            answer: 'z.B. Berlin, Deutschland',
          },
          {
            question: 'Welches sind Referenzprojekte?',
            answer: 'z.B. Projekt "AID" in Kooperation mit der Charité',
          },
          {
            question:
              'Welche Zertifizierungen, Qualitätsauszeichnungen besitzt das Unternehmen?',
            answer: 'z.B. ISO 13485, ISO 27001 und "Top-Arbeitgeber',
          },
          {
            question: 'Welche Bewertungen von Dritten gibt es?',
            answer:
              'z.B. Bewertung durch Stiftung-Warentest, "Digitale Begleiter bei Depression',
          },
          {
            question:
              'Ist das Unternehmen unabhängig von Dritten? Welches sind relevante Partner',
            answer:
              'z.B. finanzielle und fachliche Unabhängigkeit / Charité und HTW sind wissenschaftliche Partner',
          },
        ],
      },
      {
        category: 'Applikation',
        questions: [
          {
            question: 'Identifikation / Registrierung',
            answer: 'z.B. E-Mail, Password / 2-Faktor-Authentifizierung',
          },
          {
            question: 'Matching - Transparenz des Verfahrens ',
            answer:
              'z.B. Zuordnung Patient – Therapeut über standardisierten Fragebogen',
          },
          {
            question: 'Transaktion – Überblick Nutzungsprozess',
            answer:
              'z.B. Visuelle Darstellung der Schritte des Online-Behandlungsprozesses',
          },
          {
            question: 'Nutzungs-/Kaufanreize / Preispolitik',
            answer: 'z.B. Kostenübernahme durch GKV',
          },
          {
            question: 'Interaktion / Kommunikation',
            answer: 'z.B. Chat integriert in App',
          },
        ],
      },
      {
        category: 'Gesundheit / Therapie',
        questions: [
          {
            question: 'Etablierte Methode',
            answer: 'z.B. Kognitive Verhaltenstherapie (KVT)',
          },
          {
            question: 'Wissenschaftliche Studien',
            answer:
              'z.B. Studie zur CBASP-Therapie in Kooperation mit der Charité',
          },
          {
            question: 'Expertenmeinungen',
            answer: 'z.B. Charité-Wissenschaftler, Patienten',
          },
        ],
      },
      {
        category: 'Daten',
        questions: [
          {
            question: 'Inhalt / Beiträge',
            answer:
              'z.B. Überwachung der fachlichen Inhalte und Beiträgen von Betroffenen',
          },
          {
            question: 'Datenschutz / Datensicherheit',
            answer:
              'z.B. DSGVO-Vorgaben werden erfüllt und Zertifizierung nach ISO 27001 existiert',
          },
          {
            question: 'Datenspeicher',
            answer: 'z.B. Zertifizierte Online-Cloud-Speicher in der EU',
          },
          {
            question: 'Transfer / Datenexport',
            answer:
              'z.B. Datenaustausch per SSL-Verschlüsselung. Export möglich',
          },
          {
            question: 'Transparenz der Datennutzun',
            answer:
              'z.B. Datennutzung in anonymisierter Form für die Wissenschaft',
          },
        ],
      },
      {
        category: 'Infrastruktur',
        questions: [
          {
            question: 'Wo befindet sich der Daten-Server?',
            answer: 'z.B. EU / Deutschland',
          },
          {
            question:
              'Welche Maßnahmen für die Sicherheit und dem Schutz vor Hacker-Attacken',
            answer: 'z.B. Firewall',
          },
          {
            question: 'Infrastruktur-Konnektivität / Standards',
            answer: 'z.B. FHIR-Standard',
          },
        ],
      },
    ];
  }
}
