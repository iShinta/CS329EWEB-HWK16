var xhr;
    if (window.ActiveXObject) {
        xhr = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest ();
    }
    window.alert("XHR created");
}

function checkName(){
  var username = document.getElementById("username").value;
  window.alert(username);
  if(username == null || username == "") return;
  window.alert("Passed empty return");
  var url = "check.php?username="+escape(username);
  window.alert(url);
  xhr.open("GET", url, true);
  xhr.onreadystatechange = updatePage;
  xhr.send(null);
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
