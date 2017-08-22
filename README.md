# Getting Started
_Some basic notes and exercise to refresh my knowledge._

###### JavaScript Can Change HTML Content

```
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";
or
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
<img id="myImage" src="pic_bulboff.gif" style="width:100px">
<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
```

###### External scripts are practical when the same code is used in many different web pages.
- JavaScript files have the file extension .js.
- External scripts cannot contain <script> tags.
- It separates HTML and code
- It makes HTML and JavaScript easier to read and maintain
- Cached JavaScript files can speed up page loads


To use an external script, put the name of the script file in the src (source) attribute of a <script> tag

```
<script src="myScript.js"></script>
```

##### JS Data Display
- Writing into an HTML element, using innerHTML. It is a common way to display data in HTML. JavaScript uses the document.getElementById(id) method.
The id attribute defines the HTML element. The innerHTML property defines the HTML content.

- Writing into the HTML output using document.write(). 
Using document.write() after an HTML document is fully loaded, will delete all existing HTML, therefore it should only be used for testing.

- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

* In HTML, JavaScript programs are executed by the web browser.
In a programming language, program instructions are called statements, which are separated by semicolons.


###### JavaScript Statements 
JavaScript statements are "instructions" to be "executed" by the web browser.
Values, Operators, Expressions, Keywords, and Comments.
In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).

Numbers are not allowed as the first character.
This way JavaScript can easily distinguish identifiers from numbers.
Case sensitive. 
Hyphens are not allowed in JavaScript, Lower Camel Case is generally used.

###### Variables
* Store data values.
* Fixed values are called literals. Variable values are called variables.
* If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

```
var x = "5" + 2 + 3;
```
= 523

###### Assignment Operators
```
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
```

* The addition assignment operator (+=) adds a value to a variable.
* Modular operator (%) returns the division remainder.
* If you add a number and a string, the result will be a string!
* When used on strings, the + operator is called the concatenation operator.

###### Comparison Operators
```
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
```
###### Operator Precedence
Order in which operations are performed in an arithmetic expression.
- Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
- When using parentheses, the operations inside the parentheses are computed first.

###### Typeof operator 
Returns the type of a variable or an expression.
string
number
boolean
null
undefined
Null- In JavaScript, the data type of null is an object.
function
object

###### Functions
Block of code designed to perform a particular task.
Executed when "something" invokes it (calls it).
Reusable

```
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
```
When JavaScript reaches a return statement, the function will stop executing, compute a return value.

###### Objects
The name:values pairs (in JavaScript objects) are called properties.

- Access object properties in two ways:

```
objectName.propertyName
or
objectName["propertyName"]
```
- Access object methods:

```
objectName.methodName()
```

###### Events
```
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

Or code changes the content of its own element (using this.innerHTML):
<button onclick="this.innerHTML = Date()">The time is?</button>
```
Common HTML Events
onchange - An HTML element has been changed
onclick - The user clicks an HTML element
onmouseover- The user moves the mouse over an HTML element
onmouseout - The user moves the mouse away from an HTML element
onkeydown - The user pushes a keyboard key
onload - The browser has finished loading the page

###### Strings
The backslash ( \ ) escape character turns special characters into string characters:

Example
var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\" from the north."

Strings Can be Objects
var firstName = "John";
can also be defined as objects with the keyword new:

```
var firstName = new String("John");
```
Note the difference between (x==y) equal value and (x===y) equal value and type.
Comparing two JavaScript objects will always return false.
