// var maths = prompt("Enter your maths marks");
// var english = prompt("Enter your english marks");
// var urdu = prompt("Enter your urdu marks");

// var totmarks = maths + english + urdu;

// document.write(`<h1> MarkSheet </h1>`);
// document.write(``)

var userWeight = +prompt("Enter Your Weight");
var time = +prompt("Enter Time");
var gender = +prompt("Enter Gender");

if (userWeight <= 100 && time < 6  && gender === "male") {
  console.log("Come to our tryout");
} else {
    console.log("Better Luck next time")
}

var age = prompt("Enter age")
var res = prompt("Enter res")
if (age > 65 || age < 21 && res === "U.S.") {
    console.log("allow")
} else {
    console.log("not allow")
}

var percentage = +prompt ("Enter your Percentage");
if (percentage >= 80) {
    document.write(`Grade : A-one <br>
                    Remarks: Excellent <br>`)
} else if (percentage >= 70) {
    document.write(`Grade: A <br>
                    Remarks: Good <br>`)
} else if (percentage >= 60) {
    document.write(`Grade: B <br>
                    Remarks: You Need to Improve <br>`)
} else if (percentage < 60) {
    document.write(`Grade: Fail <br>
                    Remarks: Sorry <br>`)
}

//  NESTED IF
// var ProgrammingLanguage = prompt("Enter your programming language");

// if (ProgrammingLanguage === "js") {
//   var city = prompt("Enter your city");

//   if (city === "karachi") {
//     var experience = prompt("Enter your experience");
    
//   if (experience >= 2) {
//     console.log("you are hired!!");
//   } else {
//     console.log("Experience lao!!")
//   } 
//   } else {
//     console.log("karachi ajao")
//   }
// } else {
//     console.log("js seekho!!");
// }

// var proLang = prompt ("Enter Programming Languages");
// var city = prompt ("Enter your city");
// var experience = +prompt ("Enter your experience");

var proLang = prompt ("Enter Programming Languages");
if (proLang === "js") {
    var city = prompt ("Enter your city");

    if (city === "karachi") {
        var experience = +prompt ("Enter your experience");
    } else {
        console.log ("Karachi Ajoa!!")
    }

    if (experience >= 2) {
        console.log("you are hired!!")
    } else {
        console.log("Experience Lao!!")
    }
} else {
    console.log("Js seekho!!")
}

// ARRAY
var valUe = [50, "shehz", true, undefined];
console.log(valUe);
console.log(valUe[0]);