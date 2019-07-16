// ------------- Wedding Function -------------

// In this exercise, you job is to write a function that performs the task of announcing newlyweds after the wedding. The function should accept two arguments. Each argument should be the first and last name of two people. The function should then use the window.alert() method to announce the couple at their reception.

// 1. The name of the function should be announcement.
// 2. It should return a string matching the pattern below.
// 3. Store the return value in a variable.
// 3. To make the announcement, invoke window.alert()  and specify the return value of the function as the single argument.

// * Tip: If you don't remember how to use something, make sure you use Google to read some documentation instead of being naive and rely upon your memory.

// Here is an example message to be displayed:
// "Ladies and Gentlmen, please welcome the newlyweds James Tonkin and Melanie Reid!!"

const announcement = (name1, name2) => {
    const intro = `Ladies and Gentlemen, please welcome the newlyweds ${name1} and ${name2}!!`
    return intro;
};

const person1 = 'James Tonkin';
const person2 = 'Melanie Reid';

console.log(announcement(person1, person2));