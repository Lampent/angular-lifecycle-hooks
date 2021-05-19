import { Component } from '@angular/core';
import {LifecycleMonitoredComponent} from "../lifecycle-monitored-component";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent extends LifecycleMonitoredComponent {

  constructor() {
    super(null);
  }

  ngOnInit(): void {
  }

}
