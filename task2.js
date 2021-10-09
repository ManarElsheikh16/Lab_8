function focuss(){
    document.getElementById("username").style.border="5px solid red";
}

function blurr(){
   document.getElementById("username").style.border="1px solid black";
   if(document.getElementById("username").value===" "||document.getElementById("username").value.length()<3)
   {
       document.getElementById("sp2").innerHTML="Not valid".fontcolor("red").bold();
       document.getElementById("username").focus();
       document.getElementById("username").select();
   }
}

function checkk(){
    if(document.getElementById("passs").value!==document.getElementById("Rpasss").value){
        document.getElementById("sp1").innerHTML="password and repeat password should be the same".fontcolor("red").bold();
    }
}
