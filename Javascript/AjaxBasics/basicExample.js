    // Create the request object
    var xhr = new XMLHttpRequest();
    // Create a callback function
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 ) {
        document.getElementById('ajax').innerHTML = xhr.responseText;
      }
    };
    // Open the request. In this case, getting infor from the file "sidebar.html"
    xhr.open('GET', 'sidebar.html');
    function sendAJAX(){
      // Send the request (when buttonis clicked)
      xhr.send();
      document.getElementById('load').style.display = "none";
    }