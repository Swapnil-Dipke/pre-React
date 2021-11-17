




// console.log("hello  i'm from js");
// var a=10;
// console.log(a);

// var  a=20;     
// console.log(a);


// let b=30;
// console.log(b);
// // let b=40;    let can not be re initialize        








// //------------------ Array declare and updation--------------------

// const myArr ={
//     name :"Aniket",    // while declaring Array And Oject use :
// };
// console.log(myArr);
// myArr.name= "Akshay"; //while updating use =
// console.log(myArr);







// //---------------- string methods ----------------------------------

// let myString1="abc@xyz.com";
// let myString2="Abc@xyz.com";

// console.log(" == check only vaalue");
// console.log(myString1.toUpperCase() == myString2.toUpperCase());

// console.log(" === check value with data type");
// console.log(myString1.toUpperCase() === myString2.toUpperCase());

// 





//----- WAP to find repeated char in given word --------------


// var  input = "nitin";
// var  output = "";

// for( i=0; i< input.length;i++){

// let count=0;

// for (j=0; j<input.length; j++) {

//     if (input[i] === input[j] && i<=j) {

//         count++;

//         if (count > 1) {
//             output = output + input[i];
//             break;
  
          
//         }
       

//     }
  
// }

// console.log(output);   

// }  





//--------------------- Array ------------------------------

// compare the array refrences

// let myArr = [1,2,3,4,[1,2]];
// let myArr1= [1,2,3,4];
// let isSame=true;

// for ( let i=0; i< myArr.length;i++) {
     
//     if (myArr[i]!=myArr1[i]) {
//         isSame=false;
        
//         break;
//    }

// }

// console.log(isSame);







//-------- WAP to reverse a word from th given string --------------

// let input = "INDIA is my Country";
// output = "";





// function reverseString(value){
//     let returnValue= "";

//     for ( let i=value.length - 1;i > -1 ; i--) {
//        returnValue = returnValue + value[i]
        
//     }
//     return returnValue;
// }



// let wordString="";
// for ( let i =0 ; i < input.length;i++) {    

//     if (input[i]=== " ") {
//         output = output + reverseString(wordString) + " ";

//         console.log(wordString);
//         wordString = "";
//         continue;        
//     }
//     else{
//         wordString = wordString + input[i];

//         if (i + 1 === input.length) {
//             output = output + reverseString(wordString);
//             console.log(wordString);
//             wordString="";
//         }
//     }

   
//     console.log(output);


   


    
// }





//-----------------

// //function expression

// const addNumbers2 = function (number1 , number2) {
//     return number1+number2
// }

// console.log(addNUmbers2(10,20));
// console.log(addNumbers2);

// //---Arrow Function----

// const addNumbersArrow = (number1 , number2) => {
//     return number1+number2
// }

// console.log(addNUmbersArrow(10,20));
// console.log(addNumbersArrow);




//-----this keyword with function----------------


// const myObject ={
//      //1000
//     name: "akshay",
//     getName: function() {
//         return this.name;
//     },
// };

// const myNewObject = {
//     //2000
//     name :"ankit",
// };


// //myObject.getName--> 1000
// //newGetName ---> 2000

// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());
// console.log(newGetName());




//---------constructor funtn ------

// function Person(name, age) {

//     if (!new.target) {                  //if we are not using using new keyword it check if  not present
//                                         // it will execute and enters inside the if function
//         return new Person(name, age);        
//     }
//                                         // if we created instance using new keyword if block will not executed
//                                         // it goes to the hoisting and bring values from instance
//     this.name = name;
//     this.age= age;    
// }

// const personObject =  new Person("Surya",25);
// const personObject1 = Person("surya-singham", 35);
// console.log(personObject);
// console.log(personObject1);



//-------- Array and object destruction-----


//const myArr = [1,2,3,4]

//                                by inserting values by indexing
//const [a,b,c,d] = myArr;
// const a= myArr[0];
// const a= myArr[1];
// const a= myArr[2];
// const a= myArr[3];


// const [a,b,c,d] = myArr;
// console.log(a,b,c,d);

// const myObject = {
//     name : "surya",
//     age :25,
// };

// const {age, name } = myObject;
// console.log(name,age);



//------------spread operator --------------------------------

//  const myArr = [1,2,3,4,5];

//  const myArrNew = [];
//  for (let i = 0; i < myArr.length; i++){
//      myArrNew.push(myArr[i]);
//   }
//    console.log(myArr);
//    console.log(myArrNew);
//    console.log(myArr);
//   console.log(myArrNew);

// //------------- 2nd way -------------------
  

//   const myArr = [1,2,3,4,5];
//   const myArrNew = [...myArr]
//   console.log(...myArr);
//   myArrNew.push(6);
//   console.log(myArrNew);








//---------- spread vua object ------------------

// const myObject = {
//     name: "Ankur",
//     age : 29,
// }

// const myObjectNew = { ...myObject };

// console.log(myObject);
// //console.log(myNewObject);

// myObject.name="Priyanshu";
// console.log(myObject);
// console.log(myNewObject);

// console.log(...myObject);  object is not an terable form so it will not iterate auto



//----------------- rest --------------------------------


// function addNumbers(...args) {

//     //  const args =[10,20,30,40];  internally (...args) convert internally into an sequential array
//     //   and takes value from outside th function by hoisting..

//     let result = 0;
//     for (let i = 0 ;i< args.length; i++){
//     result += args[i];    
//     }
//     return result;
    
// }
// console.log(addNumbers(10,20,30,40));































