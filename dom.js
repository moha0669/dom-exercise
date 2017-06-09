
var tagline = document.getElementById("tag-line");

var headings = document.querySelectorAll(".bg-main-content h2");

var collect = tagline.innerHTML + "\n--------------------------------------------";

for (var i=0; i<headings.length; i+=1) {
    collect += "\n" + headings[i].innerHTML;
}

alert(collect);



var boxes = document.querySelectorAll(".bg-main-content .box");

var when_to_launch = boxes[12];

var children = when_to_launch.children;

var collect = children[0].innerHTML + "\n------------------";

for (var i=1; i<children.length; i+=1) {
    collect += "\n\n" + children[i].innerHTML;
}
alert(collect);