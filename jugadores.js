class Jugador {
    constructor(_id, nombre, edad, paisProcedencia) {
        this._id = _id;
        this._nombre = nombre;
        this._edad = edad;
        this._paisProcedencia = paisProcedencia;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get paisProcedencia() {
        return this._paisProcedencia;
    }
    set paisProcedencia(value) {
        this._paisProcedencia = value;
    }
    get historial() {
        return this._historial;
    }
    set historial(value) {
        this._historial = value;
    }
}
class Equipo {
    constructor(id, nombre, fechaFundacion) {
        this._id = id;
        this._nombre = nombre;
        this._fechaFundacion = fechaFundacion;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get fechaFundacion() {
        return this._fechaFundacion;
    }
    set fechaFundacion(value) {
        this._fechaFundacion = value;
    }
    get arrayJugadores() {
        return this._arrayJugadores;
    }
    set arrayJugadores(value) {
        this._arrayJugadores = value;
    }
}
class Historial {
    constructor(id, numGolesMarcados, numTarjAmarillas, numTarjRojas) {
        this._id = id;
        this._numGolesMarcados = numGolesMarcados;
        this._numTarjAmarillas = numTarjAmarillas;
        this._numTarjRojas = numTarjRojas;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get numGolesMarcados() {
        return this._numGolesMarcados;
    }
    set numGolesMarcados(value) {
        this._numGolesMarcados = value;
    }
    get numTarjAmarillas() {
        return this._numTarjAmarillas;
    }
    set numTarjAmarillas(value) {
        this._numTarjAmarillas = value;
    }
    get numTarjRojas() {
        return this._numTarjRojas;
    }
    set numTarjRojas(value) {
        this._numTarjRojas = value;
    }
    toString() {
        //Notese que como la vivibilidad del atributo nombre es "private", debemos de usar el 
        //método "get" para acceder a su valor. Idem con la edad. Podiamos haber declarado el 
        //nombre y la edad como "protected "y entonces podriamos acceder a el sin problema
        return `Id: ${this.id}, numGolesMarcados: ${this.numGolesMarcados}, numTarjAmarillas: ${this._numTarjAmarillas}, numTarjRojas: ${this._numTarjRojas}`;
    }
}
/* Programa */
// Equipo 1
console.log("Equipo 1, podemos ver como solo los dos primeros jugadores cuentan con historial");
let j11 = new Jugador("J011", "Pedro", 20, "España");
let j12 = new Jugador("J012", "Juan", 21, "España"); //Inferencia de tipos
let j13 = new Jugador("J013", "Antonio", 23, "España");
let j14 = new Jugador("J014", "Jaime", 22, "España"); //Inferencia de tipos
let h11 = new Historial("H011", 3, 1, 0);
let h12 = new Historial("H012", 1, 0, 0); //Inferencia de tipos
j11.historial = h11; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente
j12.historial = h12;
let equipo1 = new Equipo("E001", "Heretics", new Date("2022-03-16"));
let array1 = new Array(j11, j12, j13, j14);
equipo1.arrayJugadores = array1; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente
console.log(equipo1); // No es el mejor formato para ver los datos pero es solo para comprobar que todo esta bien
console.log("Historial del jugador " + (equipo1.arrayJugadores[0].id));
console.log(equipo1.arrayJugadores[0].historial);
// Equipo 2
console.log("Equipo 2, podemos ver como solo los dos primeros jugadores cuentan con historial");
let j21 = new Jugador("J021", "Diego", 22, "Argentina");
let j22 = new Jugador("J0222", "Jorge", 21, "España"); //Inferencia de tipos
let j23 = new Jugador("J023", "Jesus", 20, "España");
let j24 = new Jugador("J024", "Manolo", 21, "Argentina"); //Inferencia de tipos
let h21 = new Historial("H021", 9, 1, 0);
let h22 = new Historial("H022", 2, 1, 0); //Inferencia de tipos
j21.historial = h21; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente
j22.historial = h22;
let equipo2 = new Equipo("E002", "Giants", new Date("2022-01-10"));
let array2 = new Array(j21, j22, j23, j24);
equipo2.arrayJugadores = array2; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente
console.log(equipo2); // No es el mejor formato para ver los datos pero es solo para comprobar que todo esta bien
console.log("Historial del jugador " + (equipo2.arrayJugadores[0].id));
console.log(equipo2.arrayJugadores[0].historial);
console.log("Historial del jugador " + (equipo2.arrayJugadores[0].id) + " con mejor formato");
console.log(equipo2.arrayJugadores[0].historial.toString()); //Mejor formato
