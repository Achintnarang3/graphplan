
function creategraph(V,E)
{
    // vertices
    // edges
    let list=[];
    for(let i = 0 ; i < V ; i++){
         list.push([]);
    }
    for(let i=0;i<E.length;i++)
    {
        
        list[E[i][0]].push([E[i][1],E[i][2]]);
        list[E[i][1]].push([E[i][0],E[i][2]]);

    }
    return list;

}

function djikstra(graph,V,src)
{
    let visited=Array(V).fill(0);
    let dist=[];
    for(let i=0;i<V;i++)
    dist.push([10000,-1]);

    dist[src][0]=0;
    dist[src][1]=0;

    for(let j=0;j<V-1;j++)
    {
        let mn=-1;
        for(let i=0;i<V;i++)
        {
            if(visited[i]==1)
            continue;

            if(mn==-1||dist[mn][0]>dist[i][0])
              mn=i;
        }


        visited[mn]=1;

        for(let i=0;i<graph[mn].length;i++)
        {
            let edge=graph[mn][i];

            if(visited[edge[0]]==0 && dist[edge[0]][0]>dist[mn][0]+edge[1])
            dist[edge[0]][0]=dist[mn][0]+edge[1];
        }


    }


}

let src = 0;
let V = 9;
let E = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
    [6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

let graph = createGraph(V,E);
let distances = djikstra(graph,V,0);
console.log(distances);
