//student checkbox function

document.getElementById("courses1").addEventListener("change", function () {
    var val = document.getElementById("courses1").value;
    if (val == "java") {
        document.getElementById("student-checkbox").innerHTML = "<input type='checkbox' id='student1' name='student1' value='odi-kd' checked>" +
            "<label for='student1'>Odisseas Korovesis</label><br>" +
            "<input type='checkbox' id='student2' name='student2' value='anastasia-kou' checked> " +
            "<label for='student2'>Anastasia Kounoupi</label><br>" +
            "<input type='checkbox' id='student3' name='student3' value='tina-da'>" +
            "<label for='student3'>Tina Danon</label><br> " +
            "<input type='checkbox' id='student4' name='student4' value='dimitris-ko'>" +
            "<label for='student4'>Dimitris Korovesis</label><br>" +
            "<input type='checkbox' id='student5' name='student5' value='konna-sin'>" +
            "<label for='student5'>Konstantina Sinevrioti</label><br>" +
            "<input type='checkbox' id='student6' name='student6' value='konn-oik'>" +
            "<label for='student6'>Konstantinos Oikonomidis</label><br>" +
            "<input type='checkbox' id='student7' name='student7' value='alk-bag'>" +
            "<label for='student7'>Alkistis Bageri</label><br>" +
            "<input type='checkbox' id='student8' name='student8' value='lucia-bi'>" +
            "<label for='student8'>Lucia Binioli</label><br>";

    } else if (val == "c#") {
        document.getElementById("student-checkbox").innerHTML = "<input type='checkbox' id='student1' name='student1' value='odi-kd'>" +
            "<label for='student1'>Odisseas Korovesis</label><br>" +
            "<input type='checkbox' id='student2' name='student2' value='anastasia-kou'> " +
            "<label for='student2'>Anastasia Kounoupi</label><br>" +
            "<input type='checkbox' id='student3' name='student3' value='tina-da' checked>" +
            "<label for='student3'>Tina Danon</label><br> " +
            "<input type='checkbox' id='student4' name='student4' value='dimitris-ko' checked>" +
            "<label for='student4'>Dimitris Korovesis</label><br>" +
            "<input type='checkbox' id='student5' name='student5' value='konna-sin'>" +
            "<label for='student5'>Konstantina Sinevrioti</label><br>" +
            "<input type='checkbox' id='student6' name='student6' value='konn-oik'>" +
            "<label for='student6'>Konstantinos Oikonomidis</label><br>" +
            "<input type='checkbox' id='student7' name='student7' value='alk-bag'>" +
            "<label for='student7'>Alkistis Bageri</label><br>" +
            "<input type='checkbox' id='student8' name='student8' value='lucia-bi'>" +
            "<label for='student8'>Lucia Binioli</label><br>";
    } else if (val == "html") {
        document.getElementById("student-checkbox").innerHTML = "<input type='checkbox' id='student1' name='student1' value='odi-kd'>" +
            "<label for='student1'>Odisseas Korovesis</label><br>" +
            "<input type='checkbox' id='student2' name='student2' value='anastasia-kou'> " +
            "<label for='student2'>Anastasia Kounoupi</label><br>" +
            "<input type='checkbox' id='student3' name='student3' value='tina-da'>" +
            "<label for='student3'>Tina Danon</label><br> " +
            "<input type='checkbox' id='student4' name='student4' value='dimitris-ko'>" +
            "<label for='student4'>Dimitris Korovesis</label><br>" +
            "<input type='checkbox' id='student5' name='student5' value='konna-sin'checked>" +
            "<label for='student5'>Konstantina Sinevrioti</label><br>" +
            "<input type='checkbox' id='student6' name='student6' value='konn-oik'checked>" +
            "<label for='student6'>Konstantinos Oikonomidis</label><br>" +
            "<input type='checkbox' id='student7' name='student7' value='alk-bag'>" +
            "<label for='student7'>Alkistis Bageri</label><br>" +
            "<input type='checkbox' id='student8' name='student8' value='lucia-bi'>" +
            "<label for='student8'>Lucia Binioli</label><br>";
    } else if (val == "javascript") {
        document.getElementById("student-checkbox").innerHTML = "<input type='checkbox' id='student1' name='student1' value='odi-kd'>" +
            "<label for='student1'>Odisseas Korovesis</label><br>" +
            "<input type='checkbox' id='student2' name='student2' value='anastasia-kou'> " +
            "<label for='student2'>Anastasia Kounoupi</label><br>" +
            "<input type='checkbox' id='student3' name='student3' value='tina-da'>" +
            "<label for='student3'>Tina Danon</label><br> " +
            "<input type='checkbox' id='student4' name='student4' value='dimitris-ko'>" +
            "<label for='student4'>Dimitris Korovesis</label><br>" +
            "<input type='checkbox' id='student5' name='student5' value='konna-sin'>" +
            "<label for='student5'>Konstantina Sinevrioti</label><br>" +
            "<input type='checkbox' id='student6' name='student6' value='konn-oik'>" +
            "<label for='student6'>Konstantinos Oikonomidis</label><br>" +
            "<input type='checkbox' id='student7' name='student7' value='alk-bag'checked>" +
            "<label for='student7'>Alkistis Bageri</label><br>" +
            "<input type='checkbox' id='student8' name='student8' value='lucia-bi'checked>" +
            "<label for='student8'>Lucia Binioli</label><br>";
    }
});


