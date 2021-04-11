import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { jsPDF } from 'jspdf';
// import { element } from 'protractor';
import * as html2canvasWrong from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('content') content: ElementRef;
  html2canvas = (html2canvasWrong as any) as (
    element: HTMLElement,
    options?: Partial<html2canvasWrong.Options>
  ) => Promise<HTMLCanvasElement>;
  title = 'Frontend';
  projects = true;
  innovation = true;
  pool = true;
  subCanvas = true;

  headline = 'TBC Self-Service';

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }

  public switchToTbc() {
    this.projects = !this.projects;
    // this.headline = 'Trust-Build-Canvas';
  }

  public createPDF() {
    const element = document.getElementById('canvas-container');
    console.log('Save as PDF...', element);

    const doc = new jsPDF('l', 'px', 'a3');
    doc.html(element, {
      callback: function (pdf) {
        pdf.save();
      },
      // x: 10,
      // y: 10,
    });
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
