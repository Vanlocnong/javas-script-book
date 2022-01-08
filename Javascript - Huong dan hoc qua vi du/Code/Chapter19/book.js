var requestObj = readyAJAX();
var url = "http://www.braingia.org/book.xml";
requestObj.open("GET",url,false);
requestObj.send();
if (requestObj.status == 200) {
    var xmldocument = requestObj.responseXML;
    alert(xmldocument.getElementsByTagName("isbn")[0].childNodes[0].nodeValue);
} else {
    alert(requestObj.statusText);
} 
