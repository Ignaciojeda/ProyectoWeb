function validar(){
    
    var error=[];
    var confirmacion=0
    
    var nombre = document.getElementById('nombreUsuario').value
    if (nombre ==''){
        error.push('Nombre')
        confirmacion=1  
        

    }   
    
    var apellido = document.getElementById('appaterno').value
    if (apellido ==''){
        error.push('Apellido')
        confirmacion=1
        
    }
    
    var correo = document.getElementById('correoUsuario').value
    if (correo ==''){
        error.push('Correo')
        confirmacion=1
        
    }


    var nro = document.getElementById('nroTelefono').value
    if (nro ==''){
        error.push('Número de teléfono')
        confirmacion=1
        
    }

    var nro = document.getElementById('mensaje').value
    if (nro ==''){
        error.push('Mensaje')
        confirmacion=1
        
    }

    if (confirmacion==1){
        
        alert("Es necesario que rellene los siguentes campos: "+error.join(', '))
    }else{
        alert("asd")
    }
}