//GRADE DE NOTAS COM ARREDONDAMENTO

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {

        if (grades[i] >= 38) {
            let dif = (5 - (grades[i] % 5)); 
            let arr = (grades[i] + dif);

           
        if (dif < 3) {
            grades[i] = arr; 
        }
        }
    }
    return grades; 
}

console.log(gradingStudents(grades));
