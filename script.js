var xhr;
    if (window.ActiveXObject) {
        xhr = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest ();
    }
} 

function checkName(){
  var username = document.getElementById("username").value;
  if(username == null || username == "") return;

  var url = "check.php?username="+escape(username);

  xhr.open("GET", url, true);
  xhr.onreadystatechange = updatePage;
  xhr.send(null);
}

function updatePage() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            if(response == "true") window.alert("Username already taken.");
        }
    }
}
