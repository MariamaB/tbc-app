import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-access',
  templateUrl: './market-access.component.html',
  styleUrls: ['./market-access.component.scss'],
})
export class MarketAccessComponent implements OnInit {
  marketAccess = {
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
  constructor() {}

  ngOnInit() {}
}
