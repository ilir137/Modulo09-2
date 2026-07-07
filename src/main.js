import { validarClave } from "./motor.js";
import { commonPasswords } from "./motor.helper.js";
import { btnEnviar, inputClave, inputNombreUsuario } from "./modelo.js";

if (btnEnviar && btnEnviar instanceof HTMLButtonElement){
    btnEnviar.addEventListener("click", () => {
        console.log(validarClave(inputNombreUsuario.value, inputClave.value, commonPasswords));
    })
}
