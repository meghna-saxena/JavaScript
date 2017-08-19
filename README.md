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