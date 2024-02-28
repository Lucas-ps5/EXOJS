// 1- Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number,
// the program will display a message "Good Work" otherwise display a message "Not matched".

export const findNumber = (num) => {
    if(num === Math.floor(Math.random() * 10 + 1)){
        return "Good Work";
    }else{
        return "Not matched";
    }
}
//console.log(findNumber(4));

//2. Write a JavaScript program to calculate days left until next Christmas

export const daysLeftUntilChristmas = () => {
    let today = new Date();
    let christmas = new Date(`December 25, ${today.getFullYear()} 00:00:00`);
    
    if(today.getMonth() == christmas.getMonth() && today.getDate() > christmas.getDate()){
        let newYear = parseInt(christmas.getFullYear()) + 1;
        christmas = new Date(`December 25, ${newYear.toString()} 00:00:00`);
    }
    return (Math.floor((christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))); 
}

//console.log(daysLeftUntilChristmas())

//3- Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

export const multiplication = (a, b) => a * b;
export const division = (a, b) => a / b;

//4. Write a JavaScript program to find the longest string from a given array.

export const longestString = (arr) => {
    return arr.sort((a, b) => a.length - b.length)[arr.length - 1];
}

//const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
//console.log(longestString(items))

//5. Write a JavaScript program to get the largest even number from an array of integers.

export const largestNumber = (arr) => {
    return arr.sort((a, b) => a - b)[arr.length - 1];
}

//const array = [56, 5, 66, 33, 99, 3, 9];
//console.log(largestNumber(array))

//6. Write a JavaScript program to remove all characters from a given string that appear more than once.

export const remouveChar = (str) => {
    let arr = str.split("");
    let once = [],
      twice = [];
    arr.forEach((item) => {
      if (twice.indexOf(item) === -1) {
        twice.push(item);
        once.push(item);
      } else {
        once.splice(once.indexOf(item), 1);
      }
    });
    return once.join("");
}

//console.log(remouveChar("comportement"))

//7. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

export const sumOfCubes = (num) => {
    let sum = 0;

    for(let i = 1; i <= num; i++){
        sum += Math.pow(i, 3);
    }
    return sum;
}

//console.log(sumOfCubes(5));

//8. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

export const compareObject = (obj1, obj2) => {
    const keys = Object.keys(obj2);

    for(const prop in obj2){
        if(obj1.hasOwnProperty(prop)){
            if(obj1[prop] !== obj2[prop]){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
}

//console.log(compareObject({nom : "lucas", prenom: "luc"}, {nom : "lucas", prenom: "luc"}))

//9. Write a JavaScript program to filter out the specified values from a specified array.
// Return the original array without the filtered values.

export const filterArray = (arr, ...params) => {
    for(let par of params){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === par){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

//console.log(filterArray([3, 4, 6, 7, 8, 23], 3, 7))

//10.Write a JavaScript program to extract out the values at the specified indexes from a specified array.

export const extractValues = (arr, ...indexes) => {
    const values = [];
    for(let index of indexes){
        if(index <= arr.length - 1){
            values.push(arr[index]);
        }else{
            console.log("Bad index");
        }
    }
    return values;
}
//console.log(extractValues([2, 4, 5, 8, 4, 7], 2, 4))

//11. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

export const deleteRollno = (obj) => {
    console.log(obj);
    delete obj.rollno;
    console.log(obj)
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

//deleteRollno(student)

//12. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

export const getCylinderVolume = (cylender) => {
    return cylender.volume;
}

class Cylinder {
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    get volume(){
        let volume = (3.14 * 2 * this.radius * this.height).toFixed(4);
        return parseFloat(volume);
    }
}

//let cylender = new Cylinder(4.34, 6);
//console.log(getCylinderVolume(cylender));

//13. Write a JavaScript program to create a Clock.

export const clock = () => {
    let clock = setInterval(logClock, 1000);
    
    function logClock(){
        let date = new Date();
        console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }
}

//clock()

//14. Write a JavaScript program to check if a string is lower case or not.

export const checkCase = (str) => {
    const str1 = str;
    return str1 === str.toLowerCase()
}

//console.log(checkCase("manger"));

//15. Write a function called add with two parameters which return a promise containing the result or the error message
// "Must provide two parameters" in case the user provided only no or only one parameter.

export const add = async (...arg) => {
    let promise = new Promise((resolve, reject) => {
        if(arg.length >= 2){
            resolve(arg.reduce((sum, value) => sum + value, 0));
        }else{
            reject(new Error("Must provide two parameters"));
        }
    })
    return promise;
}

//console.log(add(2))

