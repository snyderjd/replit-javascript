// Your assignment is to create 2 functions.

// ------------ Student Name Generator ------------

// Define a function named fullName whose job is to generate a string that has a person's first, middle, and last name. Each part of the name will be its own parameter.

// The value of the student variable must be "Michael Henry Ramirez".

// Generate the following 5 students using that function.

// Michael Henry Ramirez
// Johnathon James Killibrew
// Sarah Jane Johnson
// Annabelle Ruth Tanner
// Pauline Emelie Lemonson

// Use console.log() to output each name.

const fullName = (first, middle, last) => {
    let student = `${first} ${middle} ${last}`;
    return student;
};

console.log(fullName('Michael', 'Henry', 'Ramirez'));
console.log(fullName('Johnathon', 'James', 'Killibrew'));
console.log(fullName('Sarah', 'Jane', 'Johnson'));
console.log(fullName('Annabelle', 'Ruth', 'Tanner'));
console.log(fullName('Pauline', 'Emelie', 'Lemonson'));

// ------------- Student Object Generator -------------

// Define a function named createStudent whose job is to generate a new object that represents a student.The object must have the firstName, lastName, and middleName properties.

// const nancy = createStudent("Nancy", "Anne", "Drew")

// The value of nancy must be the following.

// {
    // firstName: "Nancy",
        // middleName: "Anne",
            // lastName: "Drew"
// }

// Generate an object to represent the following 5 students using that function.

// Yvonne Kate Ostrander
// James Richard Donner
// Kevin Pyle Bacon
// Mary Lynn Smoot
// Abigail Beth Green

// Use console.log() to output each object.

const createStudent = (first, middle, last) => {
    let student = {
        firstName: '',
        middleName: '',
        lastName: ''
    }

    student.firstName = first;
    student.middleName = middle;
    student.lastName = last;

    return student;
};

console.log(createStudent('Yvonne', 'Kate', 'Ostrander'));
console.log(createStudent('James', 'Richard', 'Donner'));
console.log(createStudent('Kevin', 'Pyle', 'Bacon'));
console.log(createStudent('Mary', 'Lynn', 'Smoot'));
console.log(createStudent('Abigail', 'Beth', 'Green'));

