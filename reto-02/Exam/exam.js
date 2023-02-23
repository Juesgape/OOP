class Exam {
    constructor(name, percentage, course, questions) {
        this.name = name,
        this.percentage = percentage,
        this.course = course,
        this.questions = [] || questions
        this.finished = false
    }

    setQuestions(newQuestion) {
        return this.questions.push(newQuestion)
    }
}

export {Exam}