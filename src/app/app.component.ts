import {Component} from '@angular/core';
import {NodesAndLinksService} from "./services/nodes-and-links.service";
import {interval} from "rxjs";
import {Node} from "@swimlane/ngx-graph";
import {LifecycleEnum} from "./types/lifecycle.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodesLetters: string[] = ['a','b','c','d','e','f','g'];
  links = this.nodesAndLinksService.getEdges(['a-b', 'a-c', 'b-d', 'b-e', 'c-f', 'c-g']);
  nodes = this.nodesAndLinksService.getNodes(this.nodesLetters);
  highlightedNodesDetails: {name: string, currentLifecycle: string} = {name: '', currentLifecycle: ''};

  constructor(private nodesAndLinksService: NodesAndLinksService) {
    interval(500).subscribe(() => {
      const nodeDetails: {id: string, letter: string} = this.getRandomNodeId();
      this.highlightedNodesDetails = {name: nodeDetails.letter.toUpperCase(), currentLifecycle: LifecycleEnum.NG_ON_INIT}
      this.nodesAndLinksService.highlightNode(this.nodes, nodeDetails.id)
    })
  }

  getRandomNodeId(): {id: string, letter: string} {
    const index = this.randomInteger(0,this.nodesLetters.length-1);
    return {id: this.nodesAndLinksService.getId(this.nodesLetters[index]), letter:this.nodesLetters[index]};
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
