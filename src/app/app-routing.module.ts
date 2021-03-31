import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuestionnaireComponent } from './components/questionnaire-view/questionnaire-view.component';
import { TustBuildCanvasViewComponent } from './components/tust-build-canvas-view/tust-build-canvas-view.component';
import { DigaCanvasComponent } from './components/fast-track-checker/diga-canvas/diga-canvas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent,
  },
  {
    path: 'trust-build-canvas',
    component: TustBuildCanvasViewComponent,
  },
  {
    path: 'diga-canvas',
    component: DigaCanvasComponent,
  },
  { path: '**', component: PageNotFoundComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
