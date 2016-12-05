<?php
  echo "SNSD";
  $username = $_POST("username");
  echo "Yoona";
  $file = fopen("passwd", "r");
  echo "Taeyeon";
  $userlist = Array();
  while(!feof($file)){
    echo "SNSD while ";
    $line = fgets($file);
    $line_pieces = explode(":", $line);
    $userlist[$line_pieces[0]] = $line_pieces[1];
  }
  fclose($file);
  echo "SNSD2";
  if(!array_key_exists($username, $userlist)){
    $response = "true";
    echo "fjlsdkf";
  }else{
    $response = "false";
    echo "lsjdflkdsjl";
  }
?>
