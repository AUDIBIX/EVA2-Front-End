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
    if (valor.length < 1) {
        elemento.style.backgroundColor = 'red'
        error.innerText = 'El campo debe contener al menos 1 caracter'
        return false
    }

    for (let caracter of valor) {
        if (!(/^[a-zA-Z]+$/.test(caracter))) {
            elemento.style.backgroundColor = 'red'
            error.innerText = 'El campo no debe contener caracteres especiales ni espacios'
            return false
        }
    }
    elemento.style.backgroundColor = 'green'
    error.innerText = ''
    return true
}

function validarEdad(elemento,valor,error) {
    if (valor<18||valor>99) {
        elemento.style.backgroundColor = 'red'
        error.innerText = 'La edad debe estar entre 18 y 99 años inclusive'
        return false
    }
    elemento.style.backgroundColor = 'green'
    error.innerText = ''
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
    personas = personas.filter((p, index)=> {
        if (indice == index) {
            return false
        } else {return true}
    })
    cargarTabla()
}

function actualizarFormulario(indice) {
    document.getElementById('nombre').value = personas[indice].nombre
    document.getElementById('edad').value = personas[indice].edad
    document.getElementById('btnActualizar').value = indice
}

function actualizar() {
    let eNombre = document.getElementById('nombre')
    let eEdad = document.getElementById('edad')
    let eBoton = document.getElementById('btnActualizar')
    let vNombre = eNombre.value
    let vEdad = eEdad.value
    let indice = eBoton.value
    let errorNombre = document.getElementById('errorNombre')
    let errorEdad = document.getElementById('errorEdad')
    let fNombre = validarNombre(eNombre,vNombre,errorNombre)
    let fEdad = validarEdad(eEdad,vEdad,errorEdad)
    if (!fNombre || !fEdad) {return false}
    personas = personas.map((persona,index) => {
        if (index == indice) {
            return {
                nombre : vNombre,
                edad : vEdad
            }
        } else return persona
    })
    cargarTabla()
}