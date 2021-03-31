import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    console.log('Save as PDF...');
    // const doc = new jsPDF({
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
