/* Desarrollaremos una aplicación para gestionar el proceso de matrícula y cancelación de materias. En este problema tenemos varios roles: los estudiantes tienen id, nombre, y una lista de cursos matriculados; los profesores tienen id, nombre y una lista de cursos que dictan; los cursos tienen un id, nombre, una lista de los estudiantes matriculados y el profesor que lo dicta.

En esta aplicación se podrán crear cursos, estudiantes y profesores. Adicionalmente, los estudiantes podrán matricular y cancelar cursos. Cuando se crea un curso, se debe definir el profesor que lo dicta.

--> qué clases deben implementar? cuáles son sus atributos? de qué tipo de datos?

--> instancien varios objetos de cada clase para que puedan probar */

//RETO 5 - E8

//Cree la lógica para evaluar un parcial. En esta funcionalidad el profesor evaluará un curso con uno de los parciales previamente definido y se le asignará una nota de manera aleatoria a cada uno de los estudiantes del curso.
//Cada curso tendrá un registro de notas con base en los parciales que se le hayan definido. Para esto, usarán un diccionario con la siguiente estructura

// {id_estudiante_1:{"parcial_1": nota_1, "parcial_2: nota_2"}...}

import { Student } from "./Student/student.js"
import { Teacher } from "./Teacher/teacher.js"
import { Course } from "./Course/course.js"
import { Exam } from "./Exam/exam.js"

//Teachers
let teacher1 = new Teacher(311, 'Pedro')
let teacher2 = new Teacher(312, 'Matias')
let teacher3 = new Teacher(313, 'Sara')
let teacher4 = new Teacher(314, 'Neithan')
let teacher5 = new Teacher(315, 'Anna')


//courses
let course1 = new Course(211, 'Poo', teacher1)
let course2 = new Course(212, 'Calculus', teacher2)
let course3 = new Course(213, 'Algebra', teacher1)
let course4 = new Course(214, 'Literature', teacher1)
let course5 = new Course(215, 'English', teacher5)



let e1 = new Student(111, 'Juan', [course5, course4, course2, course2, course2,course2])
let e2 = new Student(112, 'Pepito', [course1, course4, course3, course5])
let e3 = new Student(113, 'Maria', [course5, course4, course2, course2, course2,course2])
let e4 = new Student(114, 'Neithan', [course1, course4, course3, course5])
let e5 = new Student(115, 'Phol', [course5, course4, course2, course2, course2,course2])
let e6 = new Student(116, 'Esteban', [course1, course4, course3, course5])
let e7 = new Student(117, 'Daniela', [course5, course4, course2, course2, course2,course2])
let e8 = new Student(118, 'Mars', [course1, course4, course3, course5])
let e9 = new Student(119, 'Angelina', [course5, course4, course2, course2, course2,course2])
let e10 = new Student(120, 'Santiago', [course1, course4, course3, course5])


//This should throw an error when the percentage is too odd
teacher5.setExam('To be verb', 100, course5, [{question: '¿To be === estar?', question: 'Hola ha ha'}])
teacher5.setExam('Continuos present', 30, course5, [{question: 'Choose the right sentence', question: 'Imma go to the restroom'}])

teacher5.setExam('Past participle', 50, course5, [{question: 'Has been Mauro going to the hospital?', question: 'Has Mauro, cheated on his friends with her lover'}])

teacher1.setExam('La vida de Aquiles', 30, course4, {question: '¿Quién fue Aquiles?', answer: false})

//this should throw an error
/* teacher5.setExam('Test', 10, course1, [{question: 'blah blah', question: 'he he he'}]) */

//testing the logic of the programm

//HACER QUE LOS NOMBRES QUEDEN IGUAL SE ESCRIBA COMO SE ESCRIBA!

teacher5.evaluateExam(course5, 'To be verb')
teacher5.evaluateExam(course5, 'Continuos present')
teacher5.evaluateExam(course5, 'Past participle')

/* teacher1.evaluateExam(course4, 'La vida de Aquiles') */

/* console.log(course5.exams) */


/* console.log(course5); */
/* teacher5.evaluateExam(course5, 'To be verb')
teacher5.evaluateExam(course5, 'To be verb') */

/* console.log(course5.grades); */
//teacher5.evaluateExam(course5, 'To be verb')

/* console.log(course5.exams); */

//finding the studentID
/* const blah = Object.keys(course5.grades[0])

console.log(blah);

//finding the name of the exam
/* const idk = Object.values(course5.grades[0])
console.log(Object.keys(idk[0])) */

/* console.log(course5.grades); */




/* console.log(course5.exam); */

/* console.log(course2.students);
console.log(e1.courses);

e1.removeCourse = course3

console.log(course2.students);
console.log(e1.courses); */