function checkValid(eventObj) {
    try {
        var numField = document.forms[0]["num"];
        if (isNaN(numField.value)) {
            var err = new Array("It's not a number",numField);
            throw err;
        }
        else if (numField.value > 100) {
            var err = new Array("It's greater than 100",numField);
            throw err;
        }
        else if (numField.value < 1) {
            var err = new Array("It's less than 1",numField);
            throw err;
        }
        return true;
    }
    catch(errorObject) {
        var errorText = document.createTextNode(errorObject[0]);
        var feedback = document.getElementById("feedback");
        var newspan = document.createElement("span");
        newspan.appendChild(errorText);
        newspan.style.color = "#FF0000";
        newspan.style.fontWeight = "bold";
        newspan.setAttribute("id","feedback");
        var parent = feedback.parentNode;
        var newChild = parent.replaceChild(newspan,feedback);
        errorObject[1].style.background = "#FF0000";
        if (eventObj.preventDefault) {
            eventObj.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    }
}
