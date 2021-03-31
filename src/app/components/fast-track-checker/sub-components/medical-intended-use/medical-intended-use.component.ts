import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-medical-intended-use',
  templateUrl: './medical-intended-use.component.html',
  styleUrls: ['./medical-intended-use.component.scss'],
})
export class MedicalIntendedUseComponent implements OnInit {
  zweckbestimmung = ['Indikation', 'Kontraindikation', 'Patentengruppen'];
  name: any;
  input = 'test';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

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
