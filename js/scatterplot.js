/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 

let svg2 = d3.select("body")
            .append("svg")
                .attr("class", "vis-holder");

d3.csv("data/scatter.csv").then((data) => {
	svg2.selectAll("circle")
	.data(data)
    .enter()
    .append("circle")
        .attr("cx", (d) => { return d.x; })
        .attr("cy", (d) => { return d.y; })
        .attr("r", 30)
        .attr("fill", (d) => { return d.color; });
}








