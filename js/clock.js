function Clock(placeholderName, configuration)
{
	this.placeholderName = placeholderName;
	
	var self = this; // for internal d3 functions

	var pi = Math.PI;
	var scaleSecs = d3.scale.linear().domain([0, 59 + 999/1000]).range([0, 2 * pi]);
	var scaleMins = d3.scale.linear().domain([0, 59 + 59/60]).range([0, 2 * pi]);
	var scaleHours = d3.scale.linear().domain([0, 11 + 59/60]).range([0, 2 * pi]);

	var clockGroup, fields, formatHour, formatMinute, height, offSetX, offSetY, pi, render, scaleHours, scaleSecsMins, vis, width;

var vis, clockGroup;
	
	this.configure = function(configuration)
	{
		this.config = configuration;

		this.config.max = configuration.max;
		
		this.config.width = this.config.width;//50;
		this.config.height = this.config.width;
		this.config.offSetX = this.config.width/2.5;
		this.config.offSetY = this.config.width/2.5;
		this.config.hour = this.config.hour;//15;
		this.config.minute = this.config.minute;//20;

		this.draw();
		var data, defaultTime;
		data = this.fields(this.config.hour, this.config.minute);
		defaultTime = this.fields(12, 0);
		this.render(defaultTime, data);

	}

	this.fields = function(hour, minute) {

		// console.log("in fields");
		formatMinute = d3.time.format("%M");

		formatHour = d3.time.format("%H");

		    var d, data, hour, minute;
		    d = new Date();
		    // minute = this.config.minute;//d.getMinutes();
		    // hour = this.config.hour;//d.getHours() + minute / 60;

		    return data = [
		      {
		        "unit": "minutes",
		        "text": formatMinute(d),
		        "numeric": minute
		      }, {
		        "unit": "hours",
		        "text": formatHour(d),
		        "numeric": hour
		      }
		    ];
		  };

	this.draw = function(){

		// console.log("in render");
		vis = d3.selectAll("#" + this.placeholderName)
		  .append("svg:svg")
		  .attr("width", this.config.width)
		  .attr("height", this.config.height);

		clockGroup = vis.append("svg:g")
		  .attr("transform", "translate(" + this.config.offSetX + "," + this.config.offSetY + ")");

		clockGroup.append("svg:circle")
		  .attr("r", this.config.width/3).attr("fill", "none")
		  .attr("class", "clock outercircle")
		  .attr("stroke", "#b3b3b3")
		  .attr("stroke-width", this.config.width/100);

		clockGroup.append("svg:circle")
		  .attr("r", this.config.width/100*1.5)
		  .attr("fill", "#b3b3b3")
		  .attr("class", "clock innercircle");

		  scaleSecsMins = d3.scale.linear().domain([0, 59 + 59 / 60]).range([0, 2 * pi]);
		  scaleHours = d3.scale.linear().domain([0, 11 + 59 / 60]).range([0, 2 * pi]);

	}

	this.render = function(defaultTime, data)
	{

			var hourArc, minuteArc;
		    clockGroup.selectAll(".clockhandStatic").remove();
		    minuteArc = d3.svg.arc().innerRadius(0).outerRadius(this.config.width/3.7).startAngle(function(d) {
		      return scaleSecsMins(d.numeric);
		    }).endAngle(function(d) {
		      return scaleSecsMins(d.numeric);
		    });
		    hourArc = d3.svg.arc().innerRadius(0).outerRadius(this.config.width/5).startAngle(function(d) {
		      return scaleHours(d.numeric % 12);
		    }).endAngle(function(d) {
		      return scaleHours(d.numeric % 12);
		    });


			clockGroup.selectAll(".clockhandStatic").data(defaultTime).enter().append("svg:path").attr("d", function(d) {

		      if (d.unit === "minutes") {
		        return minuteArc(d);
		      } else if (d.unit === "hours") {
		        return hourArc(d);
		      }
		    }).attr("class", "clockhandStatic").attr("stroke", "#c3c7c9").attr("stroke-width", this.config.width/100).attr("fill", "none");


		    var hourArc, minuteArc;
		    clockGroup.selectAll(".clockhand").remove();
		    minuteArc = d3.svg.arc().innerRadius(0).outerRadius(this.config.width/3.7).startAngle(function(d) {
		      return scaleSecsMins(d.numeric);
		    }).endAngle(function(d) {
		      return scaleSecsMins(d.numeric);
		    });
		    hourArc = d3.svg.arc().innerRadius(0).outerRadius(this.config.width/5).startAngle(function(d) {
		      return scaleHours(d.numeric % 12);
		    }).endAngle(function(d) {
		      return scaleHours(d.numeric % 12);
		    });

		    clockGroup.selectAll(".clockhand").data(data).enter().append("svg:path").attr("d", function(d) {

		      if (d.unit === "minutes") {
		        return minuteArc(d);
		      } else if (d.unit === "hours") {
		        return hourArc(d);
		      }
		    }).attr("class", "clockhand").attr("stroke", "#595a5b").attr("stroke-width", this.config.width/100).attr("fill", "none");

	}

	this.redraw = function(h, m){

		var data, defaultTime;
		data = this.fields(h, m);
		defaultTime = this.fields(12, 0);
		this.render(defaultTime, data);

	}

	// initialization
	this.configure(configuration);
}