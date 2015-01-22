function DailyGraph(placeholderName, configuration)
{
    this.placeholderName = placeholderName;
    
    var self = this; // for internal d3 functions

    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m-%d").parse;

    var scaleFactor = 0.60,
        margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 1550 * scaleFactor - margin.left - margin.right,
        height = 455 * scaleFactor - margin.top - margin.bottom,
        newData = [];

    this.configure = function(configuration) 
    {
        this.config = configuration;

        this.config.min = this.config.min;
        this.config.xmax = this.config.xmax;
        this.config.ymax = this.config.ymax;

        newData = this.config.data;
    }

    this.render = function()
    {

        // var margin = {top: 20, right: 20, bottom: 30, left: 40},
        //     width = 960 - margin.left - margin.right,
        //     height = 500 - margin.top - margin.bottom;

        // var x = d3.scale.linear()
        //     .domain([-width / 2, width / 2])
        //     .range([0, width]);

        // var y = d3.scale.linear()
        //     .domain([-height / 2, height / 2])
        //     .range([height, 0]);

        // var xAxis = d3.svg.axis()
        //     .scale(x)
        //     .orient("bottom")
        //     .tickSize(-height);

        // var yAxis = d3.svg.axis()
        //     .scale(y)
        //     .orient("left")
        //     .ticks(5)
        //     .tickSize(-width);

        // var svg = d3.select("body").append("svg")
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //   .append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // svg.append("rect")
        //     .attr("width", width)
        //     .attr("height", height);

        // svg.append("g")
        //     .attr("class", "x axis")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(xAxis);

        // svg.append("g")
        //     .attr("class", "y axis")
        //     .call(yAxis);

    // ------------
        var min = this.config.min,
            xmax = this.config.xmax,
            ymax = this.config.ymax;

        // Set the ranges
        var x = d3.scale.linear().range([width, 0]);
        var y = d3.scale.linear().range([height, 0]);

        // Define the axes
        // var xAxis = d3.svg.axis().scale(x)
        //     .orient("bottom").ticks(12);

        var yAxis = d3.svg.axis().scale(y)
            .orient("right").ticks(10);

        // An area generator, for the light fill.
        var area = d3.svg.area()
            .interpolate("monotone")
            .x(function(d) { return x(d.date); })
            .y0(height)
            .y1(function(d) { return y(d.value); });

        // Define the line
        var valueline = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.value); });
        
        // Adds the svg canvas
        var svg = d3.select("#" + this.placeholderName)
            .append("svg")
                .attr("class", "graph")
                .attr("width", width +300+ margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("class", "area")
                .attr("transform", 
                      "translate(" + margin.left + "," + margin.top + ")");

            x.domain([min, xmax]);
            y.domain([min, ymax]);//d3.max(newData, function(d) { return d.value; })]);

                // Add the X Axis
                // svg.append("g")
                //     .attr("class", "x axis")
                //     .attr("transform", "translate(0," + height + ")")
                //     .call(xAxis)
                // .selectAll("text")
                //     .attr("y", 0)
                //     .attr("x", 9)
                //     .attr("dy", ".35em")
                //     .attr("transform", "rotate(90)")
                //     .style("text-anchor", "start");

                svg.append("rect")
                .attr("width", width+10)
                .attr("height", height);

                // Add the valueline path.
                svg.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(newData));

                // Add the Y Axis
                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate("+width+")")
                    .call(yAxis);
    }

    this.configure(configuration); 
}
   