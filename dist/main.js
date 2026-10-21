"use strict";
class Person {
    namn;
    adress;
    telNummer;
    constructor(namn, adress, telNummer) {
        this.namn = namn;
        this.adress = adress;
        this.telNummer = telNummer;
    }
    skrivUt() {
        return `Namn: ${this.namn}\nAdress: ${this.adress}\nTelefonnummer: ${this.telNummer}`;
    }
}
class Student extends Person {
    klass;
    program;
    constructor(namn, adress, telNummer, klass, program) {
        super(namn, adress, telNummer);
        this.klass = klass;
        this.program = program;
    }
    skrivUt() {
        return `${super.skrivUt()} \nKlass: ${this.klass} \nProgram: ${this.program}`;
    }
}
class Lärare extends Person {
    ämne;
    kurs;
    constructor(namn, adress, telNummer, ämne, kurs) {
        super(namn, adress, telNummer);
        this.ämne = ämne;
        this.kurs = kurs;
    }
    skrivUt() {
        return `${super.skrivUt()} \nÄmne: ${this.ämne} \nKurs: ${this.kurs}`;
    }
}
let person1 = new Person("Linn Janson", "Vägnamn 123, 12345 Stad", "1234567890");
console.log(person1.skrivUt());
let student1 = new Student("Linn Janson", "Vägnamn 123, 12345 Stad", "1234567890", "WU26", "Webbutvecklare");
console.log(student1.skrivUt());
let lärare1 = new Lärare("Namn Efternamn", "Vägnamn 123, 12345 Stad", "1234567890", "Matte", "Division");
console.log(lärare1.skrivUt());
