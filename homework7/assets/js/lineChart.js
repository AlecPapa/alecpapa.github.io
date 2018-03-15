var width = 700;
var height = 400;

var padding = { top: 50, right: 50, bottom: 50, left: 50 };

var dataset = [
    [2001, 430278],
    [2002, 372503],
    [2003, 311402],
    [2004, 275343],
    [2005, 295981],
    [2006, 310663],
    [2007, 369264],
    [2008, 492914],
    [2009, 494364],
    [2010, 520281],
    [2011, 595402],
    [2012, 669088],
    [2013, 733914],
    [2014, 745928],
    [2015, 755062]
];

var min = d3.min(dataset, function(d) {
    return d[1];
})
var max = d3.max(dataset, function(d) {
    return d[1];
})

var xScale = d3.scaleLinear()
    .domain([2001, 2015])
    .range([0, width - padding.left - padding.right]);

var yScale = d3.scaleLinear()
    .domain([0, max])
    .range([height - padding.top - padding.bottom, 0]);

var svg = d3.select('body')
    .append('svg')
    .attr('width', width + 'px')
    .attr('height', height + 'px');

var xAxis = d3.axisBottom()
    .scale(xScale);

var yAxis = d3.axisLeft()
    .scale(yScale);

svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
    .call(xAxis);

svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
    .call(yAxis);

var linePath = d3.line()
    .x(function(d) { return xScale(d[0]) })
    .y(function(d) { return yScale(d[1]) });

svg.append('g')
    .append('path')
    .attr('class', 'line-path')
    .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
    .attr('d', linePath(dataset))
    .attr('fill', 'none')
    .attr('stroke-width', 3)
    .attr('stroke', '#ffad99');

svg.append('g')
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('r', 5)
    .attr('transform', function(d) {
        return 'translate(' + (xScale(d[0]) + padding.left) + ',' + (yScale(d[1]) + padding.top) + ')'
    })
    .attr('fill', '#ff3300');