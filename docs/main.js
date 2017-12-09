
var cookies = 0;
var cursors = 0;
var cursorCost = 0;
var firstName;

function setName() {                                                          //After someone enters there name, this removes the field and

  firstName = document.getElementById("fName").value;                         // Retrieves name from user

  document.getElementById("game").style.display = "block";                    // Set the display div to block so that the user may begin playing
  document.getElementById("nameFields").style.fontSize = "150%";
  document.getElementById("position").style.fontSize = "150%";
  document.getElementById("nameFields").innerHTML = "Name: " + firstName;     //https://www.w3schools.com/jsref/dom_obj_style.asp
  document.getElementById("position").innerHTML = "Position: Amateur";

  document.cookie = "name=" + firstName + "; expires=Sat, 8 Dec 2017 03:15:00 UTC";
}

/* return the cookie at name cname: https://www.w3schools.com/js/js_cookies.asp */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* Load the cookies */
function loadCookies() {
  firstName = getCookie("name");
  // set the name to name from cookies
  if (firstName.length != 0)
  {
    document.getElementById("game").style.display = "block";                    // Set the display div to block so that the user may begin playing
    document.getElementById("nameFields").style.fontSize = "150%";
    document.getElementById("position").style.fontSize = "150%";
    document.getElementById("nameFields").innerHTML = "Name: " + firstName;     //https://www.w3schools.com/jsref/dom_obj_style.asp
    document.getElementById("position").innerHTML = "Position: Amateur";
    document.getElementById("nameFields").style.display = "block";
  } else {
    document.getElementById("nameFields").style.display = "block";
  }
}

/* runs on HTML body onLoad event */
function bodyOnLoad() {
  loadCookies();
}

/*
function cookieClick(number) {

  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;

}

function buyCursor() {
  cursorCost = Math.floor(10*Math.pow(1.1,cursors))     //Works Out cost for current cursor
  if(cookies >= cursorCost){                                //Checks that playerr can buy cursor
    cursors = cursors + 1;
    cookies = cookies - cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("cookies").innerHTML = cookies;
  }
  var nextCost = Math.floor(10*Math.pow(1.1,cursors));            //Updates the user of cursor cost
  document.getElementById("cursorCost").innerHTML = nextCost;
};

window.setInterval(function(){

	cookieClick(cursors);

  if(cookies < cursorCost){

  }

    //  document.getElementById("buyCursor").disabled = false;

}, 1000);
*/
