function displayMonongahelaGauges(temp, gageHeight, ph, river){	

    if(svgPHMonongahela != null)svgPHMonongahela.remove();
    if(svgTempMonongahela != null)svgTempMonongahela.remove();
    if(svgGageHeightMonongahela != null)svgGageHeightMonongahela.remove();

    // if ( (temp == null) && (gageHeight == null) && (ph == null) ) {
    //     console.log(river+": setting data values to 0");
    //     temp = 0;
    //     gageHeight = 0;
    //     ph = 0;

    // }

	// ----------------------------------------------------- PH
	var svgPHMonongahela = d3.select("#"+river+"PH")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);

    var gaugePHMonongahela = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugePHMonongahela.axis().orient("in")
            .normalize(true)
            .ticks(7)
            .tickSubdivide(0)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 13])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayPHMonongahela = iopctrl.segdisplay()
            .width(80)
            .digitCount(5)
            .negative(false)
            .decimals(1);

    svgPHMonongahela.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayPHMonongahela);

    svgPHMonongahela.append("g")
            .attr("class", "gauge")
            .call(gaugePHMonongahela);

    segDisplayPHMonongahela.value(ph);
    gaugePHMonongahela.value(ph);

    // ----------------------------------------------------- temperature
    var svgTempMonongahela = d3.select("#"+river+"Temp")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);


    var gaugeTempMonongahela = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugeTempMonongahela.axis().orient("in")
            .normalize(true)
            .ticks(8)
            .tickSubdivide(8)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 34])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayTempMonongahela = iopctrl.segdisplay()
            .width(80)
            .digitCount(6)
            .negative(false)
            .decimals(1);

    svgTempMonongahela.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayTempMonongahela);

    svgTempMonongahela.append("g")
            .attr("class", "gauge")
            .call(gaugeTempMonongahela);

    segDisplayTempMonongahela.value(temp);
    gaugeTempMonongahela.value(temp);


    // ----------------------------------------------------- gage height

    var svgGageHeightMonongahela = d3.select("#"+river+"Diss")
        .append("svg:svg")
        .attr("width", 400)
        .attr("height", 400);


    var gaugeGageHeightMonongahela = iopctrl.arcslider()
            .radius(120)
            .events(false)
            .indicator(iopctrl.defaultGaugeIndicator);
    gaugeGageHeightMonongahela.axis().orient("in")
            .normalize(true)
            .ticks(5)
            .tickSubdivide(3)
            .tickSize(10, 8, 10)
            .tickPadding(5)
            .scale(d3.scale.linear()
                    .domain([1, 49])
                    .range([-3*Math.PI/6, 3*Math.PI/6]));

    var segDisplayGageHeightMonongahela = iopctrl.segdisplay()
            .width(80)
            .digitCount(6)
            .negative(false)
            .decimals(1);

    svgGageHeightMonongahela.append("g")
            .attr("class", "segdisplay")
            .attr("transform", "translate(130, 200)")
            .call(segDisplayGageHeightMonongahela);

    svgGageHeightMonongahela.append("g")
            .attr("class", "gauge")
            .call(gaugeGageHeightMonongahela);

    segDisplayGageHeightMonongahela.value(gageHeight);
    gaugeGageHeightMonongahela.value(gageHeight);
}