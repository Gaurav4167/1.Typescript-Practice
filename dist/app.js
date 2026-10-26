"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cl = console.log;
let a = "20";
let b = 10;
let skills = ["Js", "Html5", "Css3"];
let marks = [20, "String"];
let x = 20;
x = "Gaurav";
let student1 = {
    name: "Gaurav",
    course: "Agular",
    isActive: true
};
let student2 = {
    name: "Abhi",
    course: "Java",
};
const studentsArr = [student1, student2];
function fetchStudents() {
    return studentsArr;
}
cl(fetchStudents());
function fetchSingleStudent() {
    return student1;
}
cl(fetchSingleStudent());
const product1 = {
    pName: "Laptop",
    brand: "Dell",
    model: "1.2 v",
    price: 55000,
    color: () => {
        return ["Black", "Silver", "White"];
    }
};
const product2 = {
    pName: "Mobile",
    brand: "Oppo",
    model: "A2",
    price: 33000,
    color: () => {
        return ["Red", "Black", "SkyBlue", "White", "LiteYello"];
    }
};
const productsArr = [product1, product2];
function fetchProducts() {
    return productsArr;
}
cl(fetchProducts());
const book1 = {
    bookName: "Silence",
    author: "Shri Charya",
    pages: 140,
    price: 200
};
const book2 = {
    bookName: "Happy",
    author: "Ram",
    pages: 203,
    price: 250
};
const book3 = {
    bookName: "Aadarsh",
    author: "Guru Aar",
    price: 300
};
cl(typeof (book2));
let z = 100;
let g = " gaurav";
const user1 = {
    uName: "Gaurav",
    token: "token1",
    userRole: "ADMIN"
};
const user2 = {
    uName: "Abhi",
    token: "token2",
    userRole: "SUPERADMIN"
};
const prod1 = {
    pName: "Shirt",
    status: "Shiped"
};
const prod2 = {
    pName: "Pant",
    status: "Delivered"
};
var Positon;
(function (Positon) {
    Positon["Manager"] = "Manager";
    Positon["Supervisor"] = "Supervisor";
    Positon["Operator"] = "Operator";
    Positon["Helper"] = "Helper";
})(Positon || (Positon = {}));
const employee1 = {
    eName: "Gaurav",
    position: Positon.Manager
};
const employee2 = {
    eName: "Avinash",
    position: Positon.Operator
};
let info = ["Gaurav", 24];
let info2 = [function () { }];
let info3 = ["key", {}];
function age(num) {
    return Promise.resolve(num);
}
age(24)
    .then(age => {
    cl(age);
});
const prodArrs = [prod1, prod2];
function produts() {
    return Promise.resolve(prodArrs);
}
produts()
    .then(data => {
    cl(data);
});
const users = [user1, user2];
function usersdata() {
    return Promise.resolve(users);
}
usersdata()
    .then(data => {
    cl(data);
});
const rxjs_1 = require("rxjs");
function fetchString2() {
    return (0, rxjs_1.of)("Hello Oservable");
}
fetchString2()
    .subscribe({
    next: res => {
        cl(res);
    },
    error: err => {
        cl(err);
    }
});
function fetchAge(age) {
    return (0, rxjs_1.of)(age);
}
fetchAge(24)
    .subscribe({
    next: (data) => {
        cl(data);
    },
    error: (err) => {
        cl(err);
    }
});
function fetchProductsArr() {
    return (0, rxjs_1.of)(productsArr);
}
fetchProductsArr()
    .subscribe({
    next: res => {
        cl(res);
    },
    error: err => {
        cl(err);
    }
});
