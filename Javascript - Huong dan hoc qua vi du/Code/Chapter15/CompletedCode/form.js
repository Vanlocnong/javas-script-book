function checkValid() {
    var cityField = document.forms[0]["city"];
    if (cityField.value != "Stevens Point") {
        var cityDiv = document.getElementById("citydiv");
        cityDiv.style.fontWeight = "bold";
        cityDiv.style.border = "1px solid black";
        if (eventObj.preventDefault) {
            eventObj.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    } else {
        return true;
    }
}
