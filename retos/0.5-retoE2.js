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
        this.enrolledCourses = enrolledCourses || []
    }
    get courses() {
        return this.enrolledCourses
    }
    set courses(newCourse) {
        this.enrolledCourses.push(newCourse)
    }

    removeCourse(course) {
        this.enrolledCourses = this.enrolledCourses.filter(c => c !== course)
    }
}

//los profesores tienen id, nombre y una lista de cursos que dictan;
class Teacher extends Person {
    constructor(id, name, courses) {
        super(id, name)
        this.courses = courses || []
    }

    addCourse(newCourse) {
        this.courses.push(newCourse)
    }

    removeCourse(course) {
        this.courses = this.courses.filter(c => c !== course)
    }
}

//los cursos tienen un id, nombre, una lista de los estudiantes matriculados y el profesor que lo dicta.
class Course {
    constructor(id, name, totalStudents, teacher) {
        this.id = id
        this.name = name
        this.totalStudents = totalStudents || [];
        this.teacher = teacher
        if(teacher) {
            teacher.courses.push(this)
        }
    }
    get students() {
        return this.totalStudents
    }
    set students(student) {
        this.totalStudents.push(student)
    }

    removeStudent(student) {
        this.students = this.students.filter(e => e !== student)
    }

}

let e1 = new Student(111, 'Juan', [])
let e2 = new Student(112, 'Pepito', [])
//Teachers
let teacher1 = new Teacher(311, 'Pedro', [])
let teacher2 = new Teacher(312, 'Matias', [])
let teacher3 = new Teacher(313, 'Sara', [])
let teacher4 = new Teacher(314, 'Neithan', [])
let teacher5 = new Teacher(315, 'Anna', [])

//courses
let course1 = new Course(211, 'Poo', [], teacher1)
let course2 = new Course(212, 'Calculus', [], teacher2)
let course3 = new Course(213, 'Algebra', [], teacher3)
let course4 = new Course(214, 'Literature', [], teacher4)
let course5 = new Course(215, 'English', [], teacher5)

e1.courses = course1
e1.courses = course2

course1.students = e1
course1.students = e2
course2.students = e1

e1.courses = course1

console.log();


/* teacher1.addCourse(course1)

console.log(teacher1.courses); */