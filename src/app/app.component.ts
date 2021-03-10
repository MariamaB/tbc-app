import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
const puppeteer = require('puppeteer');

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

  public async saveAsPDF() {
    const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.emulateMediaType('screen');
    await page.setViewport({ width: 1980, height: 1100 });
    await page.goto('http://localhost:4200/trust-build-canvas', {
      waitUntil: 'networkidle0',
    });
    await page.screenshot({ path: 'canvas.png' });
    await page.emulateMediaType('screen');
    await page.pdf({
      printBackground: true,
      path: 'webpage.pdf',
      format: 'A4',
      landscape: true,
      //     margin: {
      //         top: "20px",
      //         bottom: "40px",
      //         left: "20px",
      //         right: "20px"
      //     }
    });
    console.log('done');
    // await browser.waitForTarget(()=> false);
    await browser.close();
    await process.exit();
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
