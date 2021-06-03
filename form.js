//Nombramos la función



function valida_envia(){

    //Definimos los caracteres permitidos en una dirección de correo electrónico
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    
    //Validamos un campo o área de texto, por ejemplo el campo nombre
    if (document.form.nombre.value.length==0){
    alert("Tiene que escribir su nombre")
    document.form.nombre.focus()
    return 0;
    }
    
    //Validamos un campo o área de texto, por ejemplo el campo apellidos
    if (document.form.apellidos.value.length==0){
    alert("Tiene que escribir sus apellidos")
    document.form.apellidos.focus()
    return 0;
    }
    
    //Validamos un campo o área de texto, por ejemplo el campo dirección
    if (document.form.direccion.value.length==0){
    alert("Tiene que escribir su dirección")
    document.form.direccion.focus()
    return 0;
    }
    
    //Validamos un campo o área de texto, por ejemplo el campo localidad
    if (document.form.localidad.value.length==0){
    alert("Tiene que escribir su localidad")
    document.form.localidad.focus()
    return 0;
    }
    
    //Validamos un campo de lista/menú, por ejemplo el campo municipio
    if (document.form.municipio.selectedIndex==0){
    alert("Tiene que seleccionar su Municipio")
    document.form.municipio.focus()
    return 0;
    }
    
    //Validamos un campo de texto como numérico, por ejemplo el campo código postal de 5 dígitos
    valor = document.form.cp.value;
    if( !(/^\d{5}$/.test(valor)) ) {
    alert("Tiene que escribir su código postal (5 dígitos)");
    document.form.cp.focus();
    return 0;
    }
    
    //Validamos un campo de texto como numérico, por ejemplo el campo teléfono de 9 dígitos
    valor = document.form.telefono.value;
    if( !(/^\d{9}$/.test(valor)) ) {
    alert("Tiene que escribir un teléfono de 9 dígitos");
    document.form.telefono.focus();
    return 0;
    }
    
    //Validamos un campo de texto como email
    if ((regexp.test(document.form.email.value) == 0) || (document.form.email.value.length = 0)){
    alert("Introduzca una dirección de email válida");
    document.form.email.focus();
    return 0;
    } else {
    var c_email=true;
    }
    
    //Validamos un campo de tipo checkbox, por ejemplo condiciones
    if (document.form.condiciones.checked==0){
    alert("Debe aceptar las condiciones")
    document.form.condiciones.focus()
    return 0;
    }
    
    //Si todos los campos han validado correctamente, se envía el formulario
    document.form.submit();
    }
    