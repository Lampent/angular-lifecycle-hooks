import {Component, Input, OnInit} from '@angular/core';
import {LifecycleMonitoredComponent} from "../lifecycle-monitored-component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent extends LifecycleMonitoredComponent {
  date = new FormControl(new Date());
  @Input() title: string = 'Choose a date';

  constructor() {
    super(null);
  }

  dateChanged($event: any): void {

  }

  ngOnInit(): void {
  }

}