//student checkbox function

document.getElementById("courses2").addEventListener("change", function () {
    var val = document.getElementById("courses2").value;
    if (val == "java") {
        document.getElementById("trainer-checkbox").innerHTML = "<input type='checkbox' id='trainer1' name='trainer1' value='giorgos-p' checked>" +
            "<label for='trainer1'>Giorgos Papadakis</label><br>" +
            "<input type='checkbox' id='trainer2' name='trainer2' value='iasonas-m'>" +
            "<label for='trainer2'>Iasonas Michalopoulos</label><br>" +
            "<input type='checkbox' id='trainer3' name='trainer3' value='maria-p'>" +
            "<label for='trainer3'>Maria Panagiotidou</label><br>" +
            "<input type='checkbox' id='trainer4' name='trainer4' value='ismini-a'>" +
            "<label for='trainer4'>Ismini Aleksiadou</label><br>";


    } else if (val == "c#") {
        document.getElementById("trainer-checkbox").innerHTML = "<input type='checkbox' id='trainer1' name='trainer1' value='giorgos-p'>" +
            "<label for='trainer1'>Giorgos Papadakis</label><br>" +
            "<input type='checkbox' id='trainer2' name='trainer2' value='iasonas-m' checked>" +
            "<label for='trainer2'>Iasonas Michalopoulos</label><br>" +
            "<input type='checkbox' id='trainer3' name='trainer3' value='maria-p'>" +
            "<label for='trainer3'>Maria Panagiotidou</label><br>" +
            "<input type='checkbox' id='trainer4' name='trainer4' value='ismini-a'>" +
            "<label for='trainer4'>Ismini Aleksiadou</label><br>";
    } else if (val == "html") {
        document.getElementById("trainer-checkbox").innerHTML = "<input type='checkbox' id='trainer1' name='trainer1' value='giorgos-p' >" +
            "<label for='trainer1'>Giorgos Papadakis</label><br>" +
            "<input type='checkbox' id='trainer2' name='trainer2' value='iasonas-m'>" +
            "<label for='trainer2'>Iasonas Michalopoulos</label><br>" +
            "<input type='checkbox' id='trainer3' name='trainer3' value='maria-p' checked>" +
            "<label for='trainer3'>Maria Panagiotidou</label><br>" +
            "<input type='checkbox' id='trainer4' name='trainer4' value='ismini-a'>" +
            "<label for='trainer4'>Ismini Aleksiadou</label><br>";
    } else if (val == "javascript") {
        document.getElementById("trainer-checkbox").innerHTML = "<input type='checkbox' id='trainer1' name='trainer1' value='giorgos-p'>" +
            "<label for='trainer1'>Giorgos Papadakis</label><br>" +
            "<input type='checkbox' id='trainer2' name='trainer2' value='iasonas-m'>" +
            "<label for='trainer2'>Iasonas Michalopoulos</label><br>" +
            "<input type='checkbox' id='trainer3' name='trainer3' value='maria-p'>" +
            "<label for='trainer3'>Maria Panagiotidou</label><br>" +
            "<input type='checkbox' id='trainer4' name='trainer4' value='ismini-a' checked>" +
            "<label for='trainer4'>Ismini Aleksiadou</label><br>";
    }
});


//assignment checkbox function

