    import { test } from "./loadColumns.js";


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)  {
   
       let data = JSON.parse(this.responseText);
           test(data);
          

       }
   
   };
   xhttp.open("GET", "data.json", true);
   xhttp.send();