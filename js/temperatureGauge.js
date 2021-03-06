function TemperatureGauge(placeholderName, configuration)
{
	this.placeholderName = placeholderName;
	
	var self = this; // for internal d3 functions
	
	this.configure = function(configuration)
	{
		this.config = configuration;
		
		this.config.size = this.config.size * 0.9;

		this.config.transitionMs = configuration.transitionMs || 4000;
		
		this.config.radius = this.config.size * 0.95 / 2;
		this.config.cx = this.config.size / 2;
		this.config.cy = this.config.size / 2;

		this.config.labelX = configuration.labelMarginX || 0;
		this.config.labelY = configuration.labelMarginY || 0;
		
		this.config.min = undefined != configuration.min ? configuration.min : 0; 
		this.config.max = undefined != configuration.max ? configuration.max : 100; 
		this.config.range = this.config.max - this.config.min;
		
		this.config.majorTicks = configuration.majorTicks || 5;
		this.config.minorTicks = configuration.minorTicks || 2;

		this.config.label = configuration.label || "F˚";
		
		this.config.blueColor 	= configuration.blueColor || "#00f3ff";
		this.config.greenColor 	= configuration.greenColor || "#f9fcb0";
		this.config.yellowColor = configuration.yellowColor || "#ffe400";
		this.config.lightOrangeColor 	= configuration.lightOrangeColor || "#ffa800";
		this.config.orangeColor 	= configuration.orangeColor || "#e64e12";
		this.config.redColor 	= configuration.redColor || "#c70553";

		this.config.blueZones = this.config.blueZones || [{ from: this.config.min + this.config.range*0, to: this.config.min + this.config.range*0.165 }];
		this.config.greenZones = this.config.greenZones || [{ from: this.config.min + this.config.range*0.165, to: this.config.min + this.config.range*0.335 }];
		this.config.yellowZones = this.config.yellowZones || [{ from: this.config.min + this.config.range*0.335, to: this.config.min + this.config.range*0.5 }];
		this.config.lightOrangeZones = this.config.lightOrangeZones || [{ from: this.config.min + this.config.range*0.5, to: this.config.min + this.config.range*0.665 }];
		this.config.orangeZones = this.config.orangeZones || [{ from: this.config.min + this.config.range*0.665, to: this.config.min + this.config.range*0.833 }];
		this.config.redZones = this.config.redZones || [{ from: this.config.min + this.config.range*0.833, to: this.config.max }];

		this.config.transitionDuration = configuration.transitionDuration || 500;
	}

	this.render = function()
	{
		this.body = d3.select("#" + this.placeholderName)
			.append("svg:svg")
			.attr("class", "temperatureGauge")
			.attr("width", this.config.size)
			.attr("height", this.config.size+13);

		var gauge = this.body.append("svg:g")
			.attr("class", "gauge")
			.attr("transform", "translate(0,10)");

		var label = this.body.append("svg:g")
			.attr("class", "label");
		
		var pi = Math.PI;

		var arc = d3.svg.arc()
		    .innerRadius(0.95 * this.config.radius)
		    .outerRadius(0.95 * this.config.radius)
		    .startAngle(0)
		    .endAngle(pi)

		var path = label.append("path")
		    .attr("d", arc)
		    .attr("id", "path3")
		    .attr("transform", "translate(140,129)")
		    .attr("fill","#1b75bb")

		// Add a text label.
		var text = label.append("text")
		    .attr("x", 0) // text start at the beginning of the arc
		    .attr("dy", 0); // places text on the outside of the arc

		text.append("textPath")
			.attr("font-family", "Century Gothic")
		    .attr("font-size", "15px")
		    .attr("font-weight", "bolder")
		    .attr("fill", "#1b75bb")
		    .attr("xlink:href","#path3")
		    .text("Water Temperature");


		var ow = .005 * this.config.radius;
		gauge.append("svg:circle")
					.attr("cx", this.config.cx)
					.attr("cy", this.config.cy)
					.attr("r", this.config.radius)
					.style("fill", "#ccc") // rim inn circle
					.style("stroke", "#000")
					.style("stroke-width", ow +"px");
					
		var ow = .03 * this.config.radius;
		gauge.append("svg:circle")
					.attr("cx", this.config.cx)
					.attr("cy", this.config.cy)
					.attr("r", 0.95 * this.config.radius)
					.style("fill", "#fff")
					.style("stroke", "#a6a1a1") 
					.style("stroke-width", ow + "px");

					
		for (var index in this.config.blueZones)
		{
			this.drawBand(this.config.blueZones[index].from, this.config.blueZones[index].to, self.config.blueColor);
		}
		for (var index in this.config.greenZones)
		{
			this.drawBand(this.config.greenZones[index].from, this.config.greenZones[index].to, self.config.greenColor);
		}
		for (var index in this.config.yellowZones)
		{
			this.drawBand(this.config.yellowZones[index].from, this.config.yellowZones[index].to, self.config.yellowColor);
		}
		for (var index in this.config.lightOrangeZones)
		{
			this.drawBand(this.config.lightOrangeZones[index].from, this.config.lightOrangeZones[index].to, self.config.lightOrangeColor);
		}
		for (var index in this.config.orangeZones)
		{
			this.drawBand(this.config.orangeZones[index].from, this.config.orangeZones[index].to, self.config.orangeColor);
		}
		for (var index in this.config.redZones)
		{
			this.drawBand(this.config.redZones[index].from, this.config.redZones[index].to, self.config.redColor);
		}

		
		
		var fontSize = Math.round(this.config.size / 16);
		var majorDelta = this.config.range / (this.config.majorTicks - 1);
		for (var major = this.config.min; major <= this.config.max; major += majorDelta)
		{
			var minorDelta = majorDelta / this.config.minorTicks;
			for (var minor = major + minorDelta; minor < Math.min(major + majorDelta, this.config.max); minor += minorDelta)
			{
				var point1 = this.valueToPoint(minor, 0.75);
				var point2 = this.valueToPoint(minor, 0.85);
				
				// minor ticks
				gauge.append("svg:line")
							.attr("x1", point1.x)
							.attr("y1", point1.y)
							.attr("x2", point2.x)
							.attr("y2", point2.y)
							.style("stroke", "#666")
							.style("stroke-width", "1px");
			}
			
			var point1 = this.valueToPoint(major, 0.7);
			var point2 = this.valueToPoint(major, 0.85);	
			
			// major ticks
			gauge.append("svg:line")
				.attr("x1", point1.x)
				.attr("y1", point1.y)
				.attr("x2", point2.x)
				.attr("y2", point2.y)
				.style("stroke", "#333")
				.style("stroke-width", "2px");

			/* tick labeling
			 * use if{} to show only min and max
			 */
			var point = this.valueToPoint(major, 0.615);
				
			gauge.append("svg:text")
				.attr("x", point.x+8+this.config.labelX)
				.attr("y", point.y+this.config.labelY)
				.attr("dy", fontSize / 3)
				.attr("text-anchor", major == this.config.min ? "start" : "end")
				.text(major)
				.style("font-size", fontSize-2 + "px")
				.style("fill", "#333")
				.style("stroke-width", "0px");

		}
		
		var pointerContainer = gauge.append("svg:g").attr("class", "pointerContainer");
		
		var midValue = (this.config.min + this.config.max) / 2;
		
		var pointerPath = this.buildPointerPath(midValue);
		
		var pointerLine = d3.svg.line()
									.x(function(d) { return d.x })
									.y(function(d) { return d.y })
									.interpolate("basis");
		// needle
		pointerContainer.selectAll("path")
							.data([pointerPath])
							.enter()
								.append("svg:path")
									.attr("d", pointerLine)
									.style("fill", "#999999")
									.style("stroke", "#666666")
									.style("fill-opacity", 1)
		// circle on needle			
		pointerContainer.append("svg:circle")
							.attr("cx", this.config.cx)
							.attr("cy", this.config.cy)
							.attr("r", 0.08 * this.config.radius)
							.style("fill", "#666666")
							.style("stroke", "#808080")
							.style("opacity", 1);
		//dynamic temp label
		var fontSize = Math.round(this.config.size / 10);
		pointerContainer.selectAll("text")
							.data([midValue])
							.enter()
								.append("svg:text")
									.attr("x", this.config.cx + 8 + this.config.labelX)
									.attr("y", this.config.size - this.config.cy / 4 - fontSize + this.config.labelY)
									.attr("dy", fontSize / 2)
									.attr("text-anchor", "middle")
									.style("font-size", fontSize + "px")
									.style("font-weight", "bold")
									.style("fill", "#666666")
									.style("stroke-width", "0px");
		
		this.redraw(this.config.min, 0);
	}
	
	this.buildPointerPath = function(value)
	{
		var delta = this.config.range / 13;
		
		var head = valueToPoint(value, 0.85);
		var head1 = valueToPoint(value - delta, 0.12);
		var head2 = valueToPoint(value + delta, 0.12);
		
		var tailValue = value - (this.config.range * (1/(270/360)) / 2);
		var tail = valueToPoint(tailValue, 0.28);
		var tail1 = valueToPoint(tailValue - delta, 0.12);
		var tail2 = valueToPoint(tailValue + delta, 0.12);
		
		return [head, head1, tail2, tail, tail1, head2, head];
		
		function valueToPoint(value, factor)
		{
			var point = self.valueToPoint(value, factor);
			point.x -= self.config.cx;
			point.y -= self.config.cy;
			return point;
		}
	}
	
	/* draw colored sections in circle*/
	this.drawBand = function(start, end, color)
	{
		if (0 >= end - start) return;
		
		var gauge = this.body.select(".gauge");

		gauge.append("svg:path")
					.style("fill", color)
					.attr("d", d3.svg.arc()
						.startAngle(this.valueToRadians(start))
						.endAngle(this.valueToRadians(end))
						.innerRadius(0.87 * this.config.radius)
						.outerRadius(0.92 * this.config.radius))
					.attr("transform", function() { return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(270)" });
	}
	
	this.redraw = function(value, transitionDuration)
	{
		var pointerContainer = this.body.select(".pointerContainer");
		
		pointerContainer.selectAll("text").text(Math.round(value) + this.config.label);
		
		var pointer = pointerContainer.selectAll("path");
		pointer.transition()
					//.duration(undefined != transitionDuration ? transitionDuration : this.config.transitionDuration)
					.duration(this.config.transitionMs)
					.ease('elastic')
					//.attr('transform', 'rotate(' +newAngle +')');
					//.delay(0)
					//.ease("linear")
					//.attr("transform", function(d) 
					.attrTween("transform", function()
					{
						var pointerValue = value;
						if (value > self.config.max) pointerValue = self.config.max + 0.02*self.config.range;
						else if (value < self.config.min) pointerValue = self.config.min - 0.02*self.config.range;
						var targetRotation = (self.valueToDegrees(pointerValue) - 90);
						var currentRotation = self._currentRotation || targetRotation;
						self._currentRotation = targetRotation;
						
						return function(step) 
						{
							var rotation = currentRotation + (targetRotation-currentRotation)*step;
							return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(" + rotation + ")"; 
						}
					});
	}
	
	this.valueToDegrees = function(value)
	{
		// thanks @closealert
		//return value / this.config.range * 270 - 45;
		return value / this.config.range * 270 - (this.config.min / this.config.range * 270 + 45);
	}
	
	this.valueToRadians = function(value)
	{
		return this.valueToDegrees(value) * Math.PI / 180;
	}
	
	this.valueToPoint = function(value, factor)
	{
		return { 	x: this.config.cx - this.config.radius * factor * Math.cos(this.valueToRadians(value)),
					y: this.config.cy - this.config.radius * factor * Math.sin(this.valueToRadians(value)) 		};
	}
	
	// initialization
	this.configure(configuration);	
}