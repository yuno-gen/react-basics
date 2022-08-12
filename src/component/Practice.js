//Typescript: Destructuring Array
//Basic Assignments
// let subjects = ["Data Structure", "Computer Networks", "Operating System"];
// let [first, second, third] = subjects;
// console.log(first);
// console.log(second);
// console.log(third);
//we used to assign array variables using index like below
/*let subjects = ["Data Structure", "Computer Networks", "Operating System"];
let first = subjects[0];
let second = subjects[1];
let third = subjects[2];
console.log(first);
console.log(second);
console.log(third);*/
//Destructuring also works with declared variables.
/*let first, second, third;
let subjects = ["Data Structure", "Computer Networks", "Operating System"];
[first, second, third] = subjects;
console.log(first);
console.log(second);
console.log(third);*/
//We can ignore element assignments in destructuring
let subjects = ["Data Structure", "Computer Networks", "Operating System"];
//Here we only get the first element
// let [first] = subjects;
// console.log(first)
//we will get only the first and second element.
// let [first, second] = subjects;
// console.log(first)
// console.log(second

// //We can ignore the middle element
let [first, ,third] = subjects;
console.log(first)
console.log(third)
//And even you can get third element only
/*let [, ,third] = subjects;
console.log(third)*/
//We can catch the rest of elements using ... and store it into a variable.
//It will be stored as array.
// let subjects = ["Data Structure", "Computer Networks", "Operating System"];
// let [first, ...rest] = subjects;
// console.log(first);
// console.log(rest);
// //One of useful technique of destructuring is to swap variable
// let student1 = "Naman";
// let student2 = "Dhayan";
// [student1, student2] = [student2, student1];
// console.log(student1);
// console.log(student2);

// //Destructuring can be used for array returned from function
// let FacultyName = "Gunjan Keswani";
// let [firstName, lastName] = FacultyName.split(" ");
// console.log(firstName);