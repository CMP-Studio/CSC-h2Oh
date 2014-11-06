function displayOhioGauges(temp, gageHeight, ph, river){	

    if(svgPHOhio != null)svgPHOhio.remove();
    if(svgTempOhio != null)svgTempOhio.remove();
    if(svgGageHeightOhio != null)svgGageHeightOhio.remove();

    // if ( (temp == null) && (gageHeight == null) && (ph == null) ) {
    //     console.log(river+": setting data values to 0");
    //     temp = 0;
    //     gageHeight = 0;
    //     ph = 0;

    // }


	// ----------------------------------------------------- PH
	var svgPHOhio = d3.select("#"+river+"PH")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);

    var gaugePHOhio = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugePHOhio.axis().orient("in")
            .normalize(true)
            .ticks(7)
            .tickSubdivide(0)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 13])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayPHOhio = iopctrl.segdisplay()
            .width(80)
            .digitCount(5)
            .negative(false)
            .decimals(1);

    svgPHOhio.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayPHOhio);

    svgPHOhio.append("g")
            .attr("class", "gauge")
            .call(gaugePHOhio);

    segDisplayPHOhio.value(ph);
    gaugePHOhio.value(ph);

    // ----------------------------------------------------- temperature
    var svgTempOhio = d3.select("#"+river+"Temp")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);


    var gaugeTempOhio = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugeTempOhio.axis().orient("in")
            .normalize(true)
            .ticks(8)
            .tickSubdivide(8)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 34])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayTempOhio = iopctrl.segdisplay()
            .width(80)
            .digitCount(6)
            .negative(false)
            .decimals(1);

    svgTempOhio.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayTempOhio);

    svgTempOhio.append("g")
            .attr("class", "gauge")
            .call(gaugeTempOhio);

    segDisplayTempOhio.value(temp);
    gaugeTempOhio.value(temp);


    // ----------------------------------------------------- gage height

    var svgGageHeightOhio = d3.select("#"+river+"Diss")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);


    var gaugeGageHeightOhio = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugeGageHeightOhio.axis().orient("in")
            .normalize(true)
            .ticks(5)
            .tickSubdivide(3)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 49])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayGageHeightOhio = iopctrl.segdisplay()
            .width(80)
            .digitCount(6)
            .negative(false)
            .decimals(1);

    svgGageHeightOhio.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayGageHeightOhio);

    svgGageHeightOhio.append("g")
            .attr("class", "gauge")
            .call(gaugeGageHeightOhio);

    segDisplayGageHeightOhio.value(gageHeight);
    gaugeGageHeightOhio.value(gageHeight);
}