const person = {
    name: 'Andrew Chalkley',
    role: 'JavaScript Teacher'
}

// Function name is "logateacher" and it takes what is in the parens
function logTeacher(teacher) {
    console.log(`${teacher.name} - ${teacher.role}`);
}
// Person object is passed into the "logTeacher" function, and is named "teacher" within the function scope (above)
logTeacher(person);