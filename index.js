//Create a programme that organises students in specific classrooms according to their performances.

//Pseudo Code
//1. Input the name of the student and their average mark.
//2. Input the classroom name.
//3. Determine which student has higher marks than the other.
//4. Arrange them in that order putting an equal number of students in each classroom.
//5. Output a table with lists of each classroom and its students' respective students' names.
 
function organiseStudents(averageMark,name){
        if(averageMark >= 80){
            console.log(`${name} in AnitaB Lab.`)
        }
        else if(averageMark < 80 && mark > 60){
            console.log(`${name} in Lovelace Lab`)
        }
        else{
            console.log(`${name} in Ada Lab`)
        }
    }
organiseStudents(80,"Mikisa Priscilla");