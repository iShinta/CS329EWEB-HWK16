<!DOCTYPE html>

<html>
<head>
  <script src="script.js"></script>
</head>
<body>
  <h1>Registration</h1>
  <?php
  if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = $_POST["username"];
    $password = $_POST["password"];

    $file = fopen("passwd", "r");
    $userlist = Array();
    while(!feof($file)){
      $line = fgets($file);
      $line_pieces = explode(":", $line);
      $userlist[$line_pieces[0]] = $line_pieces[1];
    }
    fclose($file);

    if(!array_key_exists($username, $userlist)){
      $file2 = fopen("passwd", "a");
      fwrite($file2, $username.":".$password."\n");
      fclose($file2);
      echo "<p>User Registered</p>";
    }else{
      echo "<p>User Already Taken</p>";
    }
  }
  ?>
  <form method="post">
    <span>Username :</span><input type="text" name="username" onChange = "checkName();" /><br />
    <span>Password :</span><input type="text" name="password" /><br />
    <input type="submit" name="submit" />
    <input type="reset" name="reset" />
  </form>
</body>
</html>
