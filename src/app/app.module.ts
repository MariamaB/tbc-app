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
import { DigaCanvasComponent } from './components/fast-track-checker/diga-canvas/diga-canvas.component';
import {
  MedicalIntendedUseComponent,
  DialogOverview,
} from './components/fast-track-checker/sub-components/medical-intended-use/medical-intended-use.component';
import { FunctionsComponent } from './components/fast-track-checker/sub-components/functions/functions.component';
import { UserSegmentComponent } from './components/fast-track-checker/sub-components/user-segment/user-segment.component';
import { RequirementsManufacturerComponent } from './components/fast-track-checker/sub-components/requirements-manufacturer/requirements-manufacturer.component';
import { RequirementsApplicationComponent } from './components/fast-track-checker/sub-components/requirements-application/requirements-application.component';
import { MarketAccessComponent } from './components/fast-track-checker/sub-components/market-access/market-access.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    QuestionnaireComponent,
    TustBuildCanvasViewComponent,
    DigaCanvasComponent,
    DialogOverview,
    MedicalIntendedUseComponent,
    FunctionsComponent,
    UserSegmentComponent,
    RequirementsManufacturerComponent,
    RequirementsApplicationComponent,
    MarketAccessComponent,
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
