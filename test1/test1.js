
$(function () {
//    alert("ready!");
    $("#header").load("header.html");
});


function myFunction() {
    alert("You have successfully make your order at :" + new Date());
}
/*googlemap*/
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(42.343170, -71.086495),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
/*time*/
function orderTime() {
    document.getElementById("demo").innerHTML = "You have successfully make your order at :";
    document.getElementById("demo1").innerHTML = new Date();
    
}
