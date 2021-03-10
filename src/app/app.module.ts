import { QuestionnaireComponent } from './components/questionnaire-view/questionnaire-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TustBuildCanvasViewComponent } from './components/tust-build-canvas-view/tust-build-canvas-view.component';
import {
  DialogOverview,
  DigaCanvasComponent,
} from './components/diga-canvas/diga-canvas.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    QuestionnaireComponent,
    TustBuildCanvasViewComponent,
    DigaCanvasComponent,
    DialogOverview,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    // ChartsModule,
    ReactiveFormsModule,
  ],
  // entryComponents: [ErrorComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
