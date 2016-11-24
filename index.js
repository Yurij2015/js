var obj = {
    "row1": 2,
    "row2": true,
    "row3": "string",
    "test-1": 1,
    "row4": [],
    // "fnc1": function () {
    //     console.log("my func");
    // },
    "fnc": true
};


document.addEventListener("DOMContentLoaded", function () {
    var array = [];
    console.log("ready");
    var date = new Date();
    var currentDate = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDay(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
    // console.log(date);
    //
    // console.log(currentDate);

    for (var i = 0; i < 100000; i++) {
        array.push(i);
    }


    var startDate = new Date() * 1000;
    for (var i = 0; i < 10000; i++) {
        // array.push(i);
    }

    var endDate = new Date() * 1000;
    // console.log({
    //     "startDate": startDate,
    //     "endDate": endDate,
    //     "arr": array,
    //     "result": endDate - startDate
    // });


    var newArray = [];
    var startForeach = new Date() * 1000;
    array.forEach(function (item, index, arr) {
    });

    var endForeach = new Date() * 1000;
    // console.log({
    //     "startDate": startForeach,
    //     "endDate": endForeach,
    //     "arr": array,
    //     "result": endForeach - startForeach
    // });


    // var array = [];
    // var startDate=new Date()*1000;
    // array.forEach(function (item, index, arr) {
    //
    //     // console.log({
    //     //     "item":item,
    //     //     "index":index,
    //     //     "arr":arr
    //     // })
    // })


    // var res = array.reduce(function (sum, val) {
    //     sum += val;
    //     // console.log(val);
    //     return sum;
    // });
    // // console.log(res)
    //
    // var startForIn = new Date()*1000;
    // for (var i=0; i<array.length; i++){
    //     console.log(obj[i]);
    // }

    var startForIn = new Date() * 1000;
    for (var i in array) {
        // console.log(obj[i]);
    }

    var endForIn = new Date() * 1000;
    // console.log({
    //     "startDate": startForIn,
    //     "endDate": endForIn,
    //     "arr": array,
    //     "result": endForIn - startForIn
    // });


    var i = 0;
    var startWhile = new Date() * 1000;
    while (i < array.length) {
        i++;
    }
    var endWhile = new Date() * 1000;
    console.log({
        "startDate": startForeach,
        "endDate": endForeach,
        "arr": array,
        "result": endForeach - startForeach
    });

    var startDoWhile = new Date() * 1000;
    do {
        i++
    }
    while (i < array.length);
    var endDoWhile = new Date() * 1000;

    console.log({
        "startDate": startDoWhile,
        "endDate": endDoWhile,
        "arr": array,
        "result": endDoWhile - startDoWhile
    });
    //
    // for (var i in obj) {
    //     console.log(obj[i]);
    // }
    // window.alert(date);
});


var arr = [];
var testVariable = "test";
var testVariable = 1.02;
var bool = true;
var array = ["alj", 1231, true];
var obj = {
    "row1": 2,
    "row2": true,
    "row3": "string",
    "test-1": 1,
    "row4": [],
    "fnc1": function () {
        console.log("my func");
    }
};
var testFnc = function (arg1) {
    console.log(arg1)
};
function test() {
    var varOfTestFunction = 1;
    //testFnc(varOfTestFunction);
    //alert(varOfTestFunction);
    //var arr=[];
    // arr.push(varOfTestFunction);
    // console.log(arr);
    //console.log(obj.row1);
    //console.log(obj["row1"]
    obj.fnc1();
}
var userData = {
    'login': 'username',
    "password": "password"
}
function login() {

    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("userpassword")[0].value;
    if ((username === userData.login) && (password === userData.password)) {
        alert("Авторизация прошла успешно");
    }
    else {
        alert("Неправильный логин или пароль")
    }
    // console.log("test");
    // var username = document.getElementById("username").value;
    // var username = document.getElementsByName("username")[2].value;
    // var username = document.getElementsByClassName("username")[0].value;
    // var username = document.getElementsByTagName("input")[0].value;
    // var form=document.getElementsByName("userForm")[0];
    console.log(
        {
            "username": username,
            "password": password
        }
    );
}

function login() {
    var form = document.getElementsByName('userForm')[0];
    var elements = form.elements;
    console.log(elements);
    var username = elements[0].value;
    var password = elements[1].value;
    // var login = form.getElementsByName('username');
    // var password = form.getElementsByName('password');
    console.log(
        {
            "username": username,
            "password": password
        }
    )
    ;
}
//
// function showPwd(input) {
//     console.log(input);
//     var pwdField = document.getElementsByName("userpassword")[0];
//     pwdField.attributes.type.nodeValue="text";
// }
//
// // function showPwd(input) {
// //     console.log(input);
// //     var pwdField = document.getElementsByName("userpassword")[];
// //     pwdField.attributes.type.nodeValue="text";
// // }


function showPwd() {
    var pwdField = document.getElementsByName("userpassword")[0];
    var btn = document.getElementsByName("showpwd")[0];
    if (pwdField.type === "password") {
        pwdField.type = "text";
        btn.textContent = "Скрыть пароль";
    }
    else {
        pwdField.type = "password";
        btn.textContent = "Показать пароль";
    }
}







