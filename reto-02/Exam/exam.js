class Exam {
    constructor(name, percentage, course, questions) {
        this.name = name,
        this.percentage = percentage,
        this.course = course,
        this.questions = [] || questions
    }

    set setQuestions(newQuestion) {
        return this.questions.push(newQuestion)
    }
}

export {Exam}