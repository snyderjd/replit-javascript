// Your job in this exercise is to pass multiple arguments of different types to a function, and then use those three separate pieces of data to construct a string.You will define a function that will define the following three parameters.

// Object representing an instructor
// Object representing a student
// A string name of an exercise

// The function should extract the instructor's name from the first object, and the student's name from the second object.It should also use the third parameter to build the final string.Here's what the return value of the function should look like.

// "Nathan Gonzalez assigned the Solar System exercise to Mo Silvera"

// The function should only return that string, and nothing else.It should be a pure function.

// The return value should be stored in a variable, and then pass that variable to the console.log() method to output in.The sample code gives you some initial objects to work with.You be as creative as you want for your exercise names.

const zoe = {
    instructor: true,
    student: false,
    firstName: "Zoe",
    lastName: "Ames"
}

const nathan = {
    instructor: true,
    student: false,
    firstName: "Nathan",
    lastName: "Gonzalez"
}

const mo = {
    instructor: false,
    student: true,
    firstName: "Mo",
    lastName: "Silvera"
}

const lissa = {
    instructor: false,
    student: true,
    firstName: "Lissa",
    lastName: "Goforth"
}

const assignExercise = (instructor, student, exercise) => {
    let assignment = `${instructor.firstName} ${instructor.lastName} assigned the ${exercise} exercise to ${student.firstName} ${student.lastName}.`;

    return assignment;
};

const result1 = assignExercise(nathan, lissa, 'Math');
const result2 = assignExercise(zoe, mo, 'History');

// console.log(result1);
// console.log(result2);