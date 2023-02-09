/* Desarrollaremos una aplicación para gestionar el proceso de matrícula y cancelación de materias. En este problema tenemos varios roles: los estudiantes tienen id, nombre, y una lista de cursos matriculados; los profesores tienen id, nombre y una lista de cursos que dictan; los cursos tienen un id, nombre, una lista de los estudiantes matriculados y el profesor que lo dicta.

En esta aplicación se podrán crear cursos, estudiantes y profesores. Adicionalmente, los estudiantes podrán matricular y cancelar cursos. Cuando se crea un curso, se debe definir el profesor que lo dicta.

--> qué clases deben implementar? cuáles son sus atributos? de qué tipo de datos?

--> instancien varios objetos de cada clase para que puedan probar */

class Person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

//los estudiantes tienen id, nombre, y una lista de cursos matriculados
class Student extends Person {
    constructor(id, name, enrolledCourses) {
        super(id, name)

        if(enrolledCourses) {
            //set only lets you store unique values in case the array enrolledCourses contains same courses
            enrolledCourses = [...new Set(enrolledCourses)]

            enrolledCourses.forEach(course => {
                if(!course.totalStudents.includes(this)) {
                    course.totalStudents.push(this)
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
            console.error('El estudiante ya está matriculado en este curso')
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
            console.error('El estudiante no está matriculado en este curso')
        }
    }
}

//los profesores tienen id, nombre y una lista de cursos que dictan;
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
            console.error('El profesor ya tiene asignado este curso')
        } else {
            if(newCourse.teacher !== undefined) {
                console.error('Ya hay un profesor con el curso asignado');
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
            return 'El profesor no tiene asignado este curso'
        }
    }
}

//los cursos tienen un id, nombre, una lista de los estudiantes matriculados y el profesor que lo dicta.
//-------------------------------------------------------------------------------------------------------
//Cuando se crea un curso, se debe definir el profesor que lo dicta.
class Course {
    constructor(id, name, teacher, totalStudents) {

        try {
            if (!teacher) {
                throw new Error('Debes definir un profesor que dicte el curso')
            }
            //checking for repeated items in the totalStudents variable
            if(totalStudents) {
                totalStudents = [...new Set(totalStudents)]
            }
            this.id = id
            this.name = name
            this.totalStudents = totalStudents || [];
            this.teacher = teacher
    
            if (teacher) return teacher.courses.push(this)

        } catch(err) {
            console.log(err);
        }
    }
    get students() {
        return this.totalStudents
    }
    set students(student) {
        if(this.totalStudents.find(e => e === student)) {
            console.error('El estudiante ya está matriculado en este curso')
            return
        } else {
            this.totalStudents.push(student)
        }
    }

    set removeStudent(student) {
        
        if(!this.totalStudents.find(e => e === student)) {
            console.error('Este estudiante no está matriculado en el curso')
            return
        } else {
            this.totalStudents = this.students.filter(e => e !== student)
            student.removeCourse = this
        }
    }

}

//Teachers
let teacher1 = new Teacher(311, 'Pedro', [])
let teacher2 = new Teacher(312, 'Matias', [])
let teacher3 = new Teacher(313, 'Sara', [])
let teacher4 = new Teacher(314, 'Neithan', [])
let teacher5 = new Teacher(315, 'Anna', [])

//courses
let course1 = new Course(211, 'Poo', teacher1)
let course2 = new Course(212, 'Calculus', teacher2, [],)
let course3 = new Course(213, 'Algebra', teacher1, [],)
let course4 = new Course(214, 'Literature', teacher1, [],)
let course5 = new Course(215, 'English', teacher5, [],)


let e1 = new Student(111, 'Juan', [course2, course4, course2, course2, course2,course2])
/* let e2 = new Student(112, 'Pepito', [course1, course4, course3, course5])
console.log(course4.students); */

/* console.log(course2.students);
console.log(e1.courses);

e1.removeCourse = course3

console.log(course2.students);
console.log(e1.courses); */