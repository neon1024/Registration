
// var fname;
// var lname;
// var pw;
// var pn;
// var user = {};

// class Client {

//     constructor(fname, lname, pw, pn) {
//         this.fname = fname;
//         this.lname = lname;
//         this.pw = pw;
//         this.pn = pn;
//     }

//     showInfo() {
//         alert("First Name: " + user.fname + "\n" + "Last Name: " + user.lname + "\n" + "Password: " + user.pw + "\n" + "Phone Number: " + user.pn);
//     }

// };

// function registerClient() {
    
//     fname = document.getElementById("first name").value;

//     lname = document.getElementById("last name").value;

//     pw = document.getElementById("password").value;

//     pn = document.getElementById("phone number").value;

//     user = new Client(fname, lname, pw, pn);

//     // window.location.reload();

// }

// function showClientInfo(user) {
//     user.showInfo();
// }

var users = [];

class Client {

    constructor(fname, lname, pw, pn) {

        this.fname = fname;
        this.lname = lname;
        this.pw = pw;
        this.pn = pn;

    }

    showInfo() {
        return String(this.fname) + ' ' + String(this.lname) + ' ' + String(this.pw) + ' ' + String(this.pn);
    }

};

function registerClient(users) {
    
    let fname = document.getElementById("first name").value;

    let lname = document.getElementById("last name").value;

    let pw = document.getElementById("password").value;

    let pn = document.getElementById("phone number").value;

    let client = new Client(fname, lname, pw, pn);

    users.push(client);

}

function showUser(users) {

    result = '';

    for(user of users) {
        result = result + user.showInfo() + "<br>";
    }

    document.getElementById("result").innerHTML = result;

}
