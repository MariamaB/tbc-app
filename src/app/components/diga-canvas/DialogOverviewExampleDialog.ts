/* import { Component, Inject } from '@angular/core';
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
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
 */
