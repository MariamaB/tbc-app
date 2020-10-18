import { Component, OnInit } from '@angular/core';
import {
  ITrustBuildCanvas,
  ITrustBuildCategory,
} from '../../share/interfaces/interfaces';
import { TrustBuildCanvasFactory } from '../../share/classes/trust-build-canvas-factory';
import { QuestionnaireFactory } from '../../share/classes/questionnaire-factory';

@Component({
  selector: 'app-tust-build-canvas-view',
  templateUrl: './tust-build-canvas-view.component.html',
  styleUrls: ['./tust-build-canvas-view.component.css'],
})
export class TustBuildCanvasViewComponent implements OnInit {
  trustBuildCanvas: ITrustBuildCanvas;
  questionaire: ITrustBuildCategory[];

  constructor() {}

  ngOnInit(): void {
    if (history.state.updatedData !== undefined) {
      this.trustBuildCanvas = TrustBuildCanvasFactory.createTrustBuildCanvas();

      for (let i = 0; i < this.trustBuildCanvas.categories.length; i++) {
        console.log('category', this.trustBuildCanvas.categories[i].category);
        for (
          let j = 0;
          j < this.trustBuildCanvas.categories[i].questions.length;
          j++
        ) {
          this.trustBuildCanvas.categories[i].questions[j].answer =
            history.state.updatedData[i].questions[j].answer;
          console.log(
            'answer',
            this.trustBuildCanvas.categories[i].questions[j].answer
          );
        }
      }
      console.log(
        'passed data ',
        JSON.stringify(this.trustBuildCanvas, null, 2)
      );
    } else {
      this.questionaire = QuestionnaireFactory.createBusinessQuestionnaire();
      this.trustBuildCanvas = TrustBuildCanvasFactory.createTrustBuildCanvas();

      for (let i = 0; i < this.trustBuildCanvas.categories.length; i++) {
        for (
          let j = 0;
          j < this.trustBuildCanvas.categories[i].questions.length;
          j++
        ) {
          this.trustBuildCanvas.categories[i].questions[
            j
          ].answer = this.questionaire[i].questions[j].answer;
        }
      }
    }
  }

  ngOnDestroy(): void {}
}
