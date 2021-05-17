import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import { LifecycleDashboardComponent } from './lifecycle-dashboard/lifecycle-dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
