language=JavaScript> 
function go(){

if (document.form.password.value=='password' && document.form.login.value=='usuario'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
} 