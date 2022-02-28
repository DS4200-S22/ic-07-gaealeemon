/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 

const svg4 = d3
  .select("#csv-scatter") // provides the index file with the right div id 
  .append("svg") 
  .attr("width", width-margin.left-margin.right) 
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);
  d3.csv("data/scatter.csv").then((data2) => {

/*svg4 = d3.select("body")
            .append("svg")
                .attr("class", "vis-holder");*/



let maxY2 = d3.max(data2, function(d) { return d.score; });
let yScale2 = d3.scaleLinear() 
            .domain([0,maxY2]) 
            .range([height-margin.bottom,margin.top]); 

let xScale2 = d3.scaleBand() // taking X data values and mapping it to pixel values
            .domain(d3.range(data2.length)) // using the number of X points as the range
            .range([margin.left, width - margin.right]) // dimensions of the x-axis
            .padding(0.1);

svg4.append("g") // adding the Y axis to the page
   .attr("transform", `translate(${margin.left}, 0)`) 
   .call(d3.axisLeft(yScale2)) 
   .attr("font-size", '20px')

svg4.append("g") // adding the X axis to the page 
    .attr("transform", `translate(0,${height - margin.bottom})`) 
    .call(d3.axisBottom(xScale2) 
            .tickFormat(i => data2[i].day)) // labelling each tick based on the row 
    .attr("font-size", '20px'); 
    
	svg4.selectAll("circle")
	.data(data2)
    .enter()
    .append("circle")
        .attr("cx", (d) => xScale2(d.day))
        .attr("cy", (d) => yScale2(d.score))
        .attr("r", 8)
        .attr("fill", (d) => { return d.color; });

});



