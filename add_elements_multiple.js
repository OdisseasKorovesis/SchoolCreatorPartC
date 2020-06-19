

//course-student form

//alert if form was created or if fields were missing base on validate method
document.getElementById("course-student-button").addEventListener("click", function () {
    if (validateCourseStudentForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Student(s) added successfully!")
    }
});


//check if form is valid
function validateCourseStudentForm() {
    var course1 = document.getElementById("courses1").value;
    var student = document.getElementById("students").value;     
    if ((course1 == "" || course1 == null) || (student == "" || student == null)) {        
        return false;
    } else {
        return true;
    }
};

//course-trainer form

//alert if form was created or if fields were missing base on validate method
document.getElementById("course-trainer-button").addEventListener("click", function () {
    if (validateCourseTrainerForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Trainer(s) added successfully!")
    }
});


//check if form is valid
function validateCourseTrainerForm() {
    var course2 = document.getElementById("courses2").value;
    var trainer = document.getElementById("trainers").value;     
    if ((course2 == "" || course2 == null) || (trainer == "" || trainer == null)) {        
        return false;
    } else {
        return true;
    }
};

//course-assignment form

//alert if form was created or if fields were missing base on validate method
document.getElementById("course-assignment-button").addEventListener("click", function () {
    if (validateCourseAssignmentForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Assignment(s) added successfully!")
    }
});


//check if form is valid
function validateCourseAssignmentForm() {
    var course3 = document.getElementById("courses3").value;
    var assignments = document.getElementById("assignments").value;     
    if ((course3 == "" || course3 == null) || (assignments == "" || assignments == null)) {        
        return false;
    } else {
        return true;
    }
};

//assignmentPerCoursePerStudent function
window.onload = function () {
    document.getElementById("courses-per").addEventListener("change", function () {
        var val = document.getElementById("courses-per").value;
        if (val == "java") {
            document.getElementById("students-per").innerHTML = "<option value='odi-kd'>Odisseas Korovesis</option><option value='anastasia-kou'>Anastasia Kounoupi</option>";
            document.getElementById("assignments-per").innerHTML = "<option value='classes'>Play With Classes</option><option value='methods'>Play With Methods</option>";
        } else if (val == "c#") {            
            document.getElementById("students-per").innerHTML = "<option value='tina-da'>Tina Danon</option><option value='dimitris-ko'>Dimitris Korovesis</option>";
            document.getElementById("assignments-per").innerHTML = "<option value='inheritance'>Play With Inheritance</option><option value='primitives'>Play With Primitives</option>";
        } else if (val == "html") {            
            document.getElementById("students-per").innerHTML = "<option value='konna-sin'>Konstantina Sinevrioti</option><option value='konn-oik'>Konstantinos Oikonomidis</option>";
            document.getElementById("assignments-per").innerHTML = "<option value='interfaces'>Play With Interfaces</option><option value='exceptions'>Play With Exceptions</option>";
        } else if (val == "javascript") {            
            document.getElementById("students-per").innerHTML = "<option value='alk-bag'>Alkistis Bageri</option><option value='lucia-bi'>Lucia Binioli</option>";
            document.getElementById("assignments-per").innerHTML = "<option value='appearance'>Play With Appearance</option><option value='widgets'>Play With Widgets</option>";
        }        
    });
}

