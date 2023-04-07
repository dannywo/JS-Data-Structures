const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

//add airports to hashmap
const addNode = (airport) => {
    adjacencyList.set(airport, []);
}

//add edge, undirected
const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
//console.log(...routes)
routes.forEach(routes => addEdge(...routes));

console.log(adjacencyList)
let checking = adjacencyList.get("LAX");

//Breadth First Search
const bfs = (start, end) => {
    const queue = [start],
        visited = new Set();


    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);

        // console.log(queue)
        // console.log(visited)
        // console.log(destinations)

        for (const destination of destinations) {
            console.log(destination)
            if (destination === end) {
                console.log(`BFS found ${end}`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }

        }
    }
}

bfs('PHX', 'BKK');

//Depth First Search
const dfs = (start, visited = new Set()) => {

    visited.add(start);
    const destinations = adjacencyList.get(start);
    console.log(start);
    for (const destination of destinations) {
        if (destination === 'BKK') {
            console.log('DFS found Bangkok');
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}

dfs('PHX');