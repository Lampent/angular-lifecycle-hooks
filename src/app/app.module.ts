import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import { LifecycleDashboardComponent } from './lifecycle-dashboard/lifecycle-dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ComponentsGraphComponent } from './components-graph/components-graph.component';
import { MainPanelComponent } from './test-panel/main-panel/main-panel.component';
import { SubPanelComponent } from './test-panel/sub-panel/sub-panel.component';
import { DatePickerComponent } from './test-panel/date-picker/date-picker.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NodesAndEdgesService} from "./services/nodes-and-edges.service";
import {LifecycleMonitorService} from "./services/lifecycle-monitor.service";

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
  providers: [
    NodesAndEdgesService,
    LifecycleMonitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
