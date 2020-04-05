function gradingStudents(grades) {
    let result = [];
    for (let i=0; i<grades.length; i++) {
        let rounding = Math.ceil(grades[i]/5)*5
        if (grades[i]<38) {
            result.push(grades[i])
        } else if((rounding - grades[i])<3) {
            result.push(Math.ceil(grades[i]/5)*5)
        } else {
            result.push(grades[i])
        }
    }
    console.log(result)
} 
