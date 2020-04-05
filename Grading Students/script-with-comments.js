//Testcase: [73, 67, 38, 33]
//Result: [75, 67, 40, 33]

function gradingStudents(grades) {
    //create empty array where the results will be stored.
    let result = [];
    //create loop to iterate through all of the grades.
    for (let i=0; i<grades.length; i++) {
        //create variable called rounding that rounds the integer, using Math.ceil(), by dividing grades[i] with 5, and then multiplying the rounded grade by 5 to get the multiple of 5.
        let rounding = Math.ceil(grades[i]/5)*5
        //create if statement that checks following conditions:
        //if grade is below 38, which means the student has failed, hence the grade won't be chaged and it will get pushed to result array.
        if (grades[i]<38) {
            result.push(grades[i])
        //if the difference between the grade and the multiple is less than 3, in which case the grade will get rounded up to next multiple of 5 and pushed to result array.
        } else if((rounding - grades[i])<3) {
            result.push(Math.ceil(grades[i]/5)*5)
        //if student has passed the exam, however his grade wasn't high enough to get rounded, the original grade will get pushed to result array.
        } else {
            result.push(grades[i])
        }
    }
    console.log(result)
} 

gradingStudents([73, 67, 38, 33])
