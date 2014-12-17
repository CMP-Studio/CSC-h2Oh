<?php

    $location = "";
    $url = "";

    $location = "acmetonia";
    $location = "elizabeth";
    $location = "ohioview";

    $locations = {"acmetonia", "elizabeth", "elizabeth"};
    
    //24 hrs in milliseconds: 86400000

    $todayDay = date("d");
    $todayMonth = date("m");
    $todayYear = date("Y");

    $sixMAgoMonth = 0;
    $sixMAgoYear = $todayYear;

    //month
    if($todayMonth > 6 ){
      $sixMAgoMonth = $todayMonth - 6;
    } else {
      $sixMAgoMonth = 12 - (6 - $todayMonth);
      $sixMAgoYear --;
    }

    if ($todayMonth < 10) {$todayMonth = "0".$todayMonth;}
    if ($todayDay < 10) {$todayDay = "0".$todayDay;}
    if ($sixMAgoMonth < 10) {$sixMAgoMonth = "0".$sixMAgoMonth;}

    $yesterDate = date("F j, Y", strtotime('-1 days'));
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
    echo($date);
    echo("<br />");
    echo($yesterDate);
    echo("<br />");

    switch($location){
      case "acmetonia":
        $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03049640&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
        break;
      case "elizabeth":
        $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03075070&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
        break;
      case "ohioview":
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
      saveJson($riverData, $location);
    }

  function saveJson($data, $location){
    echo $location;
    switch($location){
      case "acmetonia":
        $fp = fopen('riverData/acmetoniaPA-DV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "elizabeth":
        $fp = fopen('riverData/elizabethPA-DV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "ohioview":
        $fp = fopen('riverData/ohioviewPA-DV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
    }
  }
?>