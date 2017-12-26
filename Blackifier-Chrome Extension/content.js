console.log("Here We Go")
var x = document.getElementsByTagName("img");
var i,file="2.jpg";
for (i = 0; i < x.length; i++) {
x[i].src=chrome.extension.getURL(file);
}
