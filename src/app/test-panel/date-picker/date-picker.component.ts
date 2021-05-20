import {Component, Input} from '@angular/core';
import {LifecycleMonitoredComponent} from "../lifecycle-monitored-component";
import {FormControl} from "@angular/forms";
import {LifecycleMonitorService} from "../../services/lifecycle-monitor.service";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent extends LifecycleMonitoredComponent {

  component = 'D';
  date = new FormControl(new Date());
  @Input() title: string = 'Choose a date';

  constructor(protected lifecycleMonitorService: LifecycleMonitorService) {
    super(lifecycleMonitorService);
  }

  dateChanged($event: any): void {

  }
}
