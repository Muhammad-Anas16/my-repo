
// Check Login

let checkLogin = JSON.parse(localStorage.getItem("User-Login"));
if(checkLogin){
    location.replace("/Dashboard/D-Board.html");
}

// Get Element ///////////////////////////

let logEmail = document.getElementById('login-email');
let logPass = document.getElementById('login-password');

let logData = JSON.parse(localStorage.getItem('users Data'));

let logArr = (getLogin()) ? [...getLogin()] : [];

// function =======================

function getLogin() {
    return JSON.parse(localStorage.getItem("User-Login"));
}

function setLogin(login) {
    localStorage.setItem("User-Login", JSON.stringify(login));
}

function toCheckLogin(e) {
    e.preventDefault();

    logArr = [...logArr, {
        name: logEmail.value,
        password: logPass.value,
    },]

    if (logEmail.value == "" && logPass.value == "") {
        alert("Fill All Input First")
    }
    else if (logData == null) {
        alert("Email Address & Password Not Exist..");
    }
    else {
        for (var i = 0; i < logData.length; i++) {

            if (logEmail.value != logData[i].email) {
                alert("Email Address Not Found");
            }
            else if (logPass.value != logData[i].password) {
                alert("Password Not Found");
            }

            if (logEmail.value == logData[i].email && logPass.value == logData[i].password) {
                localStorage.setItem("log-User-Data", JSON.stringify(logData[i]))
                console.log(logData[i]);
                setLogin(logArr);
                alert("User Login Seccessfully");
                location.replace("/Dashboard/D-Board.html");
                return
            }

            logEmail.value = "";
            logPass.value = "";
        }
    }
};

// console.log("LogData", logData);

