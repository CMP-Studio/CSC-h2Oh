<?php
  /**
   * Write JSON data to file.
   */
    
    /* RIEVRS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */
    $locations = array("acmetonia");//, "elizabeth", "ohioview");
    
    //24 hrs in milliseconds: 86400000
    $todayDay = date("d");
    $todayMonth = date("m");
    $todayYear = date("Y");
    $hourNow = date("G");
    $minuteNow = date("i");
    $dateNow = date("c");
    //echo($dateNow."<br />");

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

    $sixmonthsago = $sixMAgoYear."-".$sixMAgoMonth."-01";
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
        //dateSet[{},{},{}]
        $riverData = file_get_contents(getUrl($l, $i, $yesterDate, $sixmonthsago));
        if (!$riverData)
        {
          echo 'Error retrieving: ' . $url;
          exit;
        } else {
          echo("fetching river data ".$l." <br /> ");
          //echo($riverData);
          //saveJson($riverData, $location);
          saveJson($riverData, $l, $i);
        }
      }
    }

  //&startDT=2010-11-23T14:11&endDT=2010-11-23T15:11
  function getUrl($location, $sd, $yesterDate, $sixmonthsago){

    $date = "";
    //echo("yesterdays date: ".$yesterDate."<br />");
    
       switch($sd){
         case '0': //6 months ago
           // e.g. &startDT=2014-06-25T18:00&endDT=2014-06-25T19:00
           $date = "&startDT=".$sixmonthsago."T18:00&endDT=".$sixmonthsago."T19:00";
           break;
         case '1': // yesterday
           // e.g. &startDT=2014-11-25T18:00&endDT=2014-11-25T19:00
           $date = "&startDT=".$yesterDate."T18:00&endDT=".$yesterDate."T19:00";
           break;
         case '2': // today
           $date = "";
           break;
       }

       //echo("for ".$sd." ");

      switch($location){
        case "acmetonia":
          $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03049640&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
        case "elizabeth":
          $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03075070&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
        case "ohioview":
          $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03108490&modifiedSince=PT2H&parameterCd=00010,00065,00400".$date;
          break;
      }
      //echo("<br />".$url);
      return $url;
  }

  function saveJson($data, $location, $dateSet){
    switch($location){
      case "acmetonia":
        $fc = file_get_contents('riverData/acmetoniaPA-IV.json'); 
        $replacedContent = replaceDataAt($fc, $data, $dateSet);
        //echo $fc;
        
        // $fp = fopen('riverData/acmetoniaPA-IV.json', 'w');
        // fwrite($fp, json_encode($replacedContent,JSON_UNESCAPED_UNICODE));
        // fclose($fp);
        break;
      case "elizabeth":
        // $fp = fopen('riverData/elizabethPA-IV.json', 'w');
        // $fc = file($fp);
        // $replacedContent = replaceDataAt($fc, $data, $dateSet);
        // file_put_contents($fp, $replacedContent); //Overwrite the file with the new content
        // fwrite($fp, $replacedContent);
        // fclose($fp);
        break;
      case "ohioview":
        // $fp = fopen('riverData/ohioviewPA-IV.json', 'w');
        // $fc = file($fp);
        // $replacedContent = replaceDataAt($fc, $data, $dateSet);
        // file_put_contents($fp, $replacedContent); //Overwrite the file with the new content
        // fwrite($fp, $replacedContent);
        // fclose($fp);
        break;
    }
  }

  function replaceDataAt($fc, $data, $dateSet){

    $jsonData = json_decode($fc, true);    

    $jsonData["dateSet"][$dateSet] = $data;
    
    $newJsonString = json_encode($jsonData);
    
    file_put_contents('riverData/acmetoniaPA-IV.json', $newJsonString);

    
    // echo "<br />".$dateSet."<br />";
    // echo json_encode($jsonData);
    // echo "<br />";
    

    //$result = array_map(null, $fcArray);
    //echo("length: ".count($result));
    //$result[$dateSet] = $data;

    // foreach($fc as $lineNumber => &$lineContent) { 
    // if($lineNumber == $dateSet+1) { // line 0 has the name of the json array dateSet so we add one line
    //     $lineContent = $data . "," . PHP_EOL; // Modify the line and add line break
    //   }
    // }

    // $result = implode("", $content);
    //$result = "";

    return $jsonData;

  }

?>

