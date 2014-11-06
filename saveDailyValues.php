<?php

    $location = "";
    $url = "";

    $location = "acmetonia";
    //$location = "elizabeth";
    //$location = "ohioview";
    
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

    $date = "&startDT=".$sixMAgoYear."-".$sixMAgoMonth."-01&endDT=".$todayYear."-".$todayMonth."-".$todayDay;
    echo($date);
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