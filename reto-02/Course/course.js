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
            this.exams = []
    
            if (teacher) return teacher.addCourse = this

        } catch(err) {
            console.log(err);
        }
    }
    get students() {
        if(this.totalStudents.length < 0) {
            return `El curso ${this.name} no tiene estudiantes matriculados`
        } else {
            return this.totalStudents
        }
    }
    set students(student) {
        if(this.totalStudents.find(e => e === student)) {
            console.error(`El estudiante ${student} ya está matriculado en el curso ${this.name}`)
            return
        } else {
            this.totalStudents.push(student)
        }
    }

    set removeStudent(student) {
        
        if(!this.totalStudents.find(e => e === student)) {
            console.error(`El estudiante ${student.name} no está matriculado en el de ${this.name}`)
            return
        } else {
            this.totalStudents = this.students.filter(e => e !== student)
            student.removeCourse = this
        }
    }

    get exam() {
        return this.exams
    }

    set exam(newExam) {
        this.exams.push(newExam)
    }

}

export {Course}