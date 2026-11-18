// const student={
//     FullName:"Sumit kumawat",
//     age:18,
//     marks:95,
//     printMarks:function(){
//        console.log(this.marks);     // this -->students
//        console.log(student.marks);
//     },
// }

// const employee = {
//     calcTax(){
//        console.log("tax rate is 10%");
//     },

    // calcTax: function(){                                 // both methods are right
    //   console.log("tax rate is 10%");
    // },
// }

// const sumit={
//     salary:100000,
// }

// const rahul={
//     salary:100000,
//     calcTax(){
//         console.log("tax rate is 20%");                 //if object and prototype have same method, objects methods will be used
//     }
// }

// sumit.__proto__=employee;             //by this sumit object can  also access calcTax
// rahul.__proto__=employee;

// class ToyotaCar{
//     constructor(milage){
//         console.log("whenever we create class constructor calls automatically first");
//         this.milage=milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

//     setbrand(brand){
//         this.brandName=brand;
//     }
// }

// let fortuner = new ToyotaCar(10);
// fortuner.setbrand("fortuner");
// let lexus = new ToyotaCar(12);
// lexus.setbrand("lexus");

// console.log(fortuner.start(),fortuner.stop());

// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{}

// let obj = new child();

// class person{
//     constructor(){
//         this.species="homosapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//     console.log("sleep");
//     }
// }

// class engineer extends person{
//     constructor(){
//         console.log("engineers are engineering");
//     }
//     work(){
//         console.log("build something, give something to world");
//     }
// }

// let sumitobj = new engineer();

// Qs. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.

let data = "Secret information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data =", data);
    }
}

let student1 = new User("Sumit","cmaker368@gmail.com");
let student2 = new User("Ashish","ashishkumawat211@gmail.com");

// Qs. Create a new class called Admin which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data.

class Admin extends User{
    editdata(){
        console.log("you can edit data");
    }
}

let admin1 = new Admin("rahul", "admin@gmail.com");