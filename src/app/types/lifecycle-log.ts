import {LifecycleEnum} from "./lifecycle.enum";

export interface LifecycleLog {
  date: Date;
  component: string;
  lifecycle: LifecycleEnum;
}
