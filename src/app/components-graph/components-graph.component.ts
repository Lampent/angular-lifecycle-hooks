import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Edge, Node} from '@swimlane/ngx-graph'

@Component({
  selector: 'app-components-graph',
  templateUrl: './components-graph.component.html',
  styleUrls: ['./components-graph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsGraphComponent {
  @Input() edges: Edge[] =  [];
  @Input() nodes: Node[] = [];
}
