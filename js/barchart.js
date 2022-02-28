/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your bar charts in this file 

// Set dimensions and margins for plots 
const width = 900; 
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 


// TODO: What does this code do? 
const svg1 = d3
  .select("#hard-coded-bar") // provides the index file with the right div id 
  .append("svg") 
  .attr("width", width-margin.left-margin.right) // gets the dimensions of the barchart
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// Hardcoded barchart data
const data1 = [
  {name: 'A', score: 92},
  {name: 'B', score: 15},
  {name: 'C', score: 67},
  {name: 'D', score: 89},
  {name: 'E', score: 53},
  {name: 'F', score: 91},
  {name: 'G', score: 18}
];

/*

  Axes

*/ 

// TODO: What does this code do? 
let maxY1 = d3.max(data1, function(d) { return d.score; });
// is a function that looks at all the Y data points and finds the highest one 

// TODO: What does each line of this code do?   
let yScale1 = d3.scaleLinear() //using a linear scale for the Y axis (from data values to pixel values)
            .domain([0,maxY1]) // the numbering going from 0 to the highest Y value
            .range([height-margin.bottom,margin.top]); // dimensions of the Y axis?

// TODO: What does each line of this code do? 
let xScale1 = d3.scaleBand() // taking X data values and mapping it to pixel values
            .domain(d3.range(data1.length)) // using the number of X points as the range
            .range([margin.left, width - margin.right]) // dimensions of the x-axis
            .padding(0.1); // adding padding around the display so it isn't on the edge

// TODO: What does each line of this code do?  
svg1.append("g") // adding the Y axis to the page
   .attr("transform", `translate(${margin.left}, 0)`) 
   .call(d3.axisLeft(yScale1)) 
   .attr("font-size", '20px'); 

// TODO: What does each line of this code do? 
svg1.append("g") // adding the X axis to the page 
    .attr("transform", `translate(0,${height - margin.bottom})`) 
    .call(d3.axisBottom(xScale1) 
            .tickFormat(i => data1[i].name)) // labelling each tick based on the row 
    .attr("font-size", '20px'); 

/* 

  Tooltip Set-up  

*/

// TODO: What does each line of this code do? 
const tooltip1 = d3.select("#hard-coded-bar") //selecting hard-coded-bar and adding a tool-tip 
                .append("div") 
                .attr('id', "tooltip1") 
                .style("opacity", 0) 
                .attr("class", "tooltip"); 

// TODO: What does each line of this code do?  
const mouseover1 = function(event, d) { 
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") 
          .style("opacity", 1);  
} //whenever the mouse hovers over the bar, it uses the tooltip and shows the name and score of the bar

// TODO: What does each line of this code do? 
const mousemove1 = function(event, d) {
  tooltip1.style("left", (event.x)+"px") 
          .style("top", (event.y + yTooltipOffset) +"px"); 
} // setting the position of the tooltip depending on where the mouse is so that the tooltip is next to the mouse

// TODO: What does this code do? 
const mouseleave1 = function(event, d) { 
  tooltip1.style("opacity", 0); 
} // removing the tooltip whenever the mouse isn't on a bar 

/* 

  Bars 

*/

// TODO: What does each line of this code do? 
svg1.selectAll(".bar") // making an empty selection of bar
   .data(data1) // taking the data through data1
   .enter()  
   .append("rect") 
     .attr("class", "bar") //the attribute class make it bar
     .attr("x", (d,i) => xScale1(i)) // use the scale 
     .attr("y", (d) => yScale1(d.score)) 
     .attr("height", (d) => (height - margin.bottom) - yScale1(d.score)) 
     .attr("width", xScale1.bandwidth()) 
     .on("mouseover", mouseover1) 
     .on("mousemove", mousemove1)
     .on("mouseleave", mouseleave1);








