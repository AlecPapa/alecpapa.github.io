var width = 700;
var height = 500;

var padding = { top: 50, right: 50, bottom: 50, left: 50 };

var dataset = [
    ['M-salaries tax', 22600],
    ['M-rates', 13420],
    ['G-elderly allowence', 7000],
    ['G-rates', 4380],
    ['G-health care voucher', 800],
    ['G-student grant', 740],
    ['G-transportation allowence', 380],
    ['G-hkdse fee', 180],
    ['C-profits tax', 2900]
];

var pie = d3.pie()
    .sort(null)
    .value(function(d) {
        return d[1];
    });
var piedata = pie(dataset);

var outerRadius = width / 4;
var innerRadius = 0;

var arc = d3.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

// var colors = d3.schemeCategory10;
var colors = [
    // Middle class
    "#ff8533",
    "#ff6600",
    // Grassroots
    "#b3ffcc",
    "#00802b",
    "#00cc44",
    "#1aff66",
    "#003311",
    "#66ff99",
    //Commercial world
    "#3366ff"
];

var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var arcs = svg.selectAll('g')
    .data(piedata)
    .enter()
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

arcs.append('path')
    .attr('fill', function(d, i) {
        return colors[i];
    })
    .attr('d', function(d) {
        return arc(d);
    });

arcs.append('text')
    .attr('transform', function(d, i) {
        var x = arc.centroid(d)[0] * 2.8;
        var y = arc.centroid(d)[1] * 2.8;
        if (i === 0) {
            return 'translate(' + (x + 20) + ', ' + y + ')';
        } else if (i === 1) {
            return 'translate(' + x + ', ' + (y - 15) + ')';
        } else if (i === 2) {
            return 'translate(' + x + ', ' + (y - 5) + ')';
        } else if (i === 3) {
            return 'translate(' + (x - 40) + ', ' + (y + 50) + ')';
        } else if (i === 4) {
            return 'translate(' + (x - 105) + ', ' + (y + 60) + ')';
        } else if (i === 5) {
            return 'translate(' + (x - 90) + ', ' + (y + 50) + ')';
        } else if (i === 6) {
            return 'translate(' + (x - 110) + ', ' + (y + 30) + ')';
        } else if (i === 7) {
            return 'translate(' + x + ', ' + y + ')';
        } else if (i === 8) {
            return 'translate(' + (x + 50) + ', ' + (y + 30) + ')';
        }
        return 'translate(' + x + ', ' + y + ')';
    })
    .attr('text-anchor', 'middle')
    .text(function(d) {
        var percent = Number(d.value) / d3.sum(dataset, function(d) {
            return d[1];
        }) * 100;
        return d.data[0] + " " + d.data[1];
        // return d.data[0] + ' ' + percent.toFixed(1) + '%';
    })

arcs.append('line')
    .attr('stroke', 'black')
    .attr('x1', function(d) { return arc.centroid(d)[0] * 2; })
    .attr('y1', function(d) { return arc.centroid(d)[1] * 2; })
    .attr('x2', function(d, i) {
        if (i === 0) {
            return arc.centroid(d)[0] * 2.3;
        } else if (i === 1) {
            return arc.centroid(d)[0] * 2.3;
        } else if (i === 2) {
            return arc.centroid(d)[0] * 2.3;
        } else if (i === 3) {
            return arc.centroid(d)[0] * 2.5;
        } else if (i === 4) {
            return arc.centroid(d)[0] * 2.8;
        } else if (i === 5) {
            return arc.centroid(d)[0] * 3.1;
        } else if (i === 6) {
            return arc.centroid(d)[0] * 3;
        } else if (i === 7) {
            return arc.centroid(d)[0] * 2.7;
        } else if (i === 8) {
            return arc.centroid(d)[0] * 2.25;
        }
        return arc.centroid(d)[0] * 2.5;
    })
    .attr('y2', function(d, i) {
        if (i === 0) {
            return arc.centroid(d)[1] * 2.3;
        } else if (i === 1) {
            return arc.centroid(d)[1] * 2.3;
        } else if (i === 2) {
            return arc.centroid(d)[1] * 2.3;
        } else if (i === 3) {
            return arc.centroid(d)[1] * 1.9;
        } else if (i === 4) {
            return arc.centroid(d)[1] * 1.95;
        } else if (i === 5) {
            return arc.centroid(d)[1] * 2.1;
        } else if (i === 6) {
            return arc.centroid(d)[1] * 2.25;
        } else if (i === 7) {
            return arc.centroid(d)[1] * 2.7;
        } else if (i === 8) {
            return arc.centroid(d)[1] * 2.25;
        }
        return arc.centroid(d)[1] * 2.5;
    });