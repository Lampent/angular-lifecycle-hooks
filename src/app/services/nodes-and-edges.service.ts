import {Injectable} from '@angular/core';
import {Node, Edge} from '@swimlane/ngx-graph'

@Injectable({
  providedIn: 'root'
})
export class NodesAndEdgesService {
  private readonly COMPONENT_SUFFIX: string = "component";

  getEdges(links: string[]): Edge[] {
    return links.map(link => this.getEdge(link));
  }

  /**
   * returns a link object
   * @param nodeLink string like "x-x" where the left side is the source and the right side is the target
   * @return {id, source, target} where id = "x-x" (nodeLink), source = "x-component" (left x), target = "x-component" (right x)
   */
  getEdge(nodeLink: string): Edge {
    const sourceTarget = nodeLink.split("-");
    return {
      id: nodeLink,
      source: `${this.getId(sourceTarget[0])}`,
      target: `${this.getId(sourceTarget[1])}`
    }
  }

  getNodes(names: string[]): Node[] {
    return names.map(name => this.getNode(name));
  }

  /**
   * return a node object
   * @param name, a letter of the english abc
   */
  getNode(name: string): Node {
    return {
      id: this.getId(name),
      label: name.toUpperCase()
    }
  }

  /**
   * Receives letter and returns constructed identifier
   * @param name, a letter of the english abc such as A
   */
  getId(name: string): string {
    return `${name.toLowerCase()}-${this.COMPONENT_SUFFIX}`;
  }

  highlightNode(nodes: Node[], id: string): Node[] {
    return nodes.map(node => {
      node.data = (node.id === id) ? {highlight: true} : {highlight: false}
      return node;
    })
  }
}
