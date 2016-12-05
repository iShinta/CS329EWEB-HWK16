var xhr;
if (window.ActiveXObject) {
  xhr = new ActiveXObject ("Microsoft.XMLHTTP");
}else if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest ();
}

function checkName(){
  var username = document.getElementById("username").value;
  if(username == null || username == "") return;
  var url = "check.php?username="+escape(username);
  xhr.open("GET", url, true);
  window.alert("open");
  xhr.onreadystatechange = updatePage();
  window.alert("update");
  xhr.send(null);
  window.alert("send");
}

function updatePage() {
  window.alert("updatePage");
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          window.alert("xhr passed");
            var response = xhr.responseText;
            window.alert(response);
            if(response == "true") window.alert("Username already taken.");
        }
    }
}
