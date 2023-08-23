$( function() {
    $(".slides").sortable({
        axis: "y",
        handle: ".slide-handle"
    }).selectable();
      
    $('.slide').resizable({
        handles: 's'
    });
} );

const data = [10, 20, 30, 40, 50];

const svg = d3.select("#graph-1")
    .append("svg")
    .attr("width", 200)
    .attr("height", 150);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 40)
    .attr("y", (d) => 150 - d)
    .attr("width", 30)
    .attr("height", (d) => d)
    .attr("fill", "steelblue");