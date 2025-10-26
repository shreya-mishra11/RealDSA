
class BFSGraph{
    constructor(){
        this.adjacencyList = {}
    }

   addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // undirected graph
  }


  bfs(start){
    const queue = [start];
    const visited = new Set();


    visited.add(start);

    while(queue.length){
        const vertex = queue.shift();
        console.log(vertex);

        for(const ele of this.adjacencyList[vertex]){
            if(!visited.has(ele)){
                visited.add(ele);
                queue.push(ele)
            }
        }

    }
  }

}

const graph = new BFSGraph();
["A", "B", "C", "D", "E", "F"].forEach(v => graph.addVertex(v));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("E", "F");

console.log("BFS Traversal:");
graph.bfs("A");
