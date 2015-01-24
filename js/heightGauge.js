function HeightGauge(placeholderName, configuration)
{
	this.placeholderName = placeholderName;
	
	var self = this; // for internal d3 functions

    data = [{}],
    fillHeight = "",
    kVals = 0,
    pctFull = 0,
    rVals = 0,
    hVals = [],
    margin = { top: 20, right: 10, bottom: 0, left: 5};
	
	this.configure = function(configuration)
	{
		this.config = configuration;

		this.config.max = configuration.max;
		
		this.config.size = configuration.size * 0.9;
		this.config.radius = this.config.size * 0.97 / 2;

		this.config.transitionMs = configuration.transitionMs || 4000;
		
		this.config.cx = configuration.cx || this.config.size / 2;
		this.config.cy = configuration.cy || this.config.size / 2;

		console.log("cy: "+this.config.cy+ "  size/2: "+this.config.size / 2);


		margin.left = margin.left + this.config.radius;
		margin.top = margin.top + this.config.radius;

		this.config.floodLevel = configuration.floodLevel;

		kVals = this.kCalculation(pctFull);
		rVals =  Math.sqrt(this.config.radius / Math.PI) * 2 * (this.config.radius/13);
	}

	this.render = function()
	{
		this.body = d3.select("#" + this.placeholderName)
			.append("svg:svg")
			.attr("class", "GaugeHeightGauge")
			.attr("width", this.config.size)
			.attr("height", this.config.size+12);

		var gauge = this.body.append("svg:g")
			.attr("class", "gauge")
			.attr("transform", "translate(0,10)");

		var label = this.body.append("svg:g")
			.attr("class", "label")
			.attr('transform', 'translate(0,3)');
		
		var pi = Math.PI;

		var arc = d3.svg.arc()
		    .innerRadius(0.95 * this.config.radius)
		    .outerRadius(0.95 * this.config.radius)
		    .startAngle(0)
		    .endAngle(pi)

		var path = label.append("path")
		    .attr("d", arc)
		    .attr("id", "path4")
		    .attr("transform", "translate(134,130)")
		    .attr("fill","#1b75bb")

		// Add a text label.
		var text = label.append("text")
		    .attr("x", 4) // text start at the beginning of the arc
		    .attr("dy", 0); // places text on the outside of the arc

		text.append("textPath")
			.attr("font-family", "Century Gothic")
		    .attr("font-size", "15px")
		    .attr("font-weight", "bolder")
		    .attr("fill", "#1b75bb")
		    .attr("xlink:href","#path4")
            .text("Gauge Height");         


		var node = this.body.selectAll(".node")
	        .data(data)
	        .attr("class", "node")
	        .enter().append("g")
	        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
		
		// white circle and outline
	    node.append("circle")
	        .attr("r", rVals)
	        .style("fill", "#fff")
	        .style("stroke-width", "4px")
	        .style("stroke", "#2076b8");   
	     
	     //console.log(rVals);
	    // clip path for the blue circle
	    node.append("clipPath")
	        .attr('id', function(d) { return "clip"+placeholderName })
	        .append('rect')
	        .attr("x", rVals * (-1))
	        .attr("width", rVals * 2)
	        .attr("y", rVals - (2  * rVals * kVals))
	        .attr("height", 2  * rVals * kVals);

	    // blue circle
	    node.append("circle")
	        .attr("clip-path", function(d) { return "url(#clip"+placeholderName+")"})
	        .attr("r", rVals)
	        .style("fill", "#2076b8")                
	        .style("stroke", "#2076b8");

	    var pointerContainer = this.body.append("svg:g")
	    	.attr("class", "pointerContainer");

	    //dynamic temp label
		var fontSize = Math.round(this.config.size / 12);
		pointerContainer.selectAll("text")
			.data(data)
			.enter()
			.append("svg:text")
			.attr("x", this.config.cx - 65)//(this.config.size * 0.26))
			.attr("dy", this.config.cy / 6 )//fontSize)
			.attr("text-anchor", "middle")
			.style("font-size", fontSize+3 + "px")
			.style("font-weight", "bold")
			.style("fill", "#c8bfbf");

		pointerContainer.selectAll("text").text(fillHeight);
 
	        
	    // clip path for flood level line
	    node.append("clipPath")
	        .attr('id', function(d) { return "circleclip"+placeholderName })
	        .append('circle')
	        .attr("r", function(d, i) {return rVals-2;})

	    var k = this.kCalculation(this.config.floodLevel/this.config.max);
	    var fl = rVals - (2  * rVals * k);

	    // flood level line
		var line = node.append("svg:line")
	    	.attr("clip-path", function(d) { return "url(#circleclip"+placeholderName+")"})
			.attr("x1", -25)
			.attr("y1", fl)
			.attr("x2", 250)
			.attr("y2", fl)
			.style("stroke", "#ff0000")
			.style("stroke-width", "1px");

		if(this.config.floodLevel > 0) {
			node.selectAll("text")
				.data(data)
				.enter()
					.append("svg:text")
						.attr("x", 1 * this.config.radius/10)
						.attr("y", fl+3) // -  ((2  * rVals[0] * kVals[0])/2)) // this.config.size / 2 - kVals) //this.config.size - this.config.cy / 2 - fontSize -40)
						.attr("dy", fontSize / 2)
						.attr("text-anchor", "middle")
						.style("font-size", fontSize/1.8 + "px")
						.style("font-weight", "normal")
						.style("fill", "#fbb122");
			node.selectAll("text").text("Flood stage " + this.config.floodLevel + "\'");
		}

	}

	// calculate k for each data object as described: http://bl.ocks.org/3422480
	this.kCalculation = function(value){
	    var j,
	        t0,
	        t1,
	        k;
	    
	    k = value
	    t1= value * 2 * Math.PI;

	    if (value > 0 && value < 1) {
	        t1 = Math.pow(12 * k * Math.PI, 1 / 3);                
	        for (j = 0; j < 10; j += 1) {
	              t0 = t1;
	              t1 = (Math.sin(t0) - t0 * Math.cos(t0) + 2 * k * Math.PI) / (1 - Math.cos(t0));
	        }
	        k = (1 - Math.cos(t1 / 2)) / 2;
	    }
	    return k;
	}

	this.reset = function(value, transitionDuration){


		fillHeight = Math.round(value*100)/100;
		data.length = 0;

	    //update level in circle -> clip path
	    pctFull = value / this.config.max;
		kVals = this.kCalculation(pctFull);

		//update level in circle -> clip path
		var node = this.body.select("#clip"+placeholderName);
		node.select("rect")   // change the line
	        .attr("y", rVals - (2  * rVals * kVals))
	        .attr("height", 2  * rVals * kVals);
	}

	this.redraw = function(value, transitionDuration){

		fillHeight = Math.round(value*100)/100;
		data.length = 0;

	    //update level in circle -> clip path
	    pctFull = value / this.config.max;
		kVals = this.kCalculation(pctFull);

		//update level in circle -> clip path
		var node = this.body.select("#clip"+placeholderName);
		node.select("rect")   // change the line
			.transition()
			.duration(this.config.transitionMs)
			.ease('elastic')
	        .attr("y", rVals - (2  * rVals * kVals))
	        .attr("height", 2  * rVals * kVals);

	    // update label
		var pointerContainer = this.body.select(".pointerContainer");
		pointerContainer.selectAll("text")
			.text(fillHeight)
			.attr("y",  this.config.size / 2.5 );
	}

	// initialization
	this.configure(configuration);	
}