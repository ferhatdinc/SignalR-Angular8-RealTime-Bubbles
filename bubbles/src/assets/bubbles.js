import * as vis from 'node_modules/vis/dist/vis.js';  
export var nodes = new vis.DataSet(); 
export var options;
export var bgColor="";
export function addNode(label,color){   
  bgColor=color;
  console.log("bubble : ",color);
  nodes.add({label:label, font: { color: "#fff" },highlight:{background:bgColor},color: { background:bgColor ,border: bgColor }});
  console.log("addnode");
}
export function bubbles(){ 
      var edges = new vis.DataSet(); 
      var container = document.getElementById('bubbles');
      console.log("calisti-bubbles");
      var data = {
        nodes: nodes,
        edges: edges
      };   

      options = {
        nodes: {borderWidth:0,shape:"circle",color:{background:"", highlight:{background:"", border: '#F92C55'}},font:{color:'#fff'}},
        physics: {
          stabilization: false,
          minVelocity:  0.01,
          solver: "repulsion",
          repulsion: {
            nodeDistance: 40
          }
        }
      };
      var network = new vis.Network(container, data, options);
      
      
      // Events
      network.on("click", function(e) {
        if (e.nodes.length) {
          var node = nodes.get(e.nodes[0]);
          // Do something
          nodes.update(node);
        }
      }); 
}