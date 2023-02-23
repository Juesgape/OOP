//los cursos tienen un id, nombre, una lista de los estudiantes matriculados y el profesor que lo dicta.
//-------------------------------------------------------------------------------------------------------
//Cuando se crea un curso, se debe definir el profesor que lo dicta.

let gradesData

const checkForID = (grades, studentID, exam, grade) => {
    let found = false;
    grades.forEach(elem => {
        if (Object.keys(elem).toString() === studentID.toString()) {
        elem[studentID][exam] = grade;
        found = true;
        }
    });
    return found;
} 

const isCourseOver = (exam) => {
    let countingFinished = 0
    let courseFinished = false

    exam.forEach(elem => {
        if(elem.finished === true) {
            countingFinished += 1
        }
    })

    if(countingFinished === exam.length) {
        courseFinished = true
        return courseFinished
    } else {
        return false
    }
}

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
            this.grades = []
    
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

    exam(newExam) {
        this.exams.push(newExam)
    }

    setGrades(courseExamName, courseExam) {

        this.totalStudents.forEach(student => {
            let randomGrade = Math.random() * 5

            let found = checkForID(this.grades, student.id, `Exam ${courseExamName}`, randomGrade);
            if (!found) {
                let elementToPush = {
                    [student.id]: {
                        [`Exam ${courseExamName}`]: randomGrade
                    }
                };
            this.grades.push(elementToPush);
            }
        })
        //function that sets the exam to be finished
        courseExam.finished = true
        
        let CourseStatus = isCourseOver(this.exams)

        if(CourseStatus === true) {
            gradesData = this.grades
            localStorage.setItem('GRADES_V1', JSON.stringify(gradesData))
            localStorage.setItem('SUBJECT_NAME', JSON.stringify(this.name))
            localStorage.setItem('STUDENTS_INFO', JSON.stringify(this.grades))
        }
        gradesData = localStorage.getItem('GRADES_V1')
    }
}

export {Course} 
export {gradesData}