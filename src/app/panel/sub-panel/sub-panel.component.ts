import { Component } from '@angular/core';
import {LifecycleMonitoredComponent} from "../lifecycle-monitored-component";

@Component({
  selector: 'app-sub-panel',
  templateUrl: './sub-panel.component.html',
  styleUrls: ['./sub-panel.component.css']
})
export class SubPanelComponent extends LifecycleMonitoredComponent {

  constructor() {
    super(null);
  }
  ngOnInit(): void {
  }

}
