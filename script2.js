//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
personas = []

function validar() {
    let eNombre = document.getElementById('nombre')
    let eEdad = document.getElementById('edad')
    let vNombre = eNombre.value
    let vEdad = eEdad.value
    let errorNombre = document.getElementById('errorNombre')
    let errorEdad = document.getElementById('errorEdad')
    let fNombre = validarNombre(eNombre,vNombre,errorNombre)
    let fEdad = validarEdad(eEdad,vEdad,errorEdad)
    if (fNombre && fEdad) {
        let persona = {
            nombre : vNombre,
            edad : parseInt(vEdad)
        }
        personas.push(persona)
    }
    cargarTabla(personas)
}

function validarNombre(elemento,valor,error) {
    return true
}

function validarEdad(elemento,valor,error) {
    return true
}

function cargarTabla() {
    let eTabla = document.getElementById('cuerpoTabla')

    let tablaPersonas = personas.map((persona, index) => {
        persona = '<tr><td>'+persona.nombre+
        '</td><td>'+persona.edad+
        '</td><td><button type="button" onclick="actualizarFormulario('+index+')" id="btnFormulario">Actualizar</button>'+
        '<button type="button" onclick="eliminar('+index+')">Eliminar</button></td></tr>'
        return persona
    })
    strPersonas = tablaPersonas.join('')
    eTabla.innerHTML = strPersonas
}

function eliminar(indice) {
    let p = personas.filter((persona, index)=>{
        if (index == indice) {
            return 
        } else return persona
    })
    cargarTabla()
}