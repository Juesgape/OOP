/* Desarrollaremos una aplicación para gestionar el proceso de matrícula y cancelación de materias. En este problema tenemos varios roles: los estudiantes tienen id, nombre, y una lista de cursos matriculados; los profesores tienen id, nombre y una lista de cursos que dictan; los cursos tienen un id, nombre, una lista de los estudiantes matriculados y el profesor que lo dicta.

En esta aplicación se podrán crear cursos, estudiantes y profesores. Adicionalmente, los estudiantes podrán matricular y cancelar cursos. Cuando se crea un curso, se debe definir el profesor que lo dicta.

--> qué clases deben implementar? cuáles son sus atributos? de qué tipo de datos?

--> instancien varios objetos de cada clase para que puedan probar */

import { Student } from "./Student/student.js"
import { Teacher } from "./Teacher/teacher.js"
import { Course } from "./Course/course.js"

//Teachers
let teacher1 = new Teacher(311, 'Pedro')
let teacher2 = new Teacher(312, 'Matias')
let teacher3 = new Teacher(313, 'Sara')
let teacher4 = new Teacher(314, 'Neithan')
let teacher5 = new Teacher(315, 'Anna')


//courses
let course1 = new Course(211, 'Poo', teacher1)
let course2 = new Course(212, 'Calculus', teacher2, [])
let course3 = new Course(213, 'Algebra', teacher1, [])
let course4 = new Course(214, 'Literature', teacher1, [])
let course5 = new Course(215, 'English', teacher5, [])



/* let e1 = new Student(111, 'Juan', [course2, course4, course2, course2, course2,course2]) */
let e2 = new Student(112, 'Pepito', [course1, course4, course3, course5])

console.log(e2);

/* console.log(course2.students);
console.log(e1.courses);

e1.removeCourse = course3

console.log(course2.students);
console.log(e1.courses); */