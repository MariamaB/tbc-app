import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirements-manufacturer',
  templateUrl: './requirements-manufacturer.component.html',
  styleUrls: ['./requirements-manufacturer.component.scss'],
})
export class RequirementsManufacturerComponent implements OnInit {
  poducerRequirements = [
    [
      // 'a) Medizinischer Nutzen',
      'Verbesserung des Gesundheitszustands',
      'Verkürzung der Krankheitsdauer',
      'Verlängerung des Überlebens',
      'Verbesserung der Lenbensqualität',
    ],
    [
      // 'b) Patientenrelevate Struktur- und Verfahrensverbesserungen',
      'Koordination der Behandlungsabläufe',
      'Ausrichtung der Behandlung an Leitlinien und Standards',
      'Adhärenz',
      'Erleichterung des Zustands zur Versorgung',
      'Patientensicherheit',
      'Gesundheitskompetenz, Patientensouveränität',
      'Bewältigung krankheitsbedingter Schwierigkeiten im Alltag',
      'Aufwandsreduzierung für Patienten, Angehörige',
    ],
    [
      // 'c) Ökonomischer Nutzen',
      'Arbeitsreduzierung',
      'Kostenreduzierung -> keine DiGA',
    ],
  ];

  normRequirements = [
    'Fähigkeit, Konformität zu erklären (Medizinprodukt "zertifizieren"): z.B. Zertifizierung nach ISO13485',
    'Erfüllung Datenschutzanforderungen und Datensicherheit: -> z.B. nach DSGVO und Sdtand der Technik',
  ];

  studyParameters = ['Ziel', 'Parameter', 'Methode', 'Datenquelle'];

  constructor() {}

  ngOnInit() {}
}
