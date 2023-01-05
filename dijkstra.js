function dijkstra(graph, start, end) {
  // Initialize distances and previous nodes
  let distances = {};
  let previous = {};
  for (let node in graph) {
    if (node === start) {
      distances[node] = 0;
    } else {
      distances[node] = Infinity;
    }
    previous[node] = null;
  }

  // Initialize unvisited nodes
  let unvisited = new Set(Object.keys(graph));

  // Main loop
  while (unvisited.size > 0) {
    // Select the unvisited node with the smallest distance
    let currNode = null;
    let minDistance = Infinity;
    for (let node of unvisited) {
      if (distances[node] < minDistance) {
        currNode = node;
        minDistance = distances[node];
      }
    }

    // Stop if we have reached the end node
    if (currNode === end) {
      break;
    }

    // Remove the current node from the unvisited set
    unvisited.delete(currNode);

    // Update distances and previous nodes for neighbors
    for (let neighbor in graph[currNode]) {
      let distance = graph[currNode][neighbor];
      let totalDistance = distance + distances[currNode];
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = currNode;
      }
    }
  }

  // Build the shortest path by following the previous nodes
  let path = [];
  let currNode = end;
  while (currNode !== null) {
    path.unshift(currNode);
    currNode = previous[currNode];
  }

  return { path, distance: distances[end] };
}

// Example usage
let graph = {
  A: { B: 7, C: 8 },
  B: { A: 7, F: 2 },
  C: { A: 8, F: 6, G: 4 },
  D: { F: 8 },
  E: { H: 1 },
  F: { B: 2, C: 6, D: 8, G: 9, H: 3 },
  G: { C: 4, F: 9 },
  H: { E: 1, F: 3 },
};
let result = dijkstra(graph, "A", "H");
console.log(result.path); // ["A", "B", "F", "H"]
console.log(result.distance); // 11
