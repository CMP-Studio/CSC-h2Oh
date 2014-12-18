<?php

    echo("Save Daily Values: <br /><br />");

    /* RIVERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */
    // $locations = array("acmetonia", "elizabeth", "ohioview");
    $locations = array("allegheny", "monongahela", "ohio");
    $url = "";

    date_default_timezone_set('America/New_York');

    $todayDay = date("d");
    $todayMonth = date("m");
    $todayYear = date("Y");
    $hourNow = date("G");
    $nextHour = $hourNow + 1;
    if($nextHour > 23) $nextHour = "00:00";
    $minuteNow = date("i");
    $dateNow = date("c");

    //echo($hourNow." ".$nextHour."<br />");

    $sixMAgoMonth = 0;
    $sixMAgoYear = $todayYear;

    //month
    if($todayMonth > 6 ){
      $sixMAgoMonth = $todayMonth - 4;
    } else {
      $sixMAgoMonth = 12 - (4 - $todayMonth);
      $sixMAgoYear --;
    }

    if ($todayMonth < 10) {$todayMonth = "0".$todayMonth;}
    if ($todayDay < 10) {$todayDay = "0".$todayDay;}

    // test dates
    // $sixMAgoYear = "2014";
    // $sixMAgoMonth = "2";
    // $lastMonthToday = "29";

    if ($sixMAgoMonth < 10) {$sixMAgoMonth = "0".$sixMAgoMonth;}
    $lastMonthToday = $todayDay+3;
    if($lastMonthToday < 10) $lastMonthToday = "0".$lastMonthToday;
    if($lastMonthToday >= cal_days_in_month(CAL_GREGORIAN, $sixMAgoMonth, $sixMAgoYear)) {
      $lastMonthToday = "01";
      if($sixMAgoMonth < 12) {
        $sixMAgoMonth = $sixMAgoMonth + 1;
      } else {
        $sixMAgoMonth = "01";
        $sixMAgoYear = $sixMAgoYear + 1;
      }
    }
    $sixmonthsago = $sixMAgoYear."-".$sixMAgoMonth."-".$lastMonthToday;
    //echo($sixmonthsago."<br />");
    //echo("sixmonthsago: ".$sixmonthsago."<br />");

    $yesterDate = date("F j, Y", strtotime('-1 days')); //G i
    $pieces = explode(" ", $yesterDate);
    $yesterDay = substr($pieces[1], 0, -1);
    $yesterMonth = $pieces[0];
    switch($yesterMonth){
      case "January":
        $yesterMonth = 01;
        break;
      case "February":
        $yesterMonth = 02;
        break;
      case "March":
        $yesterMonth = 03;
        break;
      case "April":
        $yesterMonth = 04;
        break;
      case "May":
        $yesterMonth = 05;
        break;
      case "June":
        $yesterMonth = 06;
        break;
      case "July":
        $yesterMonth = 07;
        break;
      case "August":
        $yesterMonth = 08;
        break;
      case "September":
        $yesterMonth = 09;
        break;
      case "October":
        $yesterMonth = 10;
        break;
      case "November":
        $yesterMonth = 11;
        break;
      case "December":
        $yesterMonth = 12;
        break;
    }
    $yesterYear = $pieces[2];
    $yesterDate = $yesterYear."-".$yesterMonth."-".$yesterDay;

    //e.g. &startDT=2010-04-22&endDT=2010-04-22
    $date = "&startDT=".$sixMAgoYear."-".$sixMAgoMonth."-01&endDT=".$yesterDate;
    // echo($date);
    // echo("<br />");
    // echo($yesterDate);
    // echo("<br />");

    foreach ($locations as $l) {
      switch($l){
        case "allegheny":
          $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03049640&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
        case "monongahela":
          $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03075070&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
        case "ohio":
          $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03108490&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
      }

        /*results:
       * temperature delivers 3 results, the third is the median ..003
       * gage height currently delivers no results !!!!!!
       * ph delivers 4 results, the fourth is the median ..008
       */

      // Fetch the data.
      $riverData = file_get_contents($url);
      if (!$riverData)
      {
        echo 'Error retrieving: ' . $url;
        exit;
      } else {
        echo("fetching river data: ");
        //echo("<br />");
        //echo($riverData);
        saveJson($riverData, $l);
      }

    }

    
  function saveJson($data, $location){
    echo $location."<br />";
    switch($location){
      case "allegheny":
        $fp = fopen('../riverData/alleghenyPA-DV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "monongahela":
        $fp = fopen('../riverData/monongahelaPA-DV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "ohio":
        $fp = fopen('../riverData/ohioPA-DV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
    }
  }
?>