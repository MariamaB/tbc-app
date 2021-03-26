import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
})
export class FunctionsComponent implements OnInit {
  supportTypes = [
    'Erkennung, Überwachung,Behandlung oder Linderung von Krankheiten',
    'Erkennung, Behandlung, Linderung oder Kompensierung von Verletzungen oder Behinderung',
    'Dient Primärprävention',
  ];

  mainFunktion = [
    'Die Hauptfunktion beruht auf digitalen Technologien?',
    'Die digitale Hauptfnktionalität besteht im Auslesen oder Steueren eines Gerätes (keine DiGA)',
  ];

  constructor() {}

  ngOnInit() {}
}
