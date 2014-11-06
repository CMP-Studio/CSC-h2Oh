<?php
  /**
   * Write JSON data to file.
   */

  if(isset($_POST['riverLocation'])){
    
    $location = $_POST['riverLocation'];
    
    switch($location){
      case "acmetonia":
        $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03049640&modifiedSince=PT2H&parameterCd=00010,00065,00400";
        break;
      case "elizabeth":
        $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03075070&modifiedSince=PT2H&parameterCd=00010,00065,00400";
        break;
      case "ohioview":
        $url = "http://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=03108490&modifiedSince=PT2H&parameterCd=00010,00065,00400";
        break;
    }

    // Fetch the data.
    $riverData = file_get_contents($url);
    if (!$riverData)
    {
      echo 'Error retrieving: ' . $url;
      exit;
    } else {
      echo("fetching river data");
      //echo($riverData);
      //saveJson($riverData, $location);
      saveJson($riverData, $location);
    }
  }

  function saveJson($data, $location){
    echo $location;
    switch($location){
      case "acmetonia":
        $fp = fopen('riverData/acmetoniaPA-IV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "elizabeth":
        $fp = fopen('riverData/elizabethPA-IV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
      case "ohioview":
        $fp = fopen('riverData/ohioviewPA-IV.json', 'w');
        fwrite($fp, $data);
        fclose($fp);
        break;
    }
  }

?>

