
var temp;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://ugradcalendar.uwaterloo.ca/page/MATH-Bachelor-of-Computer-Science-1"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


var textToSave = temp;

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'myFile.txt';
hiddenElement.click();
