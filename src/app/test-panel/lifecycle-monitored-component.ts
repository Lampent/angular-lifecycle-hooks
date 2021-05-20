import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import {LifecycleMonitorService} from "../services/lifecycle-monitor.service";
import {LifecycleEnum} from "../types/lifecycle.enum";

@Directive()
export abstract class LifecycleMonitoredComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

  abstract component: string;

  constructor(protected lifecycleMonitorService: LifecycleMonitorService) {
  }

  ngAfterContentChecked(): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_AFTER_CONTENT_CHECKED);
  }

  ngAfterContentInit(): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_AFTER_CONTENT_INIT);
  }

  ngAfterViewChecked(): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_AFTER_VIEW_CHECKED);
  }

  ngAfterViewInit(): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_AFTER_VIEW_INIT);
  }

  ngDoCheck(): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_DO_CHECK);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_ON_CHANGES);
  }

  ngOnInit(): void {
    this.lifecycleMonitorService.addLog(this.component, LifecycleEnum.NG_ON_INIT);
  }
}
