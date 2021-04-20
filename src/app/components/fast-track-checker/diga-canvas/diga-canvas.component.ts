import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MedicalIntendedUseComponent } from '../sub-components/medical-intended-use/medical-intended-use.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diga-canvas',
  templateUrl: './diga-canvas.component.html',
  styleUrls: ['./diga-canvas.component.scss'],
})
export class DigaCanvasComponent implements OnInit, OnDestroy, AfterViewInit {
  formControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  icd10FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  languageFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
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
  Risikoklasse: string[];
  marketAccess: any;
  val = '';
  languages = ['deutsch', 'englisch'];
  message: any;
  data: any;

  jaNeinList = ['ja', 'nein'];

  mantainDeviceOnly = false;
  technology = false;
  riskClass = true;
  onEdit = false;
  uniqutestValue = false;
  testValue = false;
  testtext = '';
  questionnaire = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  data2: any[];
  diga: any = {
    name: 'M-sense Migräne 001 00315001',
    medRiskClase: 'Kl. I',
    author: 'John Doe',
    date: '2021-04-21',
    version: '1.0.1',
    intendedUse: [
      {
        name: 'Indikation',
        value:
          'G43 Migräne - M-sense Migräne kann, laut Zweckbestimmung, nur von Patienten mit einer Migränediagnose (ICD-10 G43, ICHD3 1) genutzt werden und demzufolge auch nur für Migränepatienten verschrieben werden.',
      },
      {
        name: 'Kontraindikation',
        value:
          'Trifft nicht zu. Für diese DiGA bestehen laut Hersteller keine medizinischen Kontraindikationen gemäß ICD-10.',
      },
      {
        name: 'Patentengruppen',
        value:
          'Erwachsene ≥ 18 Jahre mit Erkrankungsdauer von mindestens einem Jahr. Mindestens 3 Migränetage in den vorangegangenen 28 Tagen und Krankheitsbeginn vor dem 50. Lebensjahr',
      },
    ],
    medPurpose: '... Überwachung oder Linderung von Krankheiten',
    user: 'Patienten und Ärzte/Therapeuten gemeinsam',
    mainFunction: {
      digitalTechnologie: 'ja',
      description:
        'Der medizinische Nutzen der M-sense Migräne App bezieht sich sowohl auf die Reduktion von Migränetagen (Verbesserung des Gesundheitszustands) als auch auf die Verbesserung der gesundheitsbezogenen Lebensqualität und der Reduktion von Kopfschmerztagen (als sekundärer Endpunkt).',
      onlyControlDevice: false,
    },
    requirementManufacturer: {
      certificates: [true, true],
      medUse: [true, false, false, true],
      ecoUse: [false, false],
      strucProcoptimization: [
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        false,
      ],
      studie: [
        {
          name: 'Ziel',
          value:
            'Geplant ist eine randomisierte' +
            'kontrollierte Studie (RCT) zur Bewertung der Effektivität der M-sense Migräne-App (EMMA-Studie).',
        },
        {
          name: 'Methode',
          value:
            'EMMA ist eine randomisierte, offene, kontrollierte, zweiarmige Parallelgruppenstudie. Die Intervention besteht in der Nutzung des M-sense Migräne App für 12 Wochen.Die Patienten werden nach dem Zufallsprinzip im Verhältnis 1:1 einer der beiden Gruppen zugeteilt, um entweder Zugang zur vollständigen M-sense Migräne App oder zur Kontrollgruppen-App zu erhalten.',
        },
        {
          name: 'Parameter',
          value:
            'Erwachsene Patienten mit episodischer oder chronischer Migräne (ICD-10 G43), die ein Smartphone besitzen und daran interessiert sind, eine App als nicht-medikamentöse Intervention zu nutzen',
        },
        { name: 'Datenquelle', value: '' },
      ],
    },
    requirementApplication: [true, true, true, true, true, true, true],
    marketAccess: {
      platform: [true, true, false],
      additionalPayment: {
        answer: 'nein',
        amount: 0,
      },
      additionalDevices: {
        answer: 'nein',
        devices: '...',
      },
      icd10code: 'ICD-10 G43',
      languages: {
        defaultLang: [true, false],
        otherLang: {
          checked: false,
          languages: '',
        },
      },
      initPrescription: 'Vom Arzt',
    },
  };

  digaData$: Observable<any[]>;
  // constructor() {

  constructor(private firestore: AngularFirestore) {
    this.digaData$ = firestore.collection('data').valueChanges();
    const data = this.digaData$.toPromise().then((x) => {
      console.log('TEST');
      console.log('TEST', JSON.stringify(x, null, 2));
      return x;
    });
    console.log('ttteest');
    console.log('ttteest', JSON.stringify(data, null, 2));
    const things = firestore.collection('data').valueChanges();
    things.subscribe((x) => console.log('ttteest', JSON.stringify(x, null, 2)));
  }
  ngOnDestroy(): void {
    console.log('My diga', JSON.stringify(this.diga, null, 2));
  }
  ngOnInit() {
    this.Risikoklasse = ['Kl. I', 'Kl. IIa', 'andere'];
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
      { value: 'Entwicklung des Medizinproduktes', checked: false },
      {
        value: 'Zertifizierung (ISO 13485), CE-Konformitätserklärung',
        checked: false,
      },
      { value: 'Datenschutz, Interoperabilität erfüllen', checked: false },
      {
        value: 'Beratung beim BfArM einreichen (3 Monate Bearbeitung)',
        checked: false,
      },
      { value: 'Nachweise liefern', checked: true },
      { value: 'Vergütungsbeträge übermitteln', checked: false },
      { value: 'optional: BfArM-Nachfragen bearbeiten', checked: false },
      { value: 'temporäre Aufnahme ins DiGA-Verzeichnis', checked: false },
      {
        value: 'Studien, Nachweis positiver Versorgungseffekte',
        checked: true,
      },
      { value: 'dauerhafte Aufnahme ins DiGA-Verzeichnis', checked: true },
      { value: 'Änderungsanzeige einreichen', checked: false },
      { value: 'Ablehnung des Antrages analysieren', checked: false },
    ];

    this.data2 = [
      {
        name: 'Aufnahme ins DiGA-Verzeichnis (3.000 € ...9.900 €, § 25 DiGAV)',
        amount: '3000€',
      },
      {
        name: 'Auskünfte und Beratung (250 € ...5.000 €, § 27 DiGAV)',
        amount: '250€',
      },
      {
        name:
          'Prüfung des Nachweises positiver Versorgungseffekte nach der Erprobung (1.500 ...6.600 €, § 25 DiGAV)',
        amount: '2000€',
      },
      {
        name: 'Gebühren pro Änderungsanzeige (1.500 € ...4.900 €, § 26 DiGAV)',
        amount: '2500€',
      },
      { name: 'Sonstige Gebühren im Kontext einer DiGA', amount: '3000€' },
    ];
    this.supportTypes = [
      '... Überwachung oder Linderung von Krankheiten',
      '... Linderung oder Kompensierung von Verletzungen oder Behinderung',
      'Dient Primärprävention (keine DiGA)',
    ];
    this.usersegment = [
      'Patienten',
      'Patienten und Ärzte/Therapeuten gemeinsam',
      'Nur Leistngserbringer, z.B. Praxisausstattung (keine DiGA)',
    ];

    this.zweckbestimmung = [
      'Indikation',
      'Kontraindikation',
      'Patentengruppen',
    ];
    this.poducerRequirements = [
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
    // this.message = this.child.input;
  }

  public add(): void {
    console.log('new Language');
    console.log('new Language', this.val);
    this.languages.push(this.val);
  }
}
