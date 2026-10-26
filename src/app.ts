var cl = console.log;

let a: string = "20";

//=== TYPE INFERENCE ===
let b = 10;
// b = "hello"  ==> Error , b is number typed variable (Implicit)  

// b = function (){

// }

// === Generic type ===
// === (type as a parameter) ===

let skills: Array<string> = ["Js", "Html5", "Css3"]

let marks = [20, "String"]
// cl(typeof(marks))  //Object

// === union Type ===
// We can store multiple types of data in same variable now  
let x: number | string = 20;
x = "Gaurav"

// ================= Type Alias ===================
// Creating our custome type
// Ex 1:-
type Student = {
    name: string,
    course: string,
    isActive?: boolean
}

let student1: Student = {
    name: "Gaurav",
    course: "Agular",
    isActive: true
}

let student2: Student = {
    name: "Abhi",
    course: "Java",
}

const studentsArr: Student[] = [student1, student2]

function fetchStudents(): Student[] {
    return studentsArr
}
cl(fetchStudents())
// [
//   { name: 'Gaurav', course: 'Agular', isActive: true },
//   { name: 'Abhi', course: 'Java' }
// ]

function fetchSingleStudent(): Student {
    return student1
}
cl(fetchSingleStudent())
// O/P:-  { name: 'Gaurav', course: 'Agular', isActive: true }

// EX 2:-

// type Alias
// type Product = {
//     pName: string,
//     brand: string,
//     model: string,
//     price: number,
//     color: () => Array<string>
// }

const product1: Product = {
    pName: "Laptop",
    brand: "Dell",
    model: "1.2 v",
    price: 55000,
    color: () => {
        return ["Black", "Silver", "White"];
    }
}

const product2: Product = {
    pName: "Mobile",
    brand: "Oppo",
    model: "A2",
    price: 33000,
    color: () => {
        return ["Red", "Black", "SkyBlue", "White", "LiteYello"]
    }
}
// cl(typeof(product1)) General Type : Object

// const productsArr : Product[]= [product1, product2]
const productsArr: Array<Product> = [product1, product2]

function fetchProducts(): Product[] {
    return productsArr
}
cl(fetchProducts())
// o/p :-
// [
//     {
//         pName: 'Laptop',
//         brand: 'Dell',
//         model: '1.2 v',
//         price: 55000,
//         color: [Function: color]
//     },
//     {
//         pName: 'Mobile',
//         brand: 'Oppo',
//         model: 'A2',
//         price: 33000,
//         color: [Function: color]
//     }
// ]

// Custome type using interface
interface Product {
    pName: string,
    brand: string,
    model: string,
    price: number,
    color: () => string[]
}

// Ex 2: 

interface Book {
    bookName: string,
    author: string,
    pages?: number,
    price: number
}

const book1: Book = {
    bookName: "Silence",
    author: "Shri Charya",
    pages: 140,
    price: 200
}

const book2: Book = {
    bookName: "Happy",
    author: "Ram",
    pages: 203,
    price: 250
}

const book3: Book = {
    bookName: "Aadarsh",
    author: "Guru Aar",
    price: 300
}

cl(typeof (book2)) //Object

//type literal
// Data or value as a type

let z: 100 = 100;

let g: " gaurav" = " gaurav" // same to same as it is

// Unoin type literal
// Ex 1 :-
interface Iuser {
    uName: string,
    token: string,
    userRole: "ADMIN" | "SUPERADMIN" | "BUYER"  // Union type literal
}

const user1: Iuser = {
    uName: "Gaurav",
    token: "token1",
    userRole: "ADMIN"
}

const user2: Iuser = {
    uName: "Abhi",
    token: "token2",
    userRole: "SUPERADMIN"
}

// Best way ==> 
// Ex 2 :-  
// Assign Union type literals to variable

type productStatus = "Shiped" | "Dispatched" | "At Your Nearest Hub" | "Picked Up" | "Delivered" | "Returned"

interface Iprod {
    pName: string,
    status: productStatus
}

const prod1: Iprod = {
    pName: "Shirt",
    status: "Shiped"
}
const prod2: Iprod = {
    pName: "Pant",
    status: "Delivered"
}


// ============= eNum ================
enum Positon {
    Manager = "Manager",
    Supervisor = "Supervisor",
    Operator = "Operator",
    Helper = "Helper"
}

interface Iuser2 {
    eName: string,
    position: Positon
}

const employee1: Iuser2 = {
    eName: "Gaurav",
    position: Positon.Manager
}
const employee2: Iuser2 = {
    eName: "Avinash",
    position: Positon.Operator
}


// ================== Tupels ====================
// (Fixed length with fixed data type at same indexed as fixed)

let info: [string, number] = ["Gaurav", 24]

let info2: [() => void] = [function () { }] // function whose return type = void

// let info3 : string,number = 24
// info3 = "Gaurav"

let info3: [string, object] = ["key", {}]

// ==================== Promise ==========================
// EX 1:- (Promise of type number)
function age(num: number): Promise<number> {
    return Promise.resolve(num)
}

age(24)
    .then(age => {
        cl(age) //24
    })


// EX 2:- (Promise of type Iprod Array )

// const prodArrs : Array<Iprod>  = [prod1 , prod2]
const prodArrs: Iprod[] = [prod1, prod2]

function produts(): Promise<Iprod[]> {
    return Promise.resolve(prodArrs)
}

produts()
    .then(data => {
        cl(data)
        //     [
        //   { pName: 'Shirt', status: 'Shiped' },
        //   { pName: 'Pant', status: 'Delivered' }
        // ]
    })

// EX 3 :- (Promise of type Iuser array)

const users: Array<Iuser> = [user1, user2]

function usersdata(): Promise<Iuser[]> {
    return Promise.resolve(users)
}

usersdata()
    .then(data => {
        cl(data)
    })


// ===================== Observable ============================
// to handle Asynchronous opration in angular 
// Observable => continues stream of data
//To consume promise, we used .then & .catch block like that for Observables we used .subscribe method which contains object with key next and error

// Ex :- 

// function fetchString1(){
//     return "Hello TS"
// }
import { Observable, of } from "rxjs";


function fetchString2(): Observable<string> {
    return of("Hello Oservable")
}
fetchString2()
    .subscribe({
        next: res => {
            cl(res)
        },

        error: err => {
            cl(err)
        }
    })

function fetchAge(age: number): Observable<number> {
    return of(age)
}
fetchAge(24)
    .subscribe({
        next: (data) => {
            cl(data)
        },
        error: (err) => {
            cl(err)
        }
    })

function fetchProductsArr(): Observable<Product[]> {
    return of(productsArr)
}

fetchProductsArr()
    .subscribe({
        next: res => {
            cl(res)
        },
        error: err => {
            cl(err)
        }
    })









