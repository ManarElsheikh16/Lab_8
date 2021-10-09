function validd(e){
    if(document.getElementById("username").value!==" "&&document.getElementById("username").value.length()>3&&document.getElementById("passs").value===document.getElementById("Rpasss").value){
        e.target.submit();
    }
    else{
        e.preventDefault();
    }
}