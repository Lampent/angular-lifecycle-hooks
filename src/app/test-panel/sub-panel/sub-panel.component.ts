import { Component } from '@angular/core';
import {LifecycleMonitoredComponent} from "../lifecycle-monitored-component";
import {LifecycleMonitorService} from "../../services/lifecycle-monitor.service";

@Component({
  selector: 'app-sub-panel',
  templateUrl: './sub-panel.component.html',
  styleUrls: ['./sub-panel.component.css']
})
export class SubPanelComponent extends LifecycleMonitoredComponent {

  component = 'B';

  constructor(protected lifecycleMonitorService: LifecycleMonitorService) {
    super(lifecycleMonitorService);
  }

}
