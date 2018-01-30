/*
Coding Challenge one

Section 2, Lecture 27
Create three different variables, one with a username, one with the age of the user and one with a boolean to check if the user is logged in or not.

-  If the user is looged in, we want to output "My name is xxx and i am xxx years old ", could be an alert or console log.

- If the user is not logged in, we want to output "Please log in to see the message"

NOTICE: I will show you the solution on the next lecture.
*/
var username, age, logged;


username = 'Ximena';
age = 25;
looged = true;

if(looged){
    console.log('My name is ' + username + ' and I am ' + age + ' years old');
} else {
    console.log('Please log in to see the message');
}

/*
Coding Challenge two
Section 2, Lecture 29
We want to search for a name in a list of names, and if it's found, we want to do something.

First we need variable with an array of five names, then we want to loop the array and console log each name.

BUT.. if there is a match on 3rd name of array, we want to output "The name xxx was found"

Notice: Solution on the next lecture.
*/

var listOfName, searchingName;
searchingName = 'Olivia';
listOfName = ['Catalina', 'Salome', 'Paula', 'Elena', 'Olivia', 'Manuela', 'Zoe'];
for (var i = 0; i < listOfName.length; i++) {
    
    if(listOfName[i] === searchingName){
        console.log('The name '+ listOfName[i] +' was found');
        break;
    }
    console.log(listOfName[i]);
}


/*
Coding Challenge three
Section 2, Lecture 31
We have a variable NUMBER that starts at 5 and Variable that counts ITERATIONS, we need to create a loop and do the following:

- Add five to the NUMBER variable (5,10,15,20 etc etc) on each iteration.
- Add one to the ITERATION VARIABLE(0,1,2,3,4 etc etc) on each iteration.
- We need to check if the NUMBER variable is equal to 50, and if it is we need to kill the loop and console log the final NUMBER and ITERATION values.

NOTICE: Solution on the next video.
*/
var number, i, stop;
number = 5;
i = 0;
stop = true;

// for (i; i < 100; i++) {

//     if (number < 55) {
//         console.log('i: ' + i + ' number: ' + number);
//         number += 5;
//     } else {
//         break; 
//     } 
// }

// while (number < 50) {

//     console.log('i: ' + i + ' number: ' + number)
//     number += 5;
//     i++;
// }

while (stop) {

    if(number >= 50) {
        stop = false;
    }

    console.log('i: ' + i + ' number: ' + number)
    number += 5;
    i++;

}



/*
Coding Challenge four
Section 2, Lecture 33
We have object that contains a name and a lastname, and then when the page loads, we want to run a function to output a greeting message like "Hello, NAME LASTNAME welcome back".

NOTICE: Solution on the next video.
*/

var greeting = {
    name: 'Regina',
    lastname: 'Mills',
    greetingMessage: function(){
        var message = 'Hello, ' + this.name + ' ' + this.lastname + ', welcome back!';
        return message;
    }
}

console.log(greeting.greetingMessage());

/*
Coding challenge one
Section 3, Lecture 44
We want to create a DIV element an insert it on the HTML, then we need to add the following to it:

Add a text like "Hello I am a crazy div"
Change the background to green.
Font color to "red"
Set the font size to 20px
Change the width and height to 200px
Add a border of 2px solid BLUE.
Notice: Solution on the next lecture.
*/

var div = document.createElement('div');
document.body.appendChild(div);

div.textContent = 'Hello I am a crazy div';
div.style.background = 'green';
div.style.color = 'red';
div.style.fontSize = '20px';
div.style.width = '200px';
div.style.height = '200px';
div.style.border = '2px solid blue';

/*
Coding challenge two
Section 3, Lecture 46
We need to create a div with a height and width of 200px and a background of RED.

Then inside this div, we need to add a SPAN that says "DONT TOUCH THE RED BUTTON" and if the user clicks on it, he will get and ALERT saying that the computer is being HACKED.

Notice: Solution on the next video.
*/

var newDiv = document.createElement('div');
document.body.appendChild(newDiv);
var span = document.createElement('span');
//document.body.appendChild(span);
newDiv.appendChild(span);



