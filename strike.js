
var modal = document.getElementById("myModal");




var span = document.getElementsByClassName("close")[0];


let isStrike=true

    span.addEventListener("click",function() {
       if(isStrike)
       {
        modal.style.textDecoration="line-through";
       }
       else{
        modal.style.textDecoration="none"
       }
       isStrike =!isStrike
      })