document.getElementById("courses3").addEventListener("change", function () {
    var val = document.getElementById("courses3").value;
    if (val == "java") {
        document.getElementById("assignment-checkbox").innerHTML = "<input type='checkbox' id='assignment1' name='assignment1' value='classes' checked>" +
            "<label for='assignment1'>Play With Classes</label><br>" +
            "<input type='checkbox' id='assignment2' name='assignment2' value='methods' checked>" +
            "<label for='assignment2'>Play With Methods</label><br>" +
            "<input type='checkbox' id='assignment3' name='assignment3' value='inheritance'>" +
            "<label for='assignment3'>Play With Inheritance</label><br>" +
            "<input type='checkbox' id='assignment4' name='assignment4' value='primitives'>" +
            "<label for='assignment4'>Play With Primitives</label><br>" +
            "<input type='checkbox' id='assignment5' name='assignment5' value='interfaces'>" +
            "<label for='assignment5'>Play With Interfaces</label><br>" +
            "<input type='checkbox' id='assignment6' name='assignment6' value='exceptions'>" +
            "<label for='assignment6'>Play With Exceptions</label><br>" +
            "<input type='checkbox' id='assignment7' name='assignment7' value='appearance'>" +
            "<label for='assignment7'>Play With Appearance</label><br>" +
            "<input type='checkbox' id='assignment8' name='assignment8' value='appearance'>" +
            "<label for='assignment8'>Play With Widgets</label><br>";
    } else if (val == "c#") {
        document.getElementById("assignment-checkbox").innerHTML = "<input type='checkbox' id='assignment1' name='assignment1' value='classes' >" +
            "<label for='assignment1'>Play With Classes</label><br>" +
            "<input type='checkbox' id='assignment2' name='assignment2' value='methods' >" +
            "<label for='assignment2'>Play With Methods</label><br>" +
            "<input type='checkbox' id='assignment3' name='assignment3' value='inheritance' checked>" +
            "<label for='assignment3'>Play With Inheritance</label><br>" +
            "<input type='checkbox' id='assignment4' name='assignment4' value='primitives' checked>" +
            "<label for='assignment4'>Play With Primitives</label><br>" +
            "<input type='checkbox' id='assignment5' name='assignment5' value='interfaces'>" +
            "<label for='assignment5'>Play With Interfaces</label><br>" +
            "<input type='checkbox' id='assignment6' name='assignment6' value='exceptions'>" +
            "<label for='assignment6'>Play With Exceptions</label><br>" +
            "<input type='checkbox' id='assignment7' name='assignment7' value='appearance'>" +
            "<label for='assignment7'>Play With Appearance</label><br>" +
            "<input type='checkbox' id='assignment8' name='assignment8' value='appearance'>" +
            "<label for='assignment8'>Play With Widgets</label><br>";
    } else if (val == "html") {
        document.getElementById("assignment-checkbox").innerHTML = "<input type='checkbox' id='assignment1' name='assignment1' value='classes' >" +
            "<label for='assignment1'>Play With Classes</label><br>" +
            "<input type='checkbox' id='assignment2' name='assignment2' value='methods' >" +
            "<label for='assignment2'>Play With Methods</label><br>" +
            "<input type='checkbox' id='assignment3' name='assignment3' value='inheritance'>" +
            "<label for='assignment3'>Play With Inheritance</label><br>" +
            "<input type='checkbox' id='assignment4' name='assignment4' value='primitives'>" +
            "<label for='assignment4'>Play With Primitives</label><br>" +
            "<input type='checkbox' id='assignment5' name='assignment5' value='interfaces' checked>" +
            "<label for='assignment5'>Play With Interfaces</label><br>" +
            "<input type='checkbox' id='assignment6' name='assignment6' value='exceptions' checked>" +
            "<label for='assignment6'>Play With Exceptions</label><br>" +
            "<input type='checkbox' id='assignment7' name='assignment7' value='appearance'>" +
            "<label for='assignment7'>Play With Appearance</label><br>" +
            "<input type='checkbox' id='assignment8' name='assignment8' value='appearance'>" +
            "<label for='assignment8'>Play With Widgets</label><br>";
    } else if (val == "javascript") {
        document.getElementById("assignment-checkbox").innerHTML = "<input type='checkbox' id='assignment1' name='assignment1' value='classes' >" +
            "<label for='assignment1'>Play With Classes</label><br>" +
            "<input type='checkbox' id='assignment2' name='assignment2' value='methods' >" +
            "<label for='assignment2'>Play With Methods</label><br>" +
            "<input type='checkbox' id='assignment3' name='assignment3' value='inheritance'>" +
            "<label for='assignment3'>Play With Inheritance</label><br>" +
            "<input type='checkbox' id='assignment4' name='assignment4' value='primitives'>" +
            "<label for='assignment4'>Play With Primitives</label><br>" +
            "<input type='checkbox' id='assignment5' name='assignment5' value='interfaces'>" +
            "<label for='assignment5'>Play With Interfaces</label><br>" +
            "<input type='checkbox' id='assignment6' name='assignment6' value='exceptions'>" +
            "<label for='assignment6'>Play With Exceptions</label><br>" +
            "<input type='checkbox' id='assignment7' name='assignment7' value='appearance' checked>" +
            "<label for='assignment7'>Play With Appearance</label><br>" +
            "<input type='checkbox' id='assignment8' name='assignment8' value='appearance' checked>" +
            "<label for='assignment8'>Play With Widgets</label><br>";
    }
});


