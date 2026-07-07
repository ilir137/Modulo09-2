import { 
    validacionClave,
    mensajeErrorMayusMinus,
    mensajeErrorNumeros,
    mensajeErrorCaracteresEspeciales,
    mensajeErrorLongitudMinima,
    mensajeErrorNombreUsuario,
    mensajeErrorPalabrasComunes
} from "./motor.helper.js"

export function validarClave(nombreUsuario, clave, commonPasswords){
    var tipoError = "";
    if (
        claveTieneMayusculasMinusculas(clave) &&
        claveTieneNumeros(clave) &&
        claveTieneCaracteresEspeciales(clave) &&
        claveTieneLongitudMinima(clave) &&
        !claveTieneNombreUsuario(clave, nombreUsuario) &&
        !claveTienePalabraComun(clave, commonPasswords)
    ) {
        validacionClave.esValida = true;
    } else {
        if(!claveTieneMayusculasMinusculas(clave)){
            tipoError = mensajeErrorMayusMinus;
        } else if (!claveTieneNumeros(clave)){
            tipoError = mensajeErrorNumeros;
        } else if (!claveTieneCaracteresEspeciales(clave)){
            tipoError = mensajeErrorCaracteresEspeciales;
        } else if (!claveTieneLongitudMinima(clave)){
            tipoError = mensajeErrorLongitudMinima;
        } else if (claveTieneNombreUsuario(clave, nombreUsuario)){
            tipoError = mensajeErrorNombreUsuario;
        } else if (claveTienePalabraComun(clave, commonPasswords)){
            tipoError = mensajeErrorPalabrasComunes;
        }
        validacionClave.esValida = false;
        validacionClave.error = tipoError;
    }
    return validacionClave
}

const claveTieneMayusculasMinusculas = (clave) => {
    const tieneMayuscula = /\p{Lu}/u.test(clave);
    const tieneMinuscula = /\p{Ll}/u.test(clave);
    if (tieneMayuscula && tieneMinuscula){
        return true;
    } else {
        return false;
    }
};

const claveTieneNumeros = (clave) => {
    if (/\d/.test(clave)){
        return true;
    } else return false;
}

const claveTieneCaracteresEspeciales = (clave) => {
    if (/[^\p{L}\p{N}]/u.test(clave)){
        return true;
    } else return false;
}


const claveTieneLongitudMinima = (clave) => {
    if (clave.length >= 8){
        return true;
    } else return false;
}

const claveTieneNombreUsuario = (clave, nombreUsuario) => {
    // console.log(clave.includes(nombreUsuario));
    if (clave.includes(nombreUsuario) === true){
        return true;
    } else return false;
}
const claveTienePalabraComun = (clave, commonPasswords) => {
    const contieneAlguna = commonPasswords.some(palabra => clave.includes(palabra));
    if(contieneAlguna){
        return true;
    } else return false;
}