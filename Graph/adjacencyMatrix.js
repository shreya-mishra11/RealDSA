class AdjacencyMatrixGraph{
    constructor(vertices){
        this.vertices = vertices;
    this.matrix = Array(vertices.length)
      .fill(null)
      .map(() => Array(vertices.length).fill(0));

    }

    addEdge(v1,v2){
        const i = this.matrix.indexOf(v1)
        const j = this.matrix.indexOf(v2)

        if(i !== -1 && j !== -1){
            this.matrix[i][j] = 1;
            this.matrix[j][i] = 1;
        }
    }

    printMatrix(){
        this.matrix.forEach((row,i) => console.log(this.vertices[i]) )
    }


}

const vertices = ["A","B", "C", "D"]

const matrix = new AdjacencyMatrixGraph(vertices)

matrix.addEdge("A","B")
matrix.addEdge("B", "C")
matrix.printMatrix()