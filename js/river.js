function DailyGraph(placeholderName, configuration)
{
    this.placeholderName = placeholderName;
    
    var self = this; // for internal d3 functions

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

        d3.select("body")
            .append("svg")
            .attr("width", 1920)
            .attr("height", 1080)
            .append("path")
            .attr("cx", 25)
            .attr("cy", 25)
            .attr("r", 25)
            .style("fill", "purple");

    }

    this.configure(configuration); 
}
   