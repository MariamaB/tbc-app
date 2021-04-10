import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicalIntendedUseComponent } from '../sub-components/medical-intended-use/medical-intended-use.component';

@Component({
  selector: 'app-diga-canvas',
  templateUrl: './diga-canvas.component.html',
  styleUrls: ['./diga-canvas.component.scss'],
})
export class DigaCanvasComponent implements OnInit, AfterViewInit {
  public zweckbestimmung = [];
  public navList = [];
  name: string;
  supportTypes: string[];
  usersegment: string[];
  appRequirements: string[];
  mainFunktion: string[];
  poducerRequirements: string[][];
  normRequirements: string[];
  studyParameters: string[];
  marketAccess: any;
  val = '';
  languages = ['deutsch', 'englisch'];
  message: any;
  data: any;

  questionnaire = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  data2: string[];

  constructor(private _formBuilder: FormBuilder) {}
  @ViewChild(MedicalIntendedUseComponent) child;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.navList = [
      'Medizinische Zweckbestimmung',
      'Funktion',
      'Nutzersegment',
      'Hauptfunktion',
      'DiGA-Anforderungen Hersteller',
      'DiGA-Anforderungen Anwendung',
      'Marktzugang',
    ];
    this.data = [
      'Entwicklung des Medizinproduktes',
      'Zertifizierung (ISO 13485), CE-Konformitätserklärung',
      'Datenschutz, Interoperabilität erfüllen',
      'Beratung beim BfArM einreichen (3 Monate Bearbeitung)',
      'Nachweise liefern',
      'Vergütungsbeträge übermitteln',
      'optional: BfArM-Nachfragen bearbeiten',
      'temporäre Aufnahme ins DiGA-Verzeichnis',
      'Studien, Nachweis positiver Versorgungseffekte',
      'dauerhafte Aufnahme ins DiGA-Verzeichnis',
      'Änderungsanzeige einreichen',
      'Ablehnung des Antrages analysieren',
    ];

    this.data2 = [
      'Aufnahme ins DiGA-Verzeichnis_(3.000 € ...9.900 €, § 25 DiGAV)',
      'Auskünfte und Beratung_(250 € ...5.000 €, § 27 DiGAV)',
      'Prüfung des Nachweises positiver Versorgungseffekte nach der Erprobung_(1.500 ...6.600 €, § 25 DiGAV)',
      'Gebühren pro Änderungsanzeige_(1.500 € ...4.900 €, § 26 DiGAV)',
      'Sonstige Gebühren im Kontext einer DiGA',
    ];

    this.poducerRequirements = [
      [
        'a) Medizinischer Nutzen',
        'Verbesserung des Gesundheitszustands',
        'Verkürzung der Krankheitsdauer',
        'Verlängerung des Überlebens',
        'Verbesserung der Lenbensqualität',
      ],
      [
        'b) Patientenrelevate Struktur- und Verfahrensverbesserungen',
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
        'c) Ökonomischer Nutzen',
        'Arbeitsreduzierung',
        'Kostenreduzierung -> keine DiGA',
      ],
    ];
    this.appRequirements = [
      'Sicherheit und Funktionstauglichkeit',
      'Datenschutz und Datensicherheit',
      'Qualität und Interoperabilität',
      'Robustheit',
      'Verbraucherschutz',
      'Nutzerfreundlichkeit',
      'Unterstützung und Leistungserbringer',
      'Qualität der medizinischen Inhalte',
      'Patientensicherheit',
    ];

    this.normRequirements = [
      'Fähigkeit, Konformität zu erklären (Medizinprodukt "zertifizieren"): z.B. Zertifizierung nach ISO13485',
      'Erfüllung Datenschutzanforderungen und Datensicherheit: -> z.B. nach DSGVO und Sdtand der Technik',
    ];

    this.studyParameters = ['Ziel', 'Parameter', 'Methode', 'Datenquelle'];
    this.marketAccess = {
      sections: [
        {
          name: 'Plattform',
          options: ['iOS', 'Android', 'Web Applikation'],
        },
        {
          name: 'Zuzahlung',
          inputFieled: { placeholder: '... €', input: '' },
        },
        {
          name: 'Zusatzgeräte',
          inputFieled: { placeholder: '...', input: '' },
        },
        {
          name: 'ICD-10-Code',
          inputFieled: { placeholder: '...', input: '' },
        },
        {
          name: 'Sprachen',
          options: ['deutsch', 'englisch'],
          inputFieled: { placeholder: 'Andere Sprache', input: '' },
        },
        {
          name: 'erste Verschreibung durch',
          inputFieled: { placeholder: '...', input: '' },
        },
      ],
      options: ['nein', 'ja, folgendes:'],
    };
  }

  ngAfterViewInit() {
    this.message = this.child.input;
  }

  public add(): void {
    console.log('new Language');
    console.log('new Language', this.val);
    this.languages.push(this.val);
  }
}
