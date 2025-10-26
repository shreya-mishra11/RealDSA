class DFSGraph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }

    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    dfsIterative(start){
        const stack = [start];
        const visited = new Set();

        const result = []

    while (stack.length > 0) {
      const vertex = stack.pop();   // Step 3: stack ke top se ek node nikalo

      if (!visited.has(vertex)) {   // agar abhi tak visit nahi hua
        console.log(vertex);        // print karo (visit kar rahe ho)
        visited.add(vertex);        // mark as visited
        result.push(vertex);

        // Step 4: iske neighbors stack me daalo
        // Reverse order me daalte hain taaki leftmost node pehle nikle
        for (let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
          const neighbor = this.adjacencyList[vertex][i];
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    return result;

    }
}

const graph = new DFSGraph();
["A", "B", "C", "D", "E", "F"].forEach(v => graph.addVertex(v));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("E", "F");

console.log("DFS Iterative Traversal:");
graph.dfsIterative("A");
