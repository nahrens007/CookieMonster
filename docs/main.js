var firstName,position;
var hideHeading;
var storyText;
var cry = 0;                                   //Baby variables
var parentsAdoration = 0;
var selfWill = 0;

/*
setNameClick(): function is activated when the "submit" button is clicked on the name input form.
This function is responsible for:
1) Retrieving the name from the input box in the name input form
2) Setting the name and position variables
3) Setting the name/position cookies
4) Setting the visibility of the header (cookie and html/css).
*/
function setNameClick() {                                                          //After someone enters there name, this removes the field and

  firstName = document.getElementById("fName").value;
                        // Retrieves name from user

  // if the firstName input field was empty, set it to a generic name.
  if (firstName == "" || firstName == null){
    firstName = "Guest";
  }

  document.getElementById("game").style.display = "block";                    // Set the display div to block so that the user may begin playing

  document.getElementById("nameInputFields").innerHTML = "";                  //https://www.w3schools.com/jsref/dom_obj_style.asp

  position = "Baby";                                                       // Clients always start as an amateur.
  hideHeading = "inline";                                                        // The heading should not be hidden since the name and position are set.

  updateHeader();                                                             // Update the heading (name/position)

  //Shows the first buttons
  document.getElementById("buttons").style.display = "inline";

  // Begin the ticker tape
  myMove();

  // Update the cookies
  setCookie("name", firstName, 30);
  setCookie("position", position, 30);
  setCookie("headingVisibility", hideHeading, 30);
}

function cryClick(){


  if(cry < 10){
    parentsAdoration--;
    selfWill++;
    cry++;
  }else{
    if(cry==10)
      document.getElementById("cryButton").innerHTML = "Wail";
    cry += 2
    parentsAdoration -= 5;
    selfWill+= 5;
  }



}
/*
Will update the information in the top header when we need it to.
*/
function updateHeader(){

  document.getElementById("gamePlayer").innerHTML = "Name: " + firstName;
  document.getElementById("gamePosition").innerHTML = "Position: " + position;

  if (hideHeading == "inline")
  {
    document.getElementById("gamePlayer").style.display = "inline";
    document.getElementById("gamePosition").style.display = "inline";
  } else {
    document.getElementById("gamePlayer").style.display = "none";
    document.getElementById("gamePosition").style.display = "none";
  }


}
/*This is going to have scrolling text to introduce the game like a ticker tape.
https://www.w3schools.com/js/js_htmldom_animate.asp*/
function myMove(){
  var elem = document.getElementById("animate");
  var id = setInterval(frame,15);
  var box = document.querySelector("#container");  //https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
  var width = box.offsetWidth + 100;
  var pos = width;

  //Starts tape offscreen so you don't see a flash of text on start
  elem.style.left = pos + "px";
  document.getElementById("animate").innerHTML = storyText;

  function frame(){
    if(pos == -2450){
      //clearInterval(id);
      pos = width;
    }else{
      pos--;
      elem.style.left = pos + "px";
    }

  }


}

/* return the cookie at name cname: https://www.w3schools.com/js/js_cookies.asp */
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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
  hideHeading = getCookie("headingVisibility");
  position = getCookie("position");

  // set the name to name from cookies
  if (firstName != "")
  {
      document.getElementById("nameInputFields").innerHTML = "";
      updateHeader();
  }else {
      document.getElementById("nameInputFields").style.display = "block";
  }
}

/* runs on HTML body onLoad event */
function bodyOnLoad() {
  storyText = "All sounds are muted. The world around is warm and comforting but "+
    "strangely is not as roomy as you first remebered. Suddenly, a light appears and " +
    "you are thrust towards the light. You think to yourself, 'Here goes nothing...'";
  loadCookies();
}
