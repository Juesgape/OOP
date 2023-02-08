/* class Car {
    constructor(
        color, 
        model, 
        price, 
        km
        ) 
        
        {
            this.color = color
            this.model = model
            this.price = price
            this.price = km
        }
        turnOn = () => {
            console.log('Brrrrrrrrrrr')
        }

        drive = () => {
            
        }    
}

const c1 = new Car('red', '1990', 7000, 0)

c1.turnOn() */

//Pack-man logic

class ObjectGame {
    constructor(x, y, type) {
        this.x = x
        this.y = y
        this.type = type
    }
}

class MovableObject extends ObjectGame{
    constructor(x, y, type) {
        super(x, y, type)
    }

    moveTo = (x, y) => {
        this.x = x
        this.y = y
    }
}

// Static objects
class Dots extends ObjectGame{
    constructor(x, y) {
        super(x, y, 'dot')
    }
}

class block extends ObjectGame {
    constructor(x, y) {
        super(x, y, 'block')
    }
}


//Movable objects
class PackMan extends MovableObject {
    constructor(x, y, lives) {

        super(x, y, 'pack-man')

        this.lives = lives
    }
    
    livesCountDown = (lives) => {
        this.lives = lives--;
    }
}

class Ghost extends MovableObject {
    constructor(x, y) {
        super(x, y, 'ghost')
    }
}



