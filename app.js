var svgW = 960;
var svgH = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var chartWidth = svgW - margin.left - margin.right;
var chartHeight = svgH - margin.top - margin.bottom;

var svg = d3.select("body")
  .append("svg")
  .attr("width", svgW)
  .attr("height", svgH)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  
d3.csv('data2.csv', function(data) {
  // debugger;
  data.forEach(function (el) {
// debugger;
  // Scales
  var xScale = d3.scaleLinear()
    .domain([
      d3.min([data,d3.min(data,function (d) { return d.allFamPovPct })]),
      d3.max([data,d3.max(data,function (d) { return d.allFamPovPct })])
      ])
    .range([5,chartWidth])
    // debugger;
  var yScale = d3.scaleLinear()
    .domain([
      d3.min([0,d3.min(data,function (d) { return d.smokeSomeDays })]),
      d3.max([0,d3.max(data,function (d) { return d.smokeSomeDays })])
      ])
    .range([chartHeight,0])
  // X-axis
  var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5)
  // Y-axis
  var yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(5)
  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { 
        // if (d === NaN) {
        //   console.log("NaN")
        // };
        // var allFam = 
        // console.log(d)
        // +d.allFamPovPct.substring(0,d.allFamPovPct.length-1)
          debugger;
        return (d.allFamPovPct) 
      
      })
      // +d.smokeSomeDays.substring(0,d.allFamPovPct.length-1
      .attr('cy',function (d) { return yScale(d.smokeSomeDays) })

      .attr('r','10')
// debugger;

  svg.append('g')
      .attr('class','xAxis')
      .attr('transform', 'translate(0,' + chartHeight + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',chartWidth)

  svg.append('g')
      .attr('class', 'yAxis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)

});
});