import {Injectable} from "@angular/core";
import {LifecycleLog} from "../types/lifecycle-log";
import {from, Observable} from "rxjs";
import {filter} from "rxjs/operators";
import {LifecycleEnum} from "../types/lifecycle.enum";

@Injectable()
export class LifecycleMonitorService {
  private lifecycleLogs: LifecycleLog[] = [];
  private monitoringActivated: boolean = false;

  init(monitor: boolean): void {
    this.lifecycleLogs = [];
    this.monitoringActivated = monitor;
  }

  addLog(component: string, lifecycle: LifecycleEnum): void {
    this.lifecycleLogs.push({component, lifecycle, date: new Date()});
  }

  getLifecycleLogs(dateRange?: {start: Date, end: Date}): Observable<LifecycleLog> {
    const logsStream: Observable<LifecycleLog> = from(this.lifecycleLogs);
    if (dateRange) {
      return logsStream.pipe(filter(log => log.date.getTime() >= dateRange.start.getTime() && log.date.getTime() <= dateRange.end.getTime()));
    }
    return logsStream;
  }

}
