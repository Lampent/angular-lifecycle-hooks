import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle-dashboard',
  templateUrl: './lifecycle-dashboard.component.html',
  styleUrls: ['./lifecycle-dashboard.component.css']
})
export class LifecycleDashboardComponent implements OnInit {
  @Input() node: {name: string, currentLifecycle: string} = { name: '', currentLifecycle: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
