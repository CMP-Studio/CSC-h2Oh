function DailyGraph(placeholderName, configuration)
{
    this.placeholderName = placeholderName;
    
    var self = this; // for internal d3 functions

    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m-%d").parse;

    var scaleFactor = 0.60,
        margin = {top: 30, right: 20, bottom: 30, left: 50},
        width = 600 * scaleFactor - margin.left - margin.right,
        height = 400 * scaleFactor - margin.top - margin.bottom,
        newData = [];

    this.configure = function(configuration) 
    {
        this.config = configuration;

        this.config.min = this.config.min;
        this.config.max = this.config.max;

        newData = this.config.data;
    }

    this.render = function()
    {

        var min = this.config.min,
            max = this.config.max;

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(12);

        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(6);

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
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", 
                      "translate(" + margin.left + "," + margin.top + ")");

            x.domain(d3.extent(newData, function(d) { return d.date; }));
            y.domain([min, max]);//d3.max(newData, function(d) { return d.value; })]);

                // Add the valueline path.
                svg.append("path")
                    .attr("class", "line")
                    .attr("d", valueline(newData));

                // Add the X Axis
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                .selectAll("text")
                    .attr("y", 0)
                    .attr("x", 9)
                    .attr("dy", ".35em")
                    .attr("transform", "rotate(90)")
                    .style("text-anchor", "start");

                // Add the Y Axis
                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(-1)")
                    .call(yAxis);
    }

    this.configure(configuration); 
}
   