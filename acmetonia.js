function displayAlleghenyGauges(temp, gageHeight, ph, river){	

    if(svgPH != null)svgPH.remove();
    if(svgTemp != null)svgTemp.remove();
    if(svgGageHeight != null)svgGageHeight.remove();

    // if ( (temp == null) && (gageHeight == null) && (ph == null) ) {
    //     console.log(river+": setting data values to 0");
    //     temp = 0;
    //     gageHeight = 0;
    //     ph = 0;

    // }

	// ----------------------------------------------------- PH
	var svgPH = d3.select("#"+river+"PH")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);

    var gaugePH = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugePH.axis().orient("in")
            .normalize(true)
            .ticks(7)
            .tickSubdivide(0)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 13])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayPH = iopctrl.segdisplay()
            .width(80)
            .digitCount(5)
            .negative(false)
            .decimals(1);

    svgPH.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayPH);

    svgPH.append("g")
            .attr("class", "gauge")
            .call(gaugePH);

    segDisplayPH.value(ph);
    gaugePH.value(ph);

    // ----------------------------------------------------- temperature
    var svgTemp = d3.select("#"+river+"Temp")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);


    var gaugeTemp = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugeTemp.axis().orient("in")
            .normalize(true)
            .ticks(8)
            .tickSubdivide(8)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 34])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayTemp = iopctrl.segdisplay()
            .width(80)
            .digitCount(6)
            .negative(false)
            .decimals(1);

    svgTemp.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayTemp);

    svgTemp.append("g")
            .attr("class", "gauge")
            .call(gaugeTemp);

    segDisplayTemp.value(temp);
    gaugeTemp.value(temp);


    // ----------------------------------------------------- gage height

    var svgGageHeight = d3.select("#"+river+"Diss")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);


    var gaugeGageHeight = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugeGageHeight.axis().orient("in")
            .normalize(true)
            .ticks(5)
            .tickSubdivide(3)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 49])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayGageHeight = iopctrl.segdisplay()
            .width(80)
            .digitCount(6)
            .negative(false)
            .decimals(1);

    svgGageHeight.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayGageHeight);

    svgGageHeight.append("g")
            .attr("class", "gauge")
            .call(gaugeGageHeight);

    segDisplayGageHeight.value(gageHeight);
    gaugeGageHeight.value(gageHeight);
}