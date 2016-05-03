function Search() {
        var keyword = document.getElementById("keyword").value; 
        var url = "http://https://www.google.co.in/"+keyword; 
        window.location = url; 
        return false;
      }