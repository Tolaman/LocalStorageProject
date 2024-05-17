/* ----------------------------------------------------------------
    This is where we created the JSON object that store the the
    current students already register. Because JSON is a valide
    JavaScript, we can write it's a JS file instead of JSON file
---------------------------------------------------------------- */
const studentData = [
    {
        "username": "Michee",
        "password": "Mic2300"
    },
    {
        "username": "Josh",
        "password": "Jos2301"
    },
    {
        "username": "Rorisang",
        "password": "Ror2306"
    }
];

// Here we have dteo default patter for the input fields
// The Patern force the user to tipe in a way that follow the rule of the website
const patternUsername = /^[a-zA-Z]+$/; // Only  letters, no number is allow
/* ----------------------------------------------------------------
    This on is a bit trickier. The first letter must be a capital 
    letter, the next two letters must be lowercase, finaly 4 number
 ---------------------------------------------------------------- */ 
const patternPassword = /^[A-Z][a-z]{2}\d{4}$/;

/* ----------------------------------------------------------------
    The variables below store three arrays in the Local Storage of
    the computer, only the user computer can have aceces to it. 
    we user them to store the information of a new student. 
 ---------------------------------------------------------------- */
// This one stores the user name to display it on the home page
let userArray = JSON.parse(localStorage.getItem('userDate')) || [];
// Theses two store store the username and password
let old_username = JSON.parse(localStorage.getItem('data username')) || [];
let old_password = JSON.parse(localStorage.getItem('data password')) || [];