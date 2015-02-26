function DailyGraph(placeholderName, configuration)
{
    this.placeholderName = placeholderName;
    
    var self = this; // for internal d3 functions

    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m-%d").parse;

    var scaleFactor = 0.60,
        margin = {top: 30, right: 70, bottom: 30, left: 30},
        width = 1785 * scaleFactor - margin.left - margin.right,
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

        var min = this.config.min,
            xmax = this.config.xmax,
            ymax = this.config.ymax;

        // Set the ranges
        var x = d3.scale.linear().range([width, 0]);
        var y = d3.scale.linear().range([height, 0]);

        var yAxis = d3.svg.axis().scale(y)
            .orient("right").ticks(10)
            .tickSize(width)
            .tickFormat(function(d) { return d+" ft"});

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
                .attr("class", "area")
                .attr("transform", 
                      "translate(" + margin.left + "," + margin.top + ")");

            x.domain([min, xmax]);
            y.domain([min, ymax]);//d3.max(newData, function(d) { return d.value; })]);


            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(newData));

            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate("+20+")")
                .style("font-size", "16px")
                .call(yAxis);
    }

    this.configure(configuration); 
}
   