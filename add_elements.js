//course form functions

//set min course start date to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("course-start").setAttribute("min", today);

//set min course end date to start date
function setMinEndDate() {
    var minEndDate = document.getElementById("course-start").value;
    console.log("asdfsd");

    document.getElementById("course-end").setAttribute("min", minEndDate);

};

document.getElementById("course-start").addEventListener("change", setMinEndDate);


//alert if form was created or if fields were missing base on validate method
document.getElementById("course-button").addEventListener("click", function () {
    if (validateCourseForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Course created successfully!")
    }
});


//check if form is valid
function validateCourseForm() {
    var title = document.getElementById("course-title").value;
    var stream = document.getElementById("stream").value;
    var type = document.getElementById("course-type").value;
    var start = document.getElementById("course-start").value;
    var end = document.getElementById("course-end").value;
    if ((title == "" || title == null) ||
        (stream == "" || stream == null) || (type == "" || type == null) ||
        (start == "" || start == null) || (end == "" || end == null)) {        
        return false;
    } else {
        return true;
    }
};

// student form functions

//alert if form was created or if fields were missing base on validate method
document.getElementById("student-button").addEventListener("click", function () {
    if (validateStudentForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Student created successfully!")
    }
});


//check if form is valid
function validateStudentForm() {
    var first = document.getElementById("first-name").value;
    var last = document.getElementById("last-name").value;
    var birth = document.getElementById("birth-date").value;
    var tuition = document.getElementById("tuition-fees").value;
    if ((first == "" || first == null) || (last == "" || last == null)
        || (birth == "" || birth == null) || (tuition == "" || tuition == null)) {        
        return false;
    } else {
        return true;
    }
};

// trainer form functions

//alert if form was created or if fields were missing base on validate method
document.getElementById("trainer-button").addEventListener("click", function () {
    if (validateTrainerForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Trainer created successfully!")
    }
});


//check if form is valid
function validateTrainerForm() {
    var first = document.getElementById("trainer-first-name").value;
    var last = document.getElementById("trainer-last-name").value;
    var subject = document.getElementById("subject").value;    
    if ((first == "" || first == null) || (last == "" || last == null)
        || (subject == "" || subject == null)) {        
        return false;
    } else {
        return true;
    }
};

// assignment form functions

//alert if form was created or if fields were missing base on validate method
document.getElementById("assignment-button").addEventListener("click", function () {
    if (validateAssignmentForm() == false) {
        alert("Something is missing, please fill out all the necessary fields.");
    } else {
        alert("Assignment created successfully!")
    }
});


//check if form is valid
function validateAssignmentForm() {
    var title = document.getElementById("assignment-title").value;
    var descr = document.getElementById("description").value;
    var sub = document.getElementById("sub-date").value;
    var mark = document.getElementById("total-mark").value;
    if ((title == "" || title == null) || (descr == "" || descr == null)
        || (sub == "" || sub == null) || (mark == "" || mark == null)) {        
        return false;
    } else {
        return true;
    }
};






