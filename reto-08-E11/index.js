// Crear una clase Person que tiene un atributo phone_dict. Este atributo es un diccionario de teléfonos asociados a la persona. Tenga en cuenta:

let regex = /^\d+$/; // regular expression that matches only digits

class Person {
    constructor() {
        this.phone_dict = {}
    }

    setnumber(id, newNumber) {
        try {
            if(newNumber.length < 7 || newNumber.length > 10) {
                throw new Error('El número debe ser de entre 7 y 10 dígitos')
            } else {
                if(regex.test(newNumber.toString())) {
                    // Cada número tendrá asociada una etiqueta como "oficina" o "casa".
                    this.phone_dict[id] = newNumber 
        
                } else {
                    console.log('Sólo se pueden ingresar números enteros');
                }
            }
        } catch(err) {
            throw new Error(err)
        }
    }

    deleteNumber(id, number) {
        if(Object.keys(this.phone_dict) == id && Object.values(this.phone_dict) == number.toString()) {
            let newPhoneDict = {...this.phone_dict}

            let phoneDictKeys = Object.values(newPhoneDict)


            phoneDictKeys = phoneDictKeys.filter(elem => !elem === number)


            newPhoneDict[id] = phoneDictKeys

            if(newPhoneDict[id].length === 0) {
                newPhoneDict[id] = {}
            }


            this.phone_dict = newPhoneDict

        } else {
            console.log('Falso');
        }
       /*  console.log(Object.keys(this.phone_dict), Object.values(this.phone_dict)); */
    }

    modifyNumber(id, number) {
        this.phone_dict[id] = number
    }

    modifyTag(currentTag, newTag) {
        if(this.phone_dict.hasOwnProperty(currentTag)) {
            const value = this.phone_dict[currentTag]
            this.phone_dict[newTag] = value
            delete this.phone_dict[currentTag]
        } else {
            console.log(`El tag ${currentTag} no fue encontrado`);
        }
    }
    
    get getNumbers() {
        console.log(this.phone_dict)
    }
}

let p1 = new Person()

p1.setnumber('Oficina1', 1234567)
p1.setnumber('Casa1', 3409878)

p1.modifyNumber('Oficina1', 4567894)

p1.modifyTag('Oficina1','Hola')

console.log(p1.phone_dict);





// Una persona puede tener tantos números de teléfono como quiera.
// Los números de teléfono serán strings de entre 7 y 10 dígitos.
// Este número sólo podrá contener caracteres numéricos.
// Cree un método para agregar números nuevos
// Cree un método para eliminar un número de teléfono
// Cree un método para modificar ya sea la etiqueta de un número de teléfono o un número de teléfono
// Cree un método para imprimir todos los números de teléfono de una persona