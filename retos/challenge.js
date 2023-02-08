class Car {
    constructor(color, model, price) {
        this.color = color
        this.model = model
        this.price = price
    }

    turnOn = () => {
        console.log('BRRRRRRRRRRR');
    }

    drive = () => {
        console.log('Driving');
    }
}

class Garage {
    constructor(car) {
        this.car = car
    }
    
    carValues = (arr) => {
        let price = 0

        arr.forEach(car => {
            price += car.price
        })

        console.log(price);
    }

}

//Object car
const car1 = new Car('blue', '1880', 7000)
const car2 = new Car('red', '2015', 20000)
const car3 = new Car('red', '2010', 10000)

//Arr cars
const arrCars = [car1, car2, car3]

//Garage Object
const garage = new Garage(arrCars)

//The garageValues method calculates all the values of the cars in it
garage.carValues(arrCars)


//Está prendido no lo puedo volver a prender
//metodo que modifique kilómetro depende de si está encendido o no

