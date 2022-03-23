class Jugador {
    private _id: string;
    private _nombre: string;
    private _edad: number;
    private _paisProcedencia: string;
    private _historial: Historial;

    constructor(_id: string, nombre: string, edad: number, paisProcedencia: string) {
        this._id = _id;
        this._nombre = nombre;
        this._edad = edad;
        this._paisProcedencia = paisProcedencia;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    public get paisProcedencia(): string {
        return this._paisProcedencia;
    }
    public set paisProcedencia(value: string) {
        this._paisProcedencia = value;
    }
    public get historial(): Historial {
        return this._historial;
    }
    public set historial(value: Historial) {
        this._historial = value;
    }
}
class Equipo {

    private _id: string;
    private _nombre: string;
    private _fechaFundacion: Date;
    private _arrayJugadores: Array<Jugador>;

    constructor(id: string, nombre: string, fechaFundacion: Date) {
        this._id = id;
        this._nombre = nombre;
        this._fechaFundacion = fechaFundacion;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get fechaFundacion(): Date {
        return this._fechaFundacion;
    }
    public set fechaFundacion(value: Date) {
        this._fechaFundacion = value;
    }
    public get arrayJugadores(): Array<Jugador> {
        return this._arrayJugadores;
    }
    public set arrayJugadores(value: Array<Jugador>) {
        this._arrayJugadores = value;
    }
}

class Historial {

    private _id: string;
    private _numGolesMarcados: number;
    private _numTarjAmarillas: number;
    private _numTarjRojas: number;

    constructor(id: string, numGolesMarcados: number, numTarjAmarillas: number, numTarjRojas: number) {
        this._id = id;
        this._numGolesMarcados = numGolesMarcados;
        this._numTarjAmarillas = numTarjAmarillas;
        this._numTarjRojas = numTarjRojas;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get numGolesMarcados(): number {
        return this._numGolesMarcados;
    }
    public set numGolesMarcados(value: number) {
        this._numGolesMarcados = value;
    }
    public get numTarjAmarillas(): number {
        return this._numTarjAmarillas;
    }
    public set numTarjAmarillas(value: number) {
        this._numTarjAmarillas = value;
    }
    public get numTarjRojas(): number {
        return this._numTarjRojas;
    }
    public set numTarjRojas(value: number) {
        this._numTarjRojas = value;
    }

    public toString(): string {
        //Notese que como la vivibilidad del atributo nombre es "private", debemos de usar el 
        //método "get" para acceder a su valor. Idem con la edad. Podiamos haber declarado el 
        //nombre y la edad como "protected "y entonces podriamos acceder a el sin problema
        return `Id: ${this.id}, numGolesMarcados: ${this.numGolesMarcados}, numTarjAmarillas: ${this._numTarjAmarillas}, numTarjRojas: ${this._numTarjRojas}`;
    }
}

/* Programa */

// Equipo 1
console.log("Equipo 1, podemos ver como solo los dos primeros jugadores cuentan con historial");
let j11: Jugador = new Jugador("J011", "Pedro", 20, "España");
let j12 = new Jugador("J012", "Juan", 21, "España"); //Inferencia de tipos
let j13: Jugador = new Jugador("J013", "Antonio", 23, "España");
let j14 = new Jugador("J014", "Jaime", 22, "España"); //Inferencia de tipos

let h11: Historial = new Historial("H011", 3, 1, 0);
let h12 = new Historial("H012", 1, 0, 0); //Inferencia de tipos

j11.historial = h11; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente
j12.historial = h12;

let equipo1: Equipo = new Equipo("E001", "Heretics", new Date("2022-03-16"));
let array1: Array<Jugador> = new Array<Jugador>(j11, j12, j13, j14);
equipo1.arrayJugadores = array1; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente

console.log(equipo1); // No es el mejor formato para ver los datos pero es solo para comprobar que todo esta bien
console.log("Historial del jugador "+(equipo1.arrayJugadores[0].id));
console.log(equipo1.arrayJugadores[0].historial); 

// Equipo 2
console.log("Equipo 2, podemos ver como solo los dos primeros jugadores cuentan con historial");
let j21: Jugador = new Jugador("J021", "Diego", 22, "Argentina");
let j22 = new Jugador("J0222", "Jorge", 21, "España"); //Inferencia de tipos
let j23: Jugador = new Jugador("J023", "Jesus", 20, "España");
let j24 = new Jugador("J024", "Manolo", 21, "Argentina"); //Inferencia de tipos

let h21: Historial = new Historial("H021", 9, 1, 0);
let h22 = new Historial("H022", 2, 1, 0); //Inferencia de tipos

j21.historial = h21; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente
j22.historial = h22;

let equipo2: Equipo = new Equipo("E002", "Giants", new Date("2022-01-10"));
let array2: Array<Jugador> = new Array<Jugador>(j21, j22, j23, j24);
equipo2.arrayJugadores = array2; //En lugar de introducirlo en el constructor ya que no queda estetico lo introducimos como atributo directamente

console.log(equipo2); // No es el mejor formato para ver los datos pero es solo para comprobar que todo esta bien
console.log("Historial del jugador "+(equipo2.arrayJugadores[0].id));
console.log(equipo2.arrayJugadores[0].historial);
console.log("Historial del jugador "+(equipo2.arrayJugadores[0].id)+ " con mejor formato");
console.log(equipo2.arrayJugadores[0].historial.toString()); //Mejor formato