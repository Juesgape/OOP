//los profesores tienen id, nombre y una lista de cursos que dictan;
import { Person } from "../Person/person.js"
import { Exam } from "../Exam/exam.js"

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

    setExam(name, percentage, course, questions) {
        try {
            if(!course) {
                throw new Error('Debes especificar un curso')
            } else if (!(percentage > 0 && percentage <= 100)) {
                throw new Error(`El porcentaje ingresado del exámen "${name}" no es váido`)
            } else {
                const exam = new Exam(name, percentage, course, questions)

                if(course.teacher === this) {
                    exam.setQuestions(questions)
                    course.exam(exam)
                } else {
                    console.error(`El profesor ${this.name} no tiene asignado el curso ${course.name}`)
                }

            }
        } catch(err) {
            console.log(err);
        }

    }

    evaluateExam(course, examName) {
        let courseExam = course.exams.find(elem => elem.name === examName)

        if(courseExam?.name === examName) {
            course.setGrades(courseExam.name, courseExam)
        } else {
            throw new Error('No se pudo encontrar el curso')
        }
    }
}

export {Teacher}