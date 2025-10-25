class adjacencyListGraph {
 
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1);
    }

    printGraph(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "=>"+ this.adjacencyList[vertex])
        }
    }
}

// add vertex
const graph = new adjacencyListGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");



graph.printGraph()