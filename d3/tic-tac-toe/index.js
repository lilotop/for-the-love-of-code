$(function () {

    var sampleSVG = d3.select("#board")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

    sampleSVG.append("rect")
        .attr("class", "ttt-svg-board")
        .attr("x", 50)
        .attr("y", 50)
        .attr("rx", 40)
        .attr("ry", 40)
        .attr("width", 300)
        .attr("height", 300);

});