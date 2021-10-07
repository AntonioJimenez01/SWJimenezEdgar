function login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
    window.location="users.html"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
    window.location="users.html"; 
    } 
    if (usuario=="" && password=="") { 
    window.location="errorpopup.html"; 
    } 
    } 
            </script> 
    </center> 
    <script language="Javascript"> 
    <!-- Begin 
    document.oncontextmenu = function(){return false} 
    // End --> 
    