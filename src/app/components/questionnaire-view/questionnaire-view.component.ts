import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { QuestionnaireFactory } from 'src/app/share/classes/questionnaire-factory';
import { TrustBuildCanvasFactory } from 'src/app/share/classes/trust-build-canvas-factory';
import {
  ITrustBuildCanvas,
  ITrustBuildCategory,
} from 'src/app/share/interfaces/interfaces';

@Component({
  selector: 'app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForms: FormGroup;
  questionnaire: ITrustBuildCategory[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  trustBuildCanvas: ITrustBuildCanvas;
  testAnswer: string;

  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionnaire = QuestionnaireFactory.createBusinessQuestionnaire();
    this.trustBuildCanvas = TrustBuildCanvasFactory.createTrustBuildCanvas();
    this.initForm();
    this.setStartValues();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  private initForm(): void {
    this.questionnaireForms = this.fb.group({
      platform: ['', Validators.required],
      application: ['', Validators.required],
      therapie: ['', Validators.required],
      data: ['', Validators.required],
      infrastructur: ['', Validators.required],
    });
  }

  private setStartValues(): void {
    this.questionnaireForms.setValue({
      platform: this.questionnaire[0].questions[0].answer,
      application: this.questionnaire[1].questions[0].answer,
      therapie: this.questionnaire[2].questions[0].answer,
      data: this.questionnaire[3].questions[0].answer,
      infrastructur: this.questionnaire[3].questions[0].answer,
    });
  }

  submitForm(): void {
    // console.log('questionaire', JSON.stringify(this.trustBuildCanvas, null, 2));
    this.router.navigate(['trust-build-canvas'], {
      state: { updatedData: this.questionnaire },
    });
  }
}
