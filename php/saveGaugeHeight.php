<?php
  /*
   * Write gauge height values to file.
   */
    
  /* GAUGE HEIGHT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */

  $gaugeHeightData = "";
  if (isset($_POST['ghData'])) {
    $gaugeHeightData = $_POST['ghData'];
    $location = $_POST['loc'];
    saveAsCSV($gaugeHeightData, $location);
  }

  // saveAsCSV("2014-12-23T10:45:00.000-05:00,12.45", "allegheny");

  function saveAsCSV($data, $location){
    switch($location){
      case "allegheny":
        $data = $data."\n";
        $file = '../riverData/alleghenyPA-Gen.csv';
        file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
        echo("saved ".$location);
        break;
      case "monongahela":
        $data = $data."\n";
        $file = '../riverData/monongahelaPA-Gen.csv';
        file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
        echo("saved ".$location);
        break;
      case "ohio":
        $data = $data."\n";
        $file = '../riverData/ohioPA-Gen.csv';
        file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
        echo("saved ".$location);
        break;
    }
  }


?>

