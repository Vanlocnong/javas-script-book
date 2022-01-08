function checkValid() {
    var cityField = document.forms[0]["city"];
    if (cityField.value != "Stevens Point") {
        cityField.style.background = "#FF0000";
        var citydiv = document.getElementById("citydiv");
        var feedbackdiv = document.createElement("div");
        feedbackdiv.setAttribute("id","feedback");
        citydiv.appendChild(feedbackdiv);
        feedbackdiv.appendChild(document.createTextNode("Incorrect City."));
        return false;
    } else {
        return true;
    }
}
