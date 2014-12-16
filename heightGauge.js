function HeightGauge(placeholderName, configuration)
{
	this.placeholderName = placeholderName;
	
	var self = this; // for internal d3 functions

    //pctExotic = [20, 35 ,35, 75, 55, 2.5, 35, 35, 45, 65, 7.5, 75, 2.5],
    data = [
        {value: 0, pctFull: 0.50, name: "50"}
    ],
    kVals = [],
    rVals = [],
    hVals = [],
    margin = { top: 138, right: 10, bottom: 30, left: 138}
	
	this.configure = function(configuration)
	{
		this.config = configuration;

		this.config.max = configuration.max;
		
		this.config.radius = configuration.size * 43;
		data[0].value = this.config.radius;
		data[0].pctFull = data[0].pctFull/this.config.max;
		this.config.size = this.config.size * 0.9;

		this.config.transitionMs = configuration.transitionMs || 4000;
		
		//this.config.radius = this.config.size * 0.97 / 2;
		this.config.cx = this.config.size / 2;
		this.config.cy = this.config.size / 2; 

		this.config.floodLevel = configuration.floodLevel;

		this.kCalculation();
		this.rCalculation();
		
	}

	this.render = function()
	{
		this.body = d3.select("#" + this.placeholderName)
							.append("svg:svg")
							.attr("class", "temperatureGauge")
							.attr("width", this.config.size)
							.attr("height", this.config.size);

		var node = this.body.selectAll(".node")
	        .data(data)
	        .attr("class", "node")
	        .enter().append("g")
	        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
		
		// white circle and outline
	    node.append("circle")
	        .attr("r", function(d, i) {return rVals[i];})
	        .style("fill", "#fff")
	        .style("stroke-width", "4px")         
	        .style("stroke", "#2076b8");   
	        
	    // clip path for the blue circle
	    node.append("clipPath")
	        .attr('id', function(d) { return "clip" })
	        .append('rect')
	        .attr("x", function(d, i){ return rVals[i] * (-1);})
	        .attr("width", function(d, i){ return rVals[i] * 2;})
	        .attr("y", function(d, i) {return rVals[i] - (2  * rVals[i] * kVals[i]);})
	        .attr("height", function(d, i) {return 2  * rVals[i] * kVals[i];});

	    // blue circle
	    node.append("circle")
	        .attr("clip-path", function(d) { return "url(#clip)"})
	        .attr("r", function(d, i) {return rVals[i];})
	        .style("fill", "#2076b8")                
	        .style("stroke", "#2076b8");

	    var pointerContainer = this.body.append("svg:g")
	    	.attr("class", "pointerContainer");

	    //dynamic temp label
		var fontSize = Math.round(this.config.size / 8);

		pointerContainer.selectAll("text")
							.data(data[0].name)
							.enter()
								.append("svg:text")
									.attr("x", this.config.cx - 60)
									.attr("y", this.config.size / 2.5 ) // -  ((2  * rVals[0] * kVals[0])/2)) // this.config.size / 2 - kVals) //this.config.size - this.config.cy / 2 - fontSize -40)
									.attr("dy", fontSize / 2)
									.attr("text-anchor", "middle")
									.style("font-size", fontSize + "px")
									.style("fill", "#c8bfbf");

		pointerContainer.selectAll("text").text(data[0].name);
 
	        
	    // clip path for flood level line
	    node.append("clipPath")
	        .attr('id', function(d) { return "circleclip" })
	        .append('circle')
	        .attr("r", function(d, i) {return rVals[i]-2;})

	    // flood level line
		var line = node.append("svg:line")
	    	.attr("clip-path", function(d) { return "url(#circleclip)"})
			.attr("x1", -15)
			.attr("y1", this.hCaluclation(this.config.floodLevel/this.config.max))
			.attr("x2", 250)
			.attr("y2", this.hCaluclation(this.config.floodLevel/this.config.max))
			.style("stroke", "#ff0000")
			.style("stroke-width", "1px");

		node.selectAll("text")
			.data(data)
			.enter()
				.append("svg:text")
					.attr("x", 30)
					.attr("y", this.hCaluclation(this.config.floodLevel/this.config.max)) // -  ((2  * rVals[0] * kVals[0])/2)) // this.config.size / 2 - kVals) //this.config.size - this.config.cy / 2 - fontSize -40)
					.attr("dy", fontSize / 2)
					.attr("text-anchor", "middle")
					.style("font-size", fontSize/3 + "px")
					.style("font-weight", "normal")
					.style("fill", "#fbb122");
		node.selectAll("text").text("Flood stage " + this.config.floodLevel + "\'");

	}

	this.hCaluclation = function(givenHeight){
		var j,
	        t0,
	        t1,
	        k,
	        mappedFloodLevel,
	        fl;
	    
	        k = givenHeight;
	        t1 = givenHeight * 2 * Math.PI;

	        if (givenHeight > 0 && givenHeight < 1) {
	            t1 = Math.pow(12 * k * Math.PI, 1 / 3);                
	            for (j = 0; j < 10; j += 1) {
	                  t0 = t1;
	                  t1 = (Math.sin(t0) - t0 * Math.cos(t0) + 2 * k * Math.PI) / (1 - Math.cos(t0));
	            }
	            k = (1 - Math.cos(t1 / 2)) / 2;
	        
	        	mappedFloodLevel = k;
	    	}

		fl = rVals[0] - (2  * rVals[0] * mappedFloodLevel)

		return fl;
	}

	// calculate k for each data object as described: http://bl.ocks.org/3422480
	this.kCalculation = function(){
	    var i,
	        j,
	        t0,
	        t1,
	        k;

	     kVals.length = 0;
	    
	    for (i = 0; i < data.length; i += 1) {
	        k = data[i].pctFull
	        t1= data[i].pctFull * 2 * Math.PI;

	        if (data[i].pctFull > 0 && data[i].pctFull < 1) {
	            t1 = Math.pow(12 * k * Math.PI, 1 / 3);                
	            for (j = 0; j < 10; j += 1) {
	                  t0 = t1;
	                  t1 = (Math.sin(t0) - t0 * Math.cos(t0) + 2 * k * Math.PI) / (1 - Math.cos(t0));
	            }
	            k = (1 - Math.cos(t1 / 2)) / 2;
	        }
	        kVals.push(k)
	    }

	    //console.log(kVals[0] + " " + data[0].pctFull);
	}
	            
	// calculate r of each item so that area scales to value
	this.rCalculation = function() {
	    var i, 
	        r;

	    for (i = 0; i < data.length; i += 1) {
	        rVals.push(Math.sqrt(data[i].value / Math.PI)*2);
	    }
	}
	
	this.redraw = function(value, transitionDuration)
	{

		var fillHeight = Math.round(value*100)/100;

		data.length = 0;
		data = [{value: this.config.radius, pctFull: value/this.config.max, name:fillHeight}];
		this.kCalculation();
		//this.rCalculation();

		// update label
		var pointerContainer = this.body.select(".pointerContainer");
		pointerContainer.selectAll("text")
			.text(data[0].name)
			.attr("y",  this.config.size / 2.5 );// -  ((2  * rVals[0] * kVals[0])/2));

		// update level in circle -> clip path
		var node = this.body.select("#clip");
		node.select("rect")   // change the line
			.transition()
			.duration(this.config.transitionMs)
			.ease('elastic')
	        .attr("y", function(d, i) {return rVals[i] - (2  * rVals[i] * kVals[i]);})
	        .attr("height", function(d, i) {return 2  * rVals[i] * kVals[i];})

	    //console.log(rVals[0] - (2  * rVals[0] * kVals[0]));

	}

	// initialization
	this.configure(configuration);	
}