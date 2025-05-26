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
            edad : vEdad
        }
        let personas = personas.push(persona)
    }
    cargarTabla()
}

function validarNombre() {
    return true
}

function validarEdad() {
    return true
}

function cargarTabla() {
    let eTabla = document.getElementById('cuerpoTabla')

    let strPersonas = personas.map((persona, index) => {
        '<tr><td>'+persona.nombre+
        '</td><td>'+persona.edad+
        '</td><td><button type="button" onclick="actualizarFormulario('+index+')" id="btnFormulario"></button>'+
        '<button type="button" onclick="eliminar('+index+')"></button></td></tr>'
    })
    strPersonas = strPersonas.join('')
    eTabla.innerHTML(strPersonas)
}

function actualizarFormulario(indice) {

}
