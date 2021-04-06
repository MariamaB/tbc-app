import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import jspdf from 'jspdf';
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
    console.log('Save as PDF...', window.innerWidth + '/' + window.innerHeight);
    const element = document.getElementById('main-content');

    this.html2canvas(element).then((canvas) => {
      console.log('Save as PDF...', canvas);
      const imgData = canvas.toDataURL('image/png');

      const doc = new jspdf('l', 'mm', 'a3');
      doc.addImage(
        imgData,
        0,
        0,
        window.innerWidth,
        (canvas.height * window.innerWidth) / window.innerWidth
      );
      doc.save('canvas');
    });
    // const doc = new jspdf({
    //   orientation: 'landscape',
    //   unit: 'in',
    //   format: [4, 2],
    //   // format: 'a4',
    // });

    // (async () => {
    //   const browser = await puppeteer.launch();
    //   const page = await browser.newPage();
    //   await page.goto('http://localhost:4200/home');
    //   await page.emulateMediaType('screen');
    //   await page.pdf({
    //     path: 'canvas.pdf',
    //     format: 'a4',
    //     landscape: true,
    //     printBackground: true,
    //   });
    //   await browser.close();
    // })();
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
