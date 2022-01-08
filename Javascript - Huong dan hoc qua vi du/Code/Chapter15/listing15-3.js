var heading = document.getElementById("heading");
if (typeof heading.currentStyle != "undefined") {
    var curStyle = heading.currentStyle.color;
else if (typeof window.getComputedStyle != "undefined") {
    var curStyle = 
        document.defaultView.getComputedStyle(heading,null).getPropertyValue("color");
}
alert(curStyle);
