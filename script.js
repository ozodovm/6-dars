// 1.1-misol 
// function funcReversedNum(number) {
//     let hundreds = Math.floor(number / 100);
//     let tens = Math.floor((number % 100) / 10); 
//     let units = number % 10;
//     let reversedNumber = units * 100 + tens * 10 + hundreds;
//     return reversedNumber;
// }
// let userNumber = parseInt(prompt("Iltimos, uch xonali son kiriting:"), 10);
// let reversedNumber = funcReversedNum(userNumber);
// console.log("Teskari son:", reversedNumber);

// 1.2-misol
// function factorialNum(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorialNum(num - 1);
//     }
// }
// console.log(factorialNum(5)); 

// 1.3-misol
// const user1 = {name:'Ali' , age:19};
// const user2 = {name:'Vali' , age:20};
// function compareAges(obj1,obj2){
//     if(obj1.age > obj2.age){
//         console.log(user1.name+" katta "+user2.name+" dan");
//     }
//     else if(obj1.age < obj2.age){
//         console.log(user2.name+" katta "+user1.name+" dan");
//     }
//     else{
//         console.log(user1+" va "+user2+" ning yoshlari teng");
//     }
// }
// compareAges(user1,user2)

// 1.4-misol
// function decreaseNum(n){
//     if(n < 1){
//         return;
//     }
//     console.log(n);
//     decreaseNum(n-1)
// }
// decreaseNum(10);

// 1.5-misol
// let user = {name:"Shaxzod"}
// let age = {age:25}
// let userJob = {job:"Developer"}
// let combinedObj = Object.assign({}, user, age, userJob);
// console.log(combinedObj);

// 1.6 - misol
// let salaries = {
//     aXodim:180,
//     bXodim:180,
//     cXodim:180
// }
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let key of Object.keys(salaries)) {
//         sum += salaries[key];
//     }
//     return sum;
// } console.log(sumSalaries(salaries)); 

// 1.7 - misol
// function findMax(arr) {
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let numbers = [1, 5, 3, 9, 2];
// console.log(findMax(numbers)); 

// 1.8 - misol
// function sumArr(arr){
//     let sum = 0
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] === undefined){
//             arr[i]=0
//         }
//         sum += arr[i]
//     }
//     return sum;
// }
// let arr = [2,4,6,7,true,false,null,undefined]
// console.log(sumArr(arr)); 

// --------------------------------------------------------------------

// 2.1 - misol
// let arr =  [
//     {
//         name:"Abdulloh",
//         age:21,
//         status:false
//     },
//     {
//         name:"Botir",
//         age:18,
//         status:true
//     },
//     {
//         name:"Shokir",
//         age:12,
//         status:false
//     },
// ]
// function printFalse(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].status === false) {
//             console.log(arr[i]);
//         }
//     }
// }
// printFalse(arr);

// 2.2 - misol
// function sumNum(n) {
//     if (n < 1) {
//         return 0;
//     }
//     return n + sumNum(n - 1);
// }
// console.log(sumNum(10)); 

// 2.3 - misol
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 5, 8, 9, 0, 1];
// let arr3 = [];

// function compareArrays() {
//     let count = 0; 
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 arr3.unshift(arr1[i]); 
//                 count++;
//             }
//         }
//     }
//     console.log(count + " tasi bir xil");
//     console.log("Bir xil elementlar:", arr3);
// }
// compareArrays();

// 2.4 - misol
// function findMax(arr1, arr2) {
//     let max1 = arr1[0];
//     let max2 = arr2[0];
//     for (let i = 1; i < arr1.length; i++) {
//         if (arr1[i] > max1) {
//             max1 = arr1[i];
//         }
//     }
//     for (let j = 1; j < arr2.length; j++) {
//         if (arr2[j] > max2) {
//             max2 = arr2[j];
//         }
//     }
//     return max1 > max2 ? max1 : max2;
// }
// let numbers1 = [1, 5, 3, 9, 7];
// let numbers2 = [4, 2, 6, 8, 2];
// console.log(findMax(numbers1, numbers2)); 

// 2.5 - misol
// function printNumbers(n) {
//     function helper(son) {
//         if (son > n) {
//             return;
//         }
//         console.log(son);
//         helper(son + 1);
//     }
//     helper(1);
// }
// printNumbers(10);

// -----------------------------------------------------------

// 3.1 - misol
// function createArray() {
//     let size = parseInt(prompt("Array hajmini kiriting:"));
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         let id = prompt(`ID ni kiriting (${i + 1}/${size}):`);
//         let name = prompt(`Ismni kiriting (${i + 1}/${size}):`);
//         arr.push({ id: id, name: name });
//     }
//     console.log(arr);
// }
// createArray();

// 3.2 - misol
// function removeSameNum(arr) {
//     let Array = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!Array.includes(arr[i])) {
//             Array.push(arr[i]);
//         }
//     }
//     return Array;
// }

// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// console.log(removeSameNum(arr)); 

// 3.3 - misol
// function findIndex(arr) {
//     let number = parseInt(prompt("Sonni kiriting:"));
//     let index = arr.indexOf(number);

//     if (index !== -1) {
//         console.log(`Son indeks: ${index}`);
//     } else {
//         console.log("Son topilmadi");
//     }
// }
// let arr = [88, 75, 342, 21, 45, 67];
// findIndex(arr);

// 3.4 - misol
// function removeAndPrint(arr) {
//     let number = parseInt(prompt("Sonni kiriting:"));
//     let index = arr.indexOf(number);

//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
    
//     console.log(arr);
// }
// let arr = [88, 75, 342, 21, 45, 67];
// removeAndPrint(arr);

// 3.1 - misol
// sal qiyin ekan


