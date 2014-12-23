<?php
  /**
   * Write JSON data to file.
   */
    
    /* RIVERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */
    $locations = array("allegheny", "monongahela", "ohio");
    $sites = array("03049640", "03075070", "03108490");
    //24 hrs in milliseconds: 86400000

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

    //e.g. &startDT=2010-11-22&endDT=2010-04-22
    //$date = "&startDT=".$sixMAgoYear."-".$sixMAgoMonth."-01&endDT=".$yesterDate;
    // echo($date);
    // echo("<br />");
    // echo("yesterdays date: ".$yesterDate);
    // echo("<br />");

    //$saveCounter = 0;

    // Fetch the data 3 times for the different dates for each location
    for($i=0; $i < 3; $i++){

      foreach ($locations as $l) {
        $riverData = file_get_contents(getUrl($l, $i, $yesterDate, $sixmonthsago, $hourNow, $nextHour));
        if (!$riverData)
        {
          echo 'Error retrieving: ' . $url;
          exit;
        } else {
          echo("fetching river data ".$l." for: ".$i."<br /> ");
          saveJson($riverData, $l, $i);
          // if($i == 2) saveGaugeHeight($riverData, $l);
        }
      }
    }

  //&startDT=2010-11-23T14:11&endDT=2010-11-23T15:11
  function getUrl($location, $sd, $yesterDate, $sixmonthsago, $hourNow, $nextHour){

    $date = "";
    //echo("yesterdays date: ".$yesterDate."<br />");
    
       switch($sd){
         case '0': //6 months ago
           // e.g. &startDT=2014-06-25T18:00&endDT=2014-06-25T19:00
           $date = "&startDT=".$sixmonthsago."T".$hourNow.":00&endDT=".$sixmonthsago."T".$nextHour.":00";
           //echo($date."<br />");
           break;
         case '1': // yesterday
           // e.g. &startDT=2014-11-25T18:00&endDT=2014-11-25T19:00
           $date = "&startDT=".$yesterDate."T".$hourNow.":00&endDT=".$yesterDate."T".$nextHour.":00";
           break;
         case '2': // today
           $date = "";
           break;
       }

       //echo("for ".$sd." ");

      switch($location){
        case "allegheny":
          $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03049640&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
        case "monongahela": // 394337079544201 //03075070
          $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03075070&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
        case "ohio":
          $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03108490&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
      }
      //echo("<br />".$url);
      return $url;
  }

  function saveJson($data, $location, $dateSet){
    switch($location){
      case "allegheny":
        $fp = fopen('../riverData/alleghenyPA-IV-'.$dateSet.'.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "monongahela":
        $fp = fopen('../riverData/monongahelaPA-IV-'.$dateSet.'.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "ohio":
        $fp = fopen('../riverData/ohioPA-IV-'.$dateSet.'.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
    }
  }

  // function saveGaugeHeight($data, $location){
  //   $heightValue = json_decode($data);
  //   var_dump($heightValue);
  //   echo("--------- <br /> <br />");
  // }

?>

