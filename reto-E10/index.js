class Person {
    #age

    get #ageOperation() {
        return `${this.#age}`
    }
    

    set #ageOperation(newAge) {
        newAge < 20 || newAge > 60 ? 
        console.log(new Error('No puedes poner esa edad'))
        : this.age = newAge
    }

    constructor(age) {
        this.#ageOperation = age
    }

    getAge() {
        return this.#ageOperation
    }

    setAge(newAge) {
        this.#ageOperation = newAge
    }

}

let p = new Person(24)
p.setAge(40)


let objs = []

/* function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

getRandomNumber()

for(let i = 0; i <= 100; i++) {
    let randomNumber = getRandomNumber(20, 60)
    let newPerson = new Person(randomNumber)
    objs.push(newPerson.age)
}

console.log(objs.sort()); */