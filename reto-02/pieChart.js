import { gradesData } from "./Course/course.js";

let parsedSubjectName = JSON.parse(localStorage.getItem('SUBJECT_NAME'))

let parsedData = JSON.parse(gradesData)


let failSubject = 0, passSubject = 0, totalStudents = 0

const whoPass = () => {
    parsedData.forEach(student => {
        let valuesObject = Object.values(student) 

        for(let i in valuesObject) {
            let totalGrade = Object.values(valuesObject[i])
            //adding elements of the array
            let addingGrade = totalGrade.reduce((accumulator, currentValue) => accumulator + currentValue);

            if(addingGrade / totalGrade.length < 3) {
                failSubject += 1
            } else {
                passSubject += 1
            }
            totalStudents += 1
            /* console.log({passSubject, failSubject, totalStudents}); */
        }

    })
}

whoPass()

let passingPercentage = (passSubject / totalStudents) * 100
let failingPercentage = (failSubject / totalStudents) * 100

/* console.log(`Pasaron ${passingPercentage}`);
console.log(`Perdieron ${failingPercentage}`); */

window.onload = () => {

    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: `Students report "${parsedSubjectName}" subject`
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: passingPercentage, label: "Passed"},
                {y: failingPercentage, label: "Failed"},
            ]
        }]
    });
    chart.render();
}