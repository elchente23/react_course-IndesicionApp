class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I'm ${this.name}!.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name = 'Anonymous', age = 0, major) {
        super(name, age);

        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);

        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I'm from ${this.homeLocation}`;
        }

        return greeting;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }
}

const me = new Person('Mike', 15);
console.log(me);

const other = new Person();
console.log(other);

const student = new Student();
console.log(student.hasMajor());
console.log(student.getDescription());

const otherstudent = new Student('Mike', 15, 'Computer Science');
console.log(otherstudent.hasMajor());
console.log(otherstudent.getDescription());

const traveler = new Traveler('Jen', 20, 'México');
console.log(traveler.getGreeting());