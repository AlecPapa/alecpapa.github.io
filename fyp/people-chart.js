var PeopleChart = function (domId) {
    var width = 900,
        height = 230
        ;
    var peopleWidth = 632;
    var peopleHeight = 702;
    var colCount = 15;
    var margin = {
        left: 0, top: 20, right: 20, bottom: 40
    };
    var scale = 0.119;
    var legendFontSize = 12;
    var legendTop = 30;
    var legendLeft = 30;
    var color = d3.scaleOrdinal(["grey", "orange","red"]);

    var tplPath = `M512.001535 159.955038c38.595017 0 70.244854 31.622208 70.244854 70.298066 0 38.625716-31.649837 70.247924-70.244854 70.247924-38.648229 0-70.247924-31.622208-70.247924-70.247924C441.753611 191.577247 473.353306 159.955038 512.001535 159.955038M828.188824 405.898497l-210.793914 0 0 456.734302-70.244854 0 0-210.793914-70.298066 0 0 210.793914-70.252017 0 0-456.734302-210.790844 0 0-70.247924 632.378671 0L828.187801 405.898497z`;
    this.svg = d3.select(domId)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    this.svg.append("rect")
        .attr("fill", "#58AD9A")
        .style("opacity", 0.1)
        .attr("x", -margin.left)
        .attr("y", -margin.top)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    this._g_xaxis = this.svg.append("g")
        .attr("class", "x-axis");
    this._g_yaxis = this.svg.append("g")
        .attr("class", "y-axis");
    this._g_ytitle = this.svg.append("g")
        .attr("class", "y-axis-title");

    function group(array, subGroupLength) {
        let index = 0;
        let newArray = [];
        while (index < array.length) {
            var len = index + subGroupLength;
            if (len > array.length) {
                len = array.length;
            }
            newArray.push(array.slice(index, len));
            index += subGroupLength;
        }
        return newArray;
    }

    PeopleChart.prototype.setData = function (data) {
        var legendObj = {};
        data.forEach(function (item) {
            if (legendObj[item.group] === undefined) {
                legendObj[item.group] = item.group;
            }
        });
        this.legends = Object.values(legendObj);
        this.data = group(data, colCount);
    };

    PeopleChart.prototype.draw = function () {
        var self = this;
        self.data.forEach(function (list, i) {
            self.svg.selectAll(".people-item-" + i)
                .data(list)
                .join("path")
                .attr("class", "people-item-" + i)
                .attr("transform", (d, n) => {
                    return `translate(${n * (peopleWidth * scale + 10)},${i * (peopleHeight * scale+10)})scale(${scale})`;
                })
                .attr("fill", d => color(d.group))
                .attr("d", d => {
                    return tpl;
                });
        });
        var circleR = 20;
        var circleDist = (width - self.legends.length * (circleR * 2 + 10)) / self.legends.length;
        // 添加最外层的g分组，用于整体位移
        _g_legend = self.svg.append("g")
            .attr("class", "legend-out-box")
            .attr("transform",
                `translate(${margin.left + circleDist / 2 + legendLeft},${self.data.length * (peopleHeight * scale + circleR + 10) + legendTop})`);
        // 添加小分组
        var _g_legend_items = _g_legend.selectAll(".legend-item-box")
            .data(self.legends)
            .enter()
            .append("g")
            .attr("transform", (d, i) => "translate(" + (i * (circleR * 2 + circleDist)) + ",10)")
            ;

        // 向小分组里添加rect
        _g_legend_items.append("circle")
            .attr("r", circleR)
            .style("fill", (d, i) => color(d));

        // 向小分组里添加rect
        _g_legend_items.append("text")
            .style("fill", "#222")
            .attr("dx", circleR + 10)
            .attr("dy", circleR / 2 - legendFontSize/2)
            .text(d => d);
    };
};