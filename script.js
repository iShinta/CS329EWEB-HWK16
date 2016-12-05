var xhr;
    if (window.ActiveXObject) {
        xhr = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest ();
    }
    alert("XHR created");
}

function checkName(){
  var username = document.getElementById("username").value;
  alert(username);
  if(username == null || username == "") return;
  alert("Passed empty return");
  var url = "check.php?username="+escape(username);
  alert(url);
  xhr.open("GET", url, true);
  xhr.onreadystatechange = updatePage;
  xhr.send(null);
}

function updatePage() {
  alert("updatePage");
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          alert("xhr passed");
            var response = xhr.responseText;
            alert(response);
            if(response == "true") window.alert("Username already taken.");
        }
    }
}
