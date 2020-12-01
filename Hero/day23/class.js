// Class 

class Student {
    constructor(sid, sName) {
        this.id = sid;
        this.name = sName;
        this.school = "mist";
    }
}

const std = new Student(201914046, "Faisal");
const std1 = new Student();
console.log(std);
console.log(std1);



// inheritance 

class Father {
    constructor() {
        this.fatherName = "Insar Ali";
    }
}

class Child extends Father {
    constructor(name) {
        super();
        this.childName = name;
    }
    getFullName(FName) {
        this.name = FName;
    }
}

const child = new Child("faisal");
console.log(child);

const father = new Father();
console.log(father);