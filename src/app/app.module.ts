import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import { LifecycleDashboardComponent } from './lifecycle-dashboard/lifecycle-dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ComponentsGraphComponent } from './components-graph/components-graph.component';
import { MainPanelComponent } from './panel/main-panel/main-panel.component';
import { SubPanelComponent } from './panel/sub-panel/sub-panel.component';
import { DatePickerComponent } from './panel/date-picker/date-picker.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDashboardComponent,
    ComponentsGraphComponent,
    MainPanelComponent,
    SubPanelComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGraphModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
