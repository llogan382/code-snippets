// A Callback is a function executed at some point in the future,
// Usually after a user action or a period of time


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