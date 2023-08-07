Chirag Arora8:39 AM
brb
Sachin Srivastava8:41 AM
console.log(0.1+0.2==0.3)
Vidhya Skill School8:42 AM
0.1+0.2
Sushmitha Bhat8:43 AM
0.30000000000000004
Sachin Srivastava8:45 AM
console.log(1 && 2)
Vidhya Skill School8:47 AM
var x = 10;

function foo() {
  console.log(x);
}

function bar() {
  var x = 20;
  foo();
}

bar();
Roopesh Vishwakarma8:47 AM
5 mit
Aditya budh8:50 AM
UNDEFINED
Vidhya Skill School8:51 AM
var x = 10;

function foo() {
  console.log(x);
}

function bar() {
  var x = 20;
  foo();
}

bar();
Tejashri Patil8:52 AM
brb
Vidhya Skill School8:56 AM
var x = 10;

function foo() {
  console.log(x);
}

function bar() {
  x = 20;
  foo();
}

bar();
Vidhya Skill School9:11 AM
var name = "Alice";

function greet() {
  console.log("Hello, " + name + "!");
}

function changeName() {
  var name = "Bob";
  greet();
}

changeName();
Chirag Arora9:12 AM
Hello Alice !
Vidhya Skill School9:14 AM
var name = "Alice";

function greet() {
  console.log("Hello, " + name + "!");
}

function changeName() {
 name = "Bob";
  greet();
}

changeName();
var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
  }

  inner();
}

outer();
...................................

var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
  }

  inner();
}

outer();
Vidhya Skill School9:20 AM
_____________________________

var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
    var a = 10;
  }

  inner();
}

outer();
Vidhya Skill School9:32 AM
_____________________________

var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
    let a = 10;
  }

  inner();
}

outer();
Akash Zawar9:35 AM
can someone repost the question
I had to rejoin due to network issue
Palak Gontiya9:35 AM
var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
    let a = 10;
  }

  inner();
}

outer();
Pavan Kammar9:35 AM
var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
    let a = 10;
  }

  inner();
}

outer();
Vidhya Skill School9:37 AM
let x = 5;

function example() {
  console.log(x);

  if (true) {
    let x = 10;
    const y = 15;
    console.log(x + y);
  }

  console.log(x);
}

example();
console.log(x);
Vidhya Skill School9:39 AM
5
25
5
5
Vidhya Skill School9:41 AM
let x = 5;

function example() {
  console.log(x);

  if (true) {
    x = 10;
    const y = 15;
    z = 20;
    console.log(x + y + z);
  }

  console.log(x);
}

example();
console.log(x);
console.log(z);
Vidhya Skill School9:45 AM
let a = b = 10
Vidhya Skill School9:47 AM
window.a = 10
Vidhya Skill School9:52 AM
function foo() {
  console.log(a);
  var a = 10;
  console.log(a);
}

foo();
Vidhya Skill School9:55 AM
function foo() {
  console.log(a);
  let a = 10;
  console.log(a);
}

foo();