newDiv.style.width = '160px';
newDiv.style.height = '160px';
newDiv.style.background = 'red';
newDiv.style.padding = '20px';
span.textContent = 'DONT TOUCH THE RED BUTTON';


newDiv.onclick = function(){
    alert('The computer is being HACKED');
}

/*
Coding challenge three
Section 3, Lecture 48
We want to create a div ( there is no need to do it with js ), this div has a width of 200px and a height of 200px, and the background is red.

When we click the element, we need to alternate the size, ..if it's square 200px we change it to 100px...and if its 100px, we change back to 200px, and so on.

Notice: Solution on the next video.
*/


var mdiv = document.querySelector('#modi');


mdiv.addEventListener('click', function(){
if (mdiv.style.width === '200px') {
    // statement
    resize('100px', '100px');
} else {
    // statement
    resize('200px', '200px');
}
});

function resize (width, height) {
    // body... 
    mdiv.style.width = width;
    mdiv.style.height = height;
}

/*
Coding challenge one
Section 4, Lecture 56
We have an array with at least three names, then we want to remove the last one and add a completly diffrent name.

After we do that, we want to console log a string with this format for example "Francis / John / Lisa".

NOTICE: Solution on the next video.
*/

var names = ['Catalina', 'Salome', 'Paula', 'Elena', 'Olivia', 'Manuela', 'Zoe'];

names.pop();
names.push('Regina');
console.log(names);
namesString = names.join('/')
console.log(namesString);

/*
Coding challenge two
Section 4, Lecture 58
We have two different arrays with names, we want to create a new array and merge all the names into a single new array.

After that, we have to loop each value and create a new array, but instead of just showing the name it should say "My name ix xxxx", for example:

var lastarray = ["My name is Francis","My name is John","My name is Lisa"].

NOTICE: Solution on the next video.

*/
var cars, anotherCars, lastarray, allOfCars;
cars = ["Saab", "Volvo", "BMW"];
anotherCars = ["Audi", "Acura", "Bugatti", "Alfa Romeo", "Bentley"];
lastarray = [];

allOfCars = cars.concat(anotherCars);

allOfCars.forEach( function(element) {
    lastarray.push('My name is ' + element);
});

console.log(lastarray);

var lastarray2 = allOfCars.map(function (elem) {
    /* body... */
    return 'My name is ' + elem;
})

console.log(lastarray2);

/*
Coding challenge one
Section 5, Lecture 66
We have a div inside of our body in the HTML that says LOGOUT and whenever a user clicks on that red div, we want to:

Change the text from LOGOUT to LOGGING OUT, and after five seconds, alert "Yor are logged out" and then change the button back to LOG IN.

NOTICE: Solution on the next video.

*/

var logout = document.querySelector('#logout');
logout.style.width = '160px';
logout.style.height = '160px';
logout.style.background = 'purple';
logout.style.padding = '20px';

function textChanging () {
    
    logout.textContent = 'LOGGING OUT';

    setTimeout(function () {
        alert("Yor are logged out");
        logout.textContent = 'LOG IN';
    }, 5000);

}

logout.addEventListener('click', textChanging);


/*
Coding challenge two
Section 5, Lecture 68
We want to run a function whenever the page loads and the function will generate a random number between 1 and 100.

Then we need to create a loop that it's going to console log that random number until the number is greater that 90, if it's greater, we want to stop generating random numbers.

NOTICE: Solution on the next video.

*/
// var randoming = Math.floor(Math.random() * 100) + 1;
// console.log(randoming + 'global');
// ( function randomNumbers () {
    
//     var i = 0;
//     while (randoming < 90) {
//         i++;
//         randoming = Math.floor(Math.random() * 100) + 1;
//         if (randoming < 90 ){
//             console.log(randoming);
//         }
//     }
// } ) ();

(function randNumbers () {
    
    var i = 0;

    while (i < 90) {
        randoming = Math.floor(Math.random() * 100) + 1;
        i = randoming;
        if (i < 90) {
            console.log(i);
        }
    };

})();