//assignment per course per student function

document.getElementById("courses-per").addEventListener("change", function () {
    var val = document.getElementById("courses-per").value;
    if (val == "java") {
        document.getElementById("students-per").innerHTML = "<option value='odi-kd'>Odisseas Korovesis</option><option value='anastasia-kou'>Anastasia Kounoupi</option>";
        document.getElementById("students-per").addEventListener("change", function () {
            var student_val = document.getElementById("students-per").value;
            if (student_val == "odi-kd") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment1' name='assignment1' value='classes'checked >" +
                    "<label for='assignment1'>Play With Classes</label><br>" +
                    "<input type='checkbox' id='assignment2' name='assignment2' value='methods' checked>" +
                    "<label for='assignment2'>Play With Methods</label><br>";
            } else if (student_val == "anastasia-kou") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment1' name='assignment1' value='classes'checked >" +
                    "<label for='assignment1'>Play With Classes</label><br>" +
                    "<input type='checkbox' id='assignment2' name='assignment2' value='methods' checked>" +
                    "<label for='assignment2'>Play With Methods</label><br>";
            }
        })


    } else if (val == "c#") {
        document.getElementById("students-per").innerHTML = "<option value='tina-da'>Tina Danon</option><option value='dimitris-ko'>Dimitris Korovesis</option>";
        document.getElementById("students-per").addEventListener("change", function () {
            var student_val = document.getElementById("students-per").value;
            if (student_val == "tina-da") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment3' name='assignment3' value='inheritance' checked>" +
                    "<label for='assignment3'>Play With Inheritance</label><br>" +
                    "<input type='checkbox' id='assignment4' name='assignment4' value='primitives' checked>" +
                    "<label for='assignment4'>Play With Primitives</label><br>";
            } else if (student_val == "dimitris-ko") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment3' name='assignment3' value='inheritance' checked>" +
                    "<label for='assignment3'>Play With Inheritance</label><br>" +
                    "<input type='checkbox' id='assignment4' name='assignment4' value='primitives' checked>" +
                    "<label for='assignment4'>Play With Primitives</label><br>";
            }
        })
    } else if (val == "html") {
        document.getElementById("students-per").innerHTML = "<option value='konna-sin'>Konstantina Sinevrioti</option><option value='konn-oik'>Konstantinos Oikonomidis</option>";
        document.getElementById("students-per").addEventListener("change", function () {
            var student_val = document.getElementById("students-per").value;
            if (student_val == "konna-sin") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment5' name='assignment5' value='interfaces' checked>" +
            "<label for='assignment5'>Play With Interfaces</label><br>" +
            "<input type='checkbox' id='assignment6' name='assignment6' value='exceptions' checked>" +
            "<label for='assignment6'>Play With Exceptions</label><br>";
            } else if (student_val == "konn-oik") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment5' name='assignment5' value='interfaces' checked>" +
            "<label for='assignment5'>Play With Interfaces</label><br>" +
            "<input type='checkbox' id='assignment6' name='assignment6' value='exceptions' checked>" +
            "<label for='assignment6'>Play With Exceptions</label><br>";
            }
        }) 
    } else if (val == "javascript") {
        document.getElementById("students-per").innerHTML = "<option value='alk-bag'>Alkistis Bageri</option><option value='lucia-bi'>Lucia Binioli</option>";
        document.getElementById("students-per").addEventListener("change", function () {
            var student_val = document.getElementById("students-per").value;
            if (student_val == "alk-bag") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment7' name='assignment7' value='appearance' checked>" +
            "<label for='assignment7'>Play With Appearance</label><br>" +
            "<input type='checkbox' id='assignment8' name='assignment8' value='appearance' checked>" +
            "<label for='assignment8'>Play With Widgets</label><br>";
            } else if (student_val == "lucia-bi") {
                document.getElementById("assignments-per-checkbox").innerHTML = "<input type='checkbox' id='assignment7' name='assignment7' value='appearance' checked>" +
            "<label for='assignment7'>Play With Appearance</label><br>" +
            "<input type='checkbox' id='assignment8' name='assignment8' value='appearance' checked>" +
            "<label for='assignment8'>Play With Widgets</label><br>";
            }
        }) 
    }
});

