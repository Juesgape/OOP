import { Person } from "../Person/person.js"
//los estudiantes tienen id, nombre, y una lista de cursos matriculados
class Student extends Person {
    constructor(id, name, enrolledCourses) {
        super(id, name)

        if(enrolledCourses) {
            //set only lets you store unique values in case the array enrolledCourses contains same courses
            enrolledCourses = [...new Set(enrolledCourses)]

            enrolledCourses.forEach(course => {
                if(!course.totalStudents.includes(this)) {
                    course.students = this
                } 
            })
        }
        //assign enrolledCourses without repeated values
        this.enrolledCourses = enrolledCourses || []

    }
    get courses() {
        return this.enrolledCourses
    }
    set courses(newCourse) {
        if(this.courses.find(course => course === newCourse)) {
            console.error(`El estudiante ya está matriculado en el curso ${newCourse.name}` )
            return
        } else {
            this.enrolledCourses.push(newCourse)
            newCourse.students = this
        }
    }

    set removeCourse(course) {

        if(this.enrolledCourses.find(findCourse => findCourse === course)) {
            this.enrolledCourses = this.enrolledCourses.filter(c => c !== course)
            course.totalStudents = course.totalStudents.filter(student => student !== this)

            return

        } else {
            console.error(`El estudiante no está matriculado en este curso ${course.name}`)
        }
    }
}

export {Student}