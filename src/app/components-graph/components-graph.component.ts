import {Component, Input} from '@angular/core';
import {Node, Edge} from '@swimlane/ngx-graph'

@Component({
  selector: 'app-components-graph',
  templateUrl: './components-graph.component.html',
  styleUrls: ['./components-graph.component.css']
})
export class ComponentsGraphComponent {
  @Input() edges: Edge[] =  [];
  @Input() nodes: Node[] = [];
}
