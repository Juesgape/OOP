const ctx = document.getElementById('myChart');
const chartContainer = document.getElementById('charts-container')

let studentsInfo = JSON.parse(localStorage.getItem('STUDENTS_INFO'))
console.log(studentsInfo);

const createChart = (context, title, studentsEntries) => {
    new Chart(context, {
        type: 'bar',
        data: {
            labels: [`${studentsEntries[0][0]}`, `${studentsEntries[1][0]}`, `${studentsEntries[2][0]}`],
            datasets: [{
                label: `${title}`,
                data: [`${studentsEntries[0][1]}`, `${studentsEntries[1][1]}`, `${studentsEntries[2][1]}`],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
        }
    });
}

studentsInfo.forEach(student => {
    let div = document.createElement('div')
    let canvas = document.createElement('canvas')
    let title = `Student ${Object.keys(student)} performance`

    let studentValues = Object.values(student)
    let studentEntries = Object.entries(studentValues[0])

    console.log(studentEntries);
    
    canvas.setAttribute('id', Object.keys(student))

    let ctx = canvas.getContext('2d')

    chartContainer.appendChild(div)
    div.appendChild(canvas)

    createChart(ctx, title, studentEntries)
})