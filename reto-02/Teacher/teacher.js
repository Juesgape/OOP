//los profesores tienen id, nombre y una lista de cursos que dictan;
import { Person } from "../Person/person.js"

class Teacher extends Person {
    constructor(id, name) {
        super(id, name)
        this.courses = []
    }

    get totalCourses() {
        return this.courses
    }

    set addCourse(newCourse) {
        if(this.courses.find(elem => elem === newCourse)) {
            console.error(`El profesor ${this.name} ya tiene asignado el curso de ${newCourse.name}`)
        } else {
            if(newCourse.teacher !== this) {
                console.error(`Ya hay un profesor con el curso ${newCourse.name} asignado y se llama ${this.name}`);
            } else {
                this.courses.push(newCourse)
                newCourse.teacher = this
            }
        }
    }

    set removeCourse(course) {

        if(this.courses.find(elem => elem === course)) {
            course.teacher = undefined
            this.courses = this.courses.filter(c => c !== course) 
        } else {
            return `El profesor no tiene asignado el curso de ${course.name}` 
        }
    }
}

export {Teacher}