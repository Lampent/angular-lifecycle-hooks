import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HighlightedNode} from "../types/highlighted-node";

@Component({
  selector: 'app-lifecycle-dashboard',
  templateUrl: './lifecycle-dashboard.component.html',
  styleUrls: ['./lifecycle-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleDashboardComponent implements OnInit {
  @Input() node: HighlightedNode = { name: '', currentLifecycle: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
