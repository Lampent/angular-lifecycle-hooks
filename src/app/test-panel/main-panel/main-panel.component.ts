import {Component} from '@angular/core';
import {LifecycleMonitoredComponent} from "../lifecycle-monitored-component";
import {LifecycleMonitorService} from "../../services/lifecycle-monitor.service";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent extends LifecycleMonitoredComponent {
  component = 'A';

  constructor(protected lifecycleMonitorService: LifecycleMonitorService) {
    super(lifecycleMonitorService);
  }

}
