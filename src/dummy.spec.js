import { validarClave } from "./motor.js";
import { 
    commonPasswords,
    mensajeErrorMayusMinus,
    mensajeErrorNumeros,
    mensajeErrorCaracteresEspeciales,
    mensajeErrorLongitudMinima,
    mensajeErrorNombreUsuario,
    mensajeErrorPalabrasComunes
} from "./motor.helper.js";

describe("dummy specs", () => {
    it("should pass spec", () => {
        // Arrange

        // Act

        // Assert
        expect(true).toBeTruthy();
    });
});

describe("validarClave", () => {
    it("Deberá devolver un objeto con esValida = true y error = null si la clave es válida", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "ClaveValida1!";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(true);
        expect(resultado.error).toBe(null);
    });
    it("Deberá devolver un objeto con esValida = false y un mensaje de error si la clave tiene palabras comunes", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "password";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe(mensajeErrorPalabrasComunes);
    });
    it("Deberá devolver un objeto con esValida = false y un mensaje de error si la clave no tiene mayusculas y minusculas", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "claveinvalida123-.";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe(mensajeErrorMayusMinus);
    });
    it("Deberá devolver un objeto con esValida = false y un mensaje de error si la clave no tiene números", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "Whhfbd--+";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe(mensajeErrorNumeros);
    });
    it("Deberá devolver un objeto con esValida = false y un mensaje de error si la clave no tiene longitud mínima de 8 caracteres", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "Dz1-";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe(mensajeErrorLongitudMinima);
    });
    it("Deberá devolver un objeto con esValida = false y un mensaje de error si la clave no tiene caracteres especiales", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "klave123";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe(mensajeErrorCaracteresEspeciales);
    });
    it("Deberá devolver un objeto con esValida = false y un mensaje de error si la clave contiene el nombre del usuario", () => {
        // Arrange
        const nombreUsuario = "usuario";
        const clave = "usuario123";

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe(mensajeErrorNombreUsuario);
    });
});