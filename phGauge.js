function PhGauge(placeholderName, configuration)
{
	this.placeholderName = placeholderName;
	
	var self = this; // for internal d3 functions
	
	this.configure = function(configuration)
	{
		this.config = configuration;
		
		this.config.size = this.config.size * 0.9;

		this.config.transitionMs = configuration.transitionMs || 4000;
		
		this.config.radius = this.config.size * 0.97 / 2;
		this.config.cx = this.config.size / 2;
		this.config.cy = this.config.size / 2;
		
		this.config.min = undefined != configuration.min ? configuration.min : 0; 
		this.config.max = undefined != configuration.max ? configuration.max : 100; 
		this.config.range = this.config.max - this.config.min;
		
		this.config.majorTicks = configuration.majorTicks || 5;
		this.config.minorTicks = configuration.minorTicks || 2;
		
		this.config.pinkColor 	= configuration.pinkColor || "#b515b5";
		this.config.purpleColor = configuration.purpleColor || "#6615b5";
		this.config.lPurpleColor = configuration.lPurpleColor || "#4315b5";
		this.config.dBlueColor 	= configuration.dBlueColor || "#1336b7";
		this.config.blueColor 	= configuration.blueColor || "#1071b9";
		this.config.lBlueColor 	= configuration.lBlueColor || "#00a99d";
		this.config.blueGreenColor 	= configuration.blueGreenColor || "#046937";
		this.config.greenColor = configuration.greenColor || "#8cc640";
		this.config.lGreenColor 	= configuration.lGreenColor || "#d9e027";
		this.config.yellowColor = configuration.yellowColor || "#f9ed24";
		this.config.lOrangeColor = configuration.lOrangeColor || "#fbb03b";
		this.config.orangeColor = configuration.orangeColor || "#f15b26";
		this.config.redColor 	= configuration.redColor || "#ec2227";
		this.config.dRedColor 	= configuration.dRedColor || "#c1282d";



		this.config.dRedZones = configuration.dRedZones || [{ from: this.config.min + this.config.range*0, to: this.config.min + this.config.range*0.078 }];
		this.config.redZones = configuration.redZones || [{ from: this.config.min + this.config.range*0.08, to: this.config.min + this.config.range*0.150 }];
		this.config.orangeZones = configuration.orangeZones || [{ from: this.config.min + this.config.range*0.150, to: this.config.min + this.config.range*0.221 }];
		this.config.lOrangeZones = configuration.lOrangeZones || [{ from: this.config.min + this.config.range*0.221, to: this.config.min + this.config.range*0.29}];
		this.config.yellowZones = configuration.yellowZones || [{ from: this.config.min + this.config.range*0.29, to: this.config.min + this.config.range*0.36 }];
		this.config.lGreenZones = configuration.lGreenZones || [{ from: this.config.min + this.config.range*0.36, to: this.config.min + this.config.range*0.43 }];
		this.config.greenZones = configuration.greenZones || [{ from: this.config.min + this.config.range*0.43, to: this.config.min + this.config.range*0.5 }];
		this.config.blueGreenZones = configuration.blueGreenZones || [{ from: this.config.min + this.config.range*0.5, to: this.config.min + this.config.range*0.57 }];
		this.config.lBlueZones = configuration.lBlueZones || [{ from: this.config.min + this.config.range*0.57, to: this.config.min + this.config.range*0.64 }];
		this.config.blueZones = configuration.blueZones || [{ from: this.config.min + this.config.range*0.64, to: this.config.min + this.config.range*0.715 }];
		this.config.dBlueZones = configuration.dBlueZones || [{ from: this.config.min + this.config.range*0.715, to: this.config.min + this.config.range*0.79 }];
		this.config.lPurpleZones = configuration.lPurpleZones || [{ from: this.config.min + this.config.range*0.79, to: this.config.min + this.config.range*0.86 }];
		this.config.purpleZones = configuration.purpleZones || [{ from: this.config.min + this.config.range*0.86, to: this.config.min + this.config.range*0.93 }];
		this.config.pinkZones = configuration.pinkZones || [{ from: this.config.min + this.config.range*0.93, to: this.config.max }];

		this.config.transitionDuration = configuration.transitionDuration || 500;
	}

	this.render = function()
	{
		this.body = d3.select("#" + this.placeholderName)
							.append("svg:svg")
							.attr("class", "temperatureGauge")
							.attr("width", this.config.size)
							.attr("height", this.config.size);
		
		// outline		
		this.body.append("svg:circle")
					.attr("cx", this.config.cx)
					.attr("cy", this.config.cy)
					.attr("r", 0.95 * this.config.radius)
					.style("fill", "#fff")
					.style("stroke", "#e0e0e0") 
					.style("stroke-width", "5px");
					
		for (var index in this.config.dRedZones)
		{
			this.drawBand(this.config.dRedZones[index].from, this.config.dRedZones[index].to, self.config.dRedColor);
		}
		for (var index in this.config.redZones)
		{
			this.drawBand(this.config.redZones[index].from, this.config.redZones[index].to, self.config.redColor);
		}
		for (var index in this.config.orangeZones)
		{
			this.drawBand(this.config.orangeZones[index].from, this.config.orangeZones[index].to, self.config.orangeColor);
		}
		for (var index in this.config.lOrangeZones)
		{
			this.drawBand(this.config.lOrangeZones[index].from, this.config.lOrangeZones[index].to, self.config.lOrangeColor);
		}
		for (var index in this.config.yellowZones)
		{
			this.drawBand(this.config.yellowZones[index].from, this.config.yellowZones[index].to, self.config.yellowColor);
		}
		for (var index in this.config.lGreenZones)
		{
			this.drawBand(this.config.lGreenZones[index].from, this.config.lGreenZones[index].to, self.config.lGreenColor);
		}
		for (var index in this.config.greenZones)
		{
			this.drawBand(this.config.greenZones[index].from, this.config.greenZones[index].to, self.config.greenColor);
		}
		for (var index in this.config.blueGreenZones)
		{
			this.drawBand(this.config.blueGreenZones[index].from, this.config.blueGreenZones[index].to, self.config.blueGreenColor);
		}
		for (var index in this.config.lBlueZones)
		{
			this.drawBand(this.config.lBlueZones[index].from, this.config.lBlueZones[index].to, self.config.lBlueColor);
		}
		for (var index in this.config.blueZones)
		{
			this.drawBand(this.config.blueZones[index].from, this.config.blueZones[index].to, self.config.blueColor);
		}
		for (var index in this.config.dBlueZones)
		{
			this.drawBand(this.config.dBlueZones[index].from, this.config.dBlueZones[index].to, self.config.dBlueColor);
		}
		for (var index in this.config.lPurpleZones)
		{
			this.drawBand(this.config.lPurpleZones[index].from, this.config.pinkZones[index].to, self.config.lPurpleColor);
		}
		for (var index in this.config.purpleZones)
		{
			this.drawBand(this.config.purpleZones[index].from, this.config.pinkZones[index].to, self.config.purpleColor);
		}
		for (var index in this.config.pinkZones)
		{
			this.drawBand(this.config.pinkZones[index].from, this.config.pinkZones[index].to, self.config.pinkColor);
		}

		var fontSize = Math.round(this.config.size / 16);
		var majorDelta = this.config.range / (this.config.majorTicks - 1);
		for (var major = this.config.min+1; major <= this.config.max; major += majorDelta)
		{
			var minorDelta = majorDelta / this.config.minorTicks;
			// for (var minor = major + minorDelta; minor < Math.min(major + majorDelta, this.config.max); minor += minorDelta)
			// {
			// 	var point1 = this.valueToPoint(minor, 0.75);
			// 	var point2 = this.valueToPoint(minor, 0.85);
				
			// 	// minor ticks
			// 	this.body.append("svg:line")
			// 				.attr("x1", point1.x)
			// 				.attr("y1", point1.y)
			// 				.attr("x2", point2.x)
			// 				.attr("y2", point2.y)
			// 				.style("stroke", "#666")
			// 				.style("stroke-width", "1px");
			// }
			
			var point1 = this.valueToPoint(major, 0.29);
			var point2 = this.valueToPoint(major, 0.91);	
			
			// major ticks
			this.body.append("svg:line")
						.attr("x1", point1.x)
						.attr("y1", point1.y)
						.attr("x2", point2.x)
						.attr("y2", point2.y)
						.style("stroke", "#fff")
						.style("stroke-width", "5px")
						.attr("transform", function() { return "translate(36,-29) rotate(14)" }); //translate(25,-20) rotate(10)

			/* tick labeling
			 * use if{} to show only min and max
			 */
			//if (major == this.config.min || major == this.config.max)
			//{
				var point = this.valueToPoint(major, 0.710);

				this.body.append("svg:text")
				 			.attr("x", point.x+8)
				 			.attr("y", point.y)
				 			.attr("dy", fontSize / 3)
				 			.attr("text-anchor", major == this.config.min ? "start" : "end")
				 			.text(major)
				 			.style("font-size", fontSize + "px")
							.style("fill", "#fff")
							.style("stroke-width", "0px");

			//}
		}
		
		var pointerContainer = this.body.append("svg:g").attr("class", "pointerContainer");
		
		var midValue = (this.config.min + this.config.max) / 2;
		
		var pointerPath = this.buildPointerPath(midValue);
		
		var pointerLine = d3.svg.line()
									.x(function(d) { return d.x })
									.y(function(d) { return d.y })
									.interpolate("basis");
		
		// circle on needle			
		pointerContainer.append("svg:circle")
							.attr("cx", this.config.cx)
							.attr("cy", this.config.cy)
							.attr("r", 0.08 * this.config.radius)
							.style("fill", "#666666")
							.style("stroke", "#808080")
							.style("opacity", 1);

		// needle
		pointerContainer.selectAll("path")
							.data([pointerPath])
							.enter()
								.append("svg:path")
									.attr("d", pointerLine)
									.style("fill", "#999999")
									.style("stroke", "#666666")
									.style("fill-opacity", 1)
		
		//dynamic temp label
		var fontSize = Math.round(this.config.size / 10);
		pointerContainer.selectAll("text")
							.data([midValue])
							.enter()
								.append("svg:text")
									.attr("x", this.config.cx)
									.attr("y", this.config.size - this.config.cy / 4 - fontSize -40)
									.attr("dy", fontSize / 2)
									.attr("text-anchor", "middle")
									.style("font-size", fontSize + "px")
									.style("fill", "#666666")
									.style("stroke-width", "0px");
		
		this.redraw(this.config.min, 0);
	}
	
	this.buildPointerPath = function(value)
	{
		var delta = this.config.range / 10;
		
		var head = valueToPoint(value, 0.8);
		var head1 = valueToPoint(value - delta, 0.07);
		var head2 = valueToPoint(value + delta, 0.07);
		
		var tailValue = value - (this.config.range * (1/(360/360)) / 2);
		var tail = valueToPoint(tailValue, 0.07);
		var tail1 = valueToPoint(tailValue - delta, 0.09);
		var tail2 = valueToPoint(tailValue + delta, 0.09);
		
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
		
		this.body.append("svg:path")
					.style("fill", color)
					.attr("d", d3.svg.arc()
						.startAngle(this.valueToRadians(start))
						.endAngle(this.valueToRadians(end))
						.innerRadius(0.5 * this.config.radius)
						.outerRadius(0.88 * this.config.radius))
					.attr("transform", function() { return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(283)" });
	}
	
	this.redraw = function(value, transitionDuration)
	{
		var pointerContainer = this.body.select(".pointerContainer");
		
		pointerContainer.selectAll("text").text(value);
		
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
		return value / this.config.range * 360 - (this.config.min / this.config.range * 270 + 103);
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