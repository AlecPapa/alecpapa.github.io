var BarChart = function (domId) {
    var outwidth = 900,
        outheight = 300;
    var barHeight = 0;
    var barDist = 2;
    var barValFontSize = 12;
    var margin = {
        left: 40, top: 40, right: 30, bottom: 40
    };
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    this.svg = d3.select(domId)
        .append("svg")
        .attr("width", outwidth)
        .attr("height", outheight)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    var width = outwidth - margin.left - margin.right;
    var height = outheight - margin.top - margin.bottom;

    this.backgroundRect = this.svg.append("rect")
        .attr("fill", "#58AD9A")
        .style("opacity",0.1)
        .attr("x", -margin.left)
        .attr("y", -margin.top)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    this._g_xaxis = this.svg.append("g").attr("class", "x-axis");
    this._g_yaxis = this.svg.append("g").attr("class", "y-axis");
    this._g_ytitle = this.svg.append("g").attr("class", "y-title")
        .attr("class", "y-title");

    BarChart.prototype.setData = function (data) {
        this.data = data;
    };


    BarChart.prototype.draw = function (period) {
        var self = this;
        if (!this.data || this.data.length <= 0) {
            return;
        }
        var item = this.data.filter(e => e.name === period);
        if (!item || item.length <= 0) {
            return;
        }
        var list = item[0].list;
        var maxLeft = d3.max(list, d => d.name.length * 6);
        if (maxLeft < margin.left) {
            maxLeft = margin.left;
        }
        else {
            width = outwidth - maxLeft - margin.right;
        }
        self.svg.attr("transform", `translate(${ maxLeft},${margin.top})`);
        self.backgroundRect.attr("x", -(maxLeft));

        var maxValue = d3.max(list, function (d) { return d.value; });
        if (maxValue <= 0) {
            maxValue = 1;
        }
        var minValue = d3.min(list, function (d) { return d.value; });
        if (minValue >= 0) {
            minValue = 0;
        }
        else {
            minValue = minValue * 1.1;
        }
        var ylist = list.map(function (d) { return d.name; });
        var y = d3.scaleBand()
            .domain(ylist)
            .range([height, 0]);

        var x = d3.scaleLinear()
            .domain([minValue, maxValue])
            .range([0, width]);

        xAxis = g => g
            .attr("transform", `translate(0,${height})`)
            .call(
                d3.axisBottom(x).tickFormat(function (d, i) {
                    return d;
                }).tickSizeInner(-height)
            );
        yAxis = g => g
            .attr("transform", `translate(0,0)`)
            .call(d3.axisLeft(y).ticks(width / 80).tickFormat(function (d) {
                return d;
            }).tickSizeInner(-width));

        this._g_xaxis.call(xAxis);
        this._g_yaxis.call(yAxis);

        //  绘制Y轴标题
        //this.yaxisTitle = year.toString();
        //this._g_ytitle.attr("transform", "translate(-15,-10)");
        //this._g_ytitle.selectAll("text")
        //    .data([this.yaxisTitle])
        //    .join("text")
        //    .text(d => d + "年");

        barHeight = y.bandwidth() - barDist * 2;
        this.svg.selectAll(".bar-item")
            .data(list)
            .join("rect")
            .attr("class", "bar-item")
            .attr("name", d => d.name)
            .attr("x", 0)
            .attr("y", d => y(d.name) + barDist)
            .attr("height", (d, i) => barHeight)
            .style("fill", d => color(d.name))
            .transition()
            .duration(400)
            .attr("width", d => x(d.value))
            ;
        this.svg.selectAll(".bar-val")
            .data(list)
            .join("text")
            .attr("class", "bar-val")
            .attr("y", d => y(d.name) + y.bandwidth() / 2 + 5)
            .transition()
            .duration(400)
            .attr("x", d => x(d.value) + 5)
            .style("font-size", barValFontSize)
            .text(d => d.value);
    };
};