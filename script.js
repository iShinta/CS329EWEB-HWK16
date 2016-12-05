var xhr;
if (window.ActiveXObject) {
  xhr = new ActiveXObject ("Microsoft.XMLHTTP");
}else if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest ();
}

function checkName(username){
  if(username == null || username == "") return;
  var url = "check.php?username="+escape(username);
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if ((xhr.readyState == 4) && (xhr.status == 200)) {
      window.alert("xhr passed");
      var response = xhr.response;
      window.alert(response);
      if(response == "true") window.alert("Username already taken.");
    }
	};
  xhr.onreadystatechange = updatePage();
  xhr.send(null);
}
