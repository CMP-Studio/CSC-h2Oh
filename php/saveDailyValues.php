<?php

    echo("Save Daily Values: <br /><br />");

    /* RIVERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */
    $locations = array("allegheny", "monongahela", "ohio");
    $url = "";

    date_default_timezone_set('America/New_York');

    $todayDay = date("d");
    $todayMonth = date("m");
    $todayYear = date("Y");

    //e.g. &startDT=2010-04-22&endDT=2010-04-22
    //$date = "&startDT=".$sixMAgoYear."-".$sixMAgoMonth."-01&endDT=".$yesterDate;

    $beginMonth = $todayMonth;
    $beginYear = $todayYear-1;
    $endMonth = $todayMonth;
    $endYear = $todayYear;

    $newDate = "&startDT=".$beginYear."-".$beginMonth."-01&endDT=".$endYear."-".$endMonth."-01";

    echo("new date: ".$newDate."<br />");

    foreach ($locations as $l) {
      switch($l){
        case "allegheny":
        // &modifiedSince=PT2H&
          $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03049640&parameterCd=00010,00065,00400".$newDate;
          break;
        case "monongahela":
        // &modifiedSince=PT2H
          $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=394337079544201&parameterCd=00010,00065,00400".$newDate;
          break;
        case "ohio":
        //&modifiedSince=PT2H
          $url = "http://waterservices.usgs.gov/nwis/dv/?format=json&sites=03108490&parameterCd=00010,00065,00400".$newDate;
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