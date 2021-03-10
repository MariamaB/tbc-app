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
