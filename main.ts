
/* Skapar class Person med namn adress och telefonnummer. Skapar en metod för att skriva ut all info. */
class Person {
    namn: string;
    adress: string;
    telNummer: string;

    constructor(namn: string, adress: string, telNummer: string){
        this.namn = namn;
        this.adress = adress;
        this.telNummer = telNummer;
    }
    skrivUt(){
        return `Namn: ${this.namn}\nAdress: ${this.adress}\nTelefonnummer: ${this.telNummer}`;
    }

}

/* Använder extend när jag skapar nya klassen Student så den ärver allting från Person. Skapar de nya egenskaperna klass och program
super() gör så att Student får tag på egenskaperna i Person och kan använda sig av dem istället för att behöva skriva dem igen.
Detta fungerar även i super.skrivUt()*/
class Student extends Person {
    klass: string;
    program: string;

    constructor (namn: string, adress: string, telNummer: string, klass: string, program: string){
        super(namn, adress, telNummer);
        this.klass = klass;
        this.program = program;
    }
    skrivUt(){
        return `${super.skrivUt()} \nKlass: ${this.klass} \nProgram: ${this.program}`;
    }
}

//Samma som i Student
class Lärare extends Person{
    ämne: string;
    kurs: string;

    constructor (namn: string, adress: string, telNummer: string, ämne: string, kurs: string){
        super(namn, adress, telNummer);
        this.ämne = ämne;
        this.kurs = kurs;
    }
    skrivUt(){
        return `${super.skrivUt()} \nÄmne: ${this.ämne} \nKurs: ${this.kurs}`;
    }
}

//Skapar en person, en student och en lärare och skriver ut infon.
let person1 = new Person("Linn Janson", "Vägnamn 123, 12345 Stad", "1234567890");
console.log(person1.skrivUt());

let student1 = new Student("Linn Janson", "Vägnamn 123, 12345 Stad", "1234567890", "WU26", "Webbutvecklare");
console.log(student1.skrivUt());

let lärare1 = new Lärare("Namn Efternamn", "Vägnamn 123, 12345 Stad", "1234567890",  "Matte", "Division");
console.log(lärare1.skrivUt());