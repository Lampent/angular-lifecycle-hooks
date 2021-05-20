import {Component} from '@angular/core';
import {NodesAndEdgesService} from "./services/nodes-and-edges.service";
import {interval, Subscription, zip} from "rxjs";
import {Edge, Node} from "@swimlane/ngx-graph";
import {HighlightedNode} from "./types/highlighted-node";
import {LifecycleMonitorService} from "./services/lifecycle-monitor.service";
import {LifecycleLog} from "./types/lifecycle-log";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edges: Edge[] = this.nodesAndEdgesService.getEdges(['a-b', 'a-c', 'b-d', 'b-e', 'c-f', 'c-g']);
  nodes: Node[] = this.nodesAndEdgesService.getNodes(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  highlightedNodesDetails: HighlightedNode = {name: '', currentLifecycle: ''};
  recordingStatus: boolean = false;
  recordSubscription: Subscription = new Subscription();

  constructor(private nodesAndEdgesService: NodesAndEdgesService,
              private lifecycleMonitorService: LifecycleMonitorService) {
  }

  toggleRecordingStatus() {
    this.recordingStatus = !this.recordingStatus;
    this.recordSubscription.unsubscribe();
    if (!this.recordingStatus) {
      this.recordSubscription = zip(this.lifecycleMonitorService.getLifecycleLogs(), interval(1000))
        .pipe(map((a) => a[0]))
        .subscribe((log: LifecycleLog) => {
          this.highlightedNodesDetails = {
            name: log.component.toUpperCase(),
            currentLifecycle: log.lifecycle
          };
          this.nodes = this.nodesAndEdgesService.highlightNode(this.nodes, this.nodesAndEdgesService.getId(log.component))
        });
    }
    this.lifecycleMonitorService.init(this.recordingStatus);

  }
}
