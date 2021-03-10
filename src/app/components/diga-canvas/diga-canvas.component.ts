import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-diga-canvas',
  templateUrl: './diga-canvas.component.html',
  styleUrls: ['./diga-canvas.component.scss'],
})
export class DigaCanvasComponent implements OnInit {
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
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.zweckbestimmung = [
      'Indikation',
      'Kontraindikation',
      'Patentengruppen',
    ];
    this.navList = [
      'Medizinische Zweckbestimmung',
      'Funktion',
      'Nutzersegment',
      'Hauptfunktion',
      'DiGA-Anforderungen Hersteller',
      'DiGA-Anforderungen Anwendung',
      'Marktzugang',
    ];
    this.supportTypes = [
      'Erkennung, Überwachung,Behandlung oder Linderung von Krankheiten',
      'Erkennung, Behandlung, Linderung oder Kompensierung von Verletzungen oder Behinderung',
      'Dient Primärprävention',
    ];
    this.usersegment = [
      'Patienten',
      'Patienten und Ärzte/Therapeuten gemeinsam',
      'Nur Leistngserbringer, z.B. Praxisausstattung (keine DiGA)',
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
    this.mainFunktion = [
      'Die Hauptfunktion beruht auf digitalen Technologien?',
      'Die digitale Hauptfnktionalität besteht im Auslesen oder Steueren eines Gerätes (keine DiGA)',
    ];
    this.normRequirements = [
      'Fähigkeit, Konformität zu erklären (Medizinprodukt "zertifizieren"): z.B. Zertifizierung nach ISO13485',
      'Erfüllung Datenschutzanforderungen und Datensicherheit: -> z.B. nach DSGVO und Sdtand der Technik',
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
    this.studyParameters = ['Ziel', 'Parameter', 'Methode', 'Datenquelle'];

    // this.poducerRequirements = [
    // {
    //   name: 'Zuzahlung',
    //   array:
    // [

    // 'a) Medizinischer Nutzen',
    // 'Verbesserung des Gesundheitszustands',
    // 'Verkürzung der Krankheitsdauer',
    // 'Verlängerung des Überlebens',
    // 'Verbesserung der Lenbensqualität',
    // ],
    // }
    // [
    // 'b) Patientenrelevate Struktur- und Verfahrensverbesserungen',
    // 'Koordination der Behandlungsabläufe',
    // 'Ausrichtung der Behandlung an Leitlinien und Standards',
    // 'Adhärenz',
    // 'Erleichterung des Zustands zur Versorgung',
    // 'Patientensicherheit',
    // 'Gesundheitskompetenz, Patientensouveränität',
    // 'Bewältigung krankheitsbedingter Schwierigkeiten im Alltag',
    // 'Aufwandsreduzierung für Patienten, Angehörige',
    // ],
    // [
    // 'c) Ökonomischer Nutzen',
    // 'Arbeitsreduzierung',
    // 'Kostenreduzierung -> keine DiGA',
    // ],
    // ];
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (!!result) {
        this.zweckbestimmung.push(result);
      }
    });
  }
}

import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: ` <!-- <h1 mat-dialog-title>Hi {{ name }}</h1> -->
    <div mat-dialog-content>
      <p>Bezeichung der neuen Zweckbestimmung?</p>
      <mat-form-field>
        <mat-label>Bezeichung</mat-label>
        <input matInput [(ngModel)]="data.name" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Abbrechen</button>
      <button mat-button [mat-dialog-close]="data.name" cdkFocusInitial>
        Ok
      </button>
    </div>`,
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverview {
  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
