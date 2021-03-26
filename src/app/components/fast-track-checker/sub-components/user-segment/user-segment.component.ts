import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-segment',
  templateUrl: './user-segment.component.html',
  styleUrls: ['./user-segment.component.scss'],
})
export class UserSegmentComponent implements OnInit {
  usersegment = [
    'Patienten',
    'Patienten und Ärzte/Therapeuten gemeinsam',
    'Nur Leistngserbringer, z.B. Praxisausstattung (keine DiGA)',
  ];
  constructor() {}

  ngOnInit() {}
}
