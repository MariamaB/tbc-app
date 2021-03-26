import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirements-application',
  templateUrl: './requirements-application.component.html',
  styleUrls: ['./requirements-application.component.scss'],
})
export class RequirementsApplicationComponent implements OnInit {
  appRequirements = [
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
  constructor() {}

  ngOnInit() {}
}
