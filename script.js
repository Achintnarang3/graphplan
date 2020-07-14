onload = function () {
    // create a network
    const container = document.getElementById('container');
    const genNew = document.getElementById('generate-graph');
   
    
  

    function createData(){
        const cities = ['Delhi', 'Mumbai', 'Gujarat', 'Goa', 'Kanpur', 'Jammu', 'Hyderabad', 'Bangalore', 'Gangtok', 'Meghalaya'];

        var V = Math.floor(Math.random() * cities.length) + 3;


        let vertices = [];
        for(let i=0;i<V;i++){
            vertices.push({id:i, label: cities[i]});
        }

        let edges = [];
        for(let i=1;i<V;i++){
            let neigh = Math.floor(Math.random()*i);
            edges.push({from: i, to: neigh, color: 'orange',label: String(Math.floor(Math.random()*70)+30)});
        }

        const data = {
            nodes: vertices,
            edges: edges
        };
        return data;
    }

    genNew.onclick = function () {
        console.log("Hello from click");
        let data = createData();
        var options={};
        var network = new vis.Network(container, data, options);
    };

    
}